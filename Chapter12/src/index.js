const { train } = require("./train")
const { recommend } = require("./recommend")
const path = require("path")

train({
    dataPath: path.join(__dirname, "data/ratings.csv"),
    batchSize: 128,
    epochs: 5,
    modelSavePath: "./book_recommendation_model"
}).then(() => {
    recommend(37481, 10) // Recommend 10 books for user with id 37481
}).catch((err) => {
    console.log(err)
})

