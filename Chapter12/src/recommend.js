const dfd = require("danfojs-node")
const tf = dfd.tf

async function recommend(userId, top = 10) {
    const ratingsDF = await dfd.read_csv("./data/ratings.csv")
    const uniqueBookIds = ratingsDF["book_id"].unique().values
    uniqueBookIds.pop() //remove the last index as our network expects a book length of (nbooks -1 )
    const uniqueBookIdTensor = tf.tensor(uniqueBookIds)

    const userToRecommendForTensor = tf.fill([uniqueBookIdTensor.shape[0]], userId)

    const model = await loadModel()
    const ratings = model.predict([uniqueBookIdTensor, userToRecommendForTensor])

    const recommendationDf = new dfd.DataFrame({
        book_id: uniqueBookIds,
        ratings: ratings.arraySync()
    })
    const topRecommendationsDF = recommendationDf
        .sort_values({
            by: "ratings",
            ascending: false
        })
        .head(top)

    // topRecommendationsDF.print()

    const bookDetailsDF = await getBookDetails(topRecommendationsDF["book_id"].values)
    bookDetailsDF.print()
    console.log(bookDetailsDF.title.values);

}

async function loadModel() {
    const model = await tf.loadLayersModel('file://./book_recommendation_model/model.json');
    return model
}

async function getBookDetails(bookIds) {
    const booksDF = await dfd.read_csv("./data/books.csv")
    const books = booksDF
        .set_index({ key: "book_id" })
        .loc({ rows: bookIds, columns: [`id`, `title`, `authors`,] })
        .reset_index()
    return books
}

module.exports = { recommend }