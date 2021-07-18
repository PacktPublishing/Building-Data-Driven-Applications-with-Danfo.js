const dfd = require("danfojs-node")
const path = require("path")

const tf = dfd.tf
const ratingsDataPath = path.join(__dirname, "data/ratings.csv")
const booksDataPath = path.join(__dirname, "data/books.csv")
const savedProcDataPath = path.join(__dirname, "output/train.csv")
const mergedDfDroppedDataPath = path.join(__dirname, "output/mergedDfDropped.csv")

async function recommend(userId, top = 10) {
    const savedProcData = await dfd.read_csv(savedProcDataPath)
    const mergedDfDropped = await dfd.read_csv(mergedDfDroppedDataPath)
    const booksDf = await dfd.read_csv(booksDataPath)

    const booksToRate = [
        6613, 8, 9943, 9539, 9532, 9844, 10, 30, 9516, 9566,
        9517, 9809, 9522, 119, 7788, 9822, 9534, 3648, 9301, 9827,
        9838, 9300, 8682, 9303, 9375, 9010, 9592, 9370, 870, 9503]

    mergedDfDropped.set_index({ key: "book_id", inplace: true})
    mergedDfDropped.head(20).print()

    const df = mergedDfDropped.loc({ rows: booksToRate })
    df.head().print()

    // const df = savedProcData.iloc({ rows: booksToRate })
    // const userToRecommendForTensor = tf.fill([savedProcData.shape[0]], userId).arraySync()
    // savedProcData.addColumn({ column: "17", value: userToRecommendForTensor })

    // // savedProcData.head().print()

    // // const uniqueBookIds = ratingsDF["book_id"].unique().values
    // // uniqueBookIds.pop() //remove the last index as our network expects a book length of (nbooks -1 )
    // // const uniqueBookIdTensor = tf.tensor(uniqueBookIds)


    // const model = await loadModel()

    // const ratings = model.predict(savedProcData.tensor).reshape([-1])

    // const recommendationDf = new dfd.DataFrame({
    //     book_ids: book_ids.values,
    //     ratings: ratings.arraySync()
    // })
    // const topRecommendationsDF = recommendationDf
    //     .sort_values({
    //         by: "ratings",
    //         ascending: false
    //     })
    //     .unique(1)

    // console.log(topRecommendationsDF);
    // topRecommendationsDF.head().print()

    // const bookDetailsDF = await getBookDetails(topRecommendationsDF["book_id"].values)
    // bookDetailsDF.print()
    // console.log(bookDetailsDF.title.values);

}

async function loadModel() {
    const model = await tf.loadLayersModel('file://./book_recommendation_model/model.json');
    return model
}

async function getBookDetails(bookIds) {
    const booksDF = await dfd.read_csv(booksDataPath)
    const books = booksDF
        .set_index({ key: "book_id" })
        .loc({ rows: bookIds, columns: [`id`, `title`, `authors`,] })
        .reset_index()
    return books
}

recommend(1)

module.exports = { recommend }