const dfd = require("danfojs-node")
const path = require("path")

const tf = dfd.tf
const moviesDataPath = path.join(__dirname, "data/movielens.csv")
const movieDetailsDataPath = path.join(__dirname, "data/movieInfo.csv")


async function recommend(userId, top = 10) {
    const moviesDF = await dfd.read_csv(moviesDataPath)
    const uniqueMoviesId = moviesDF["item_id"].unique().values
    const uniqueMoviesIdTensor = tf.tensor(uniqueMoviesId)

    const userToRecommendForTensor = tf.fill([uniqueMoviesIdTensor.shape[0]], userId)

    const model = await loadModel()
    const ratings = model.predict([uniqueMoviesIdTensor, userToRecommendForTensor])

    const recommendationDf = new dfd.DataFrame({
        movie_id: uniqueMoviesId,
        ratings: ratings.arraySync()
    })

    const topRecommendationsDF = recommendationDf
        .sort_values({
            by: "ratings",
            ascending: false
        })
        .head(top)

    const movieDetailsDF = await getMovieDetails(topRecommendationsDF["movie_id"].values)
    console.log(movieDetailsDF["movie title"].values);

}

async function loadModel() {
    const model = await tf.loadLayersModel(`file://${path.join(__dirname, "movie_recommendation_model", "model.json")}`);
    return model
}

async function getMovieDetails(movieIds) {
    const movieDF = await dfd.read_csv(movieDetailsDataPath)
    const movie = movieDF
        .set_index({ key: "movie id" })
        .loc({ rows: movieIds, columns: [`movie title`, `release date`,] })
        .reset_index()
    return movie
}

recommend(196, 10) // Recommend 10 books for user with id 196
recommend(880, 5) // Recommend 5 books for user with id 880
recommend(13, 20) // Recommend 20 books for user with id 13

module.exports = { recommend }