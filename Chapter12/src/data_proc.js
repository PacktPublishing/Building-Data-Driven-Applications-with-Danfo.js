const dfd = require("danfojs-node")
const path = require("path")

const moviesDataPath = path.join(__dirname, "data/movielens.csv")

async function processData() {
    const moviesDF = await dfd.read_csv(moviesDataPath)

    console.log(`Training Dataset Shape: ${moviesDF.shape}`)

    const nItem = (moviesDF["item_id"]).max()
    const nUser = (moviesDF["user_id"]).max()

    const moviesIdTrainTensor = (moviesDF["item_id"]).tensor
    const userIdTrainTensor = (moviesDF["user_id"]).tensor
    const targetData = (moviesDF["rating"]).tensor

    return {
        trainingData: [moviesIdTrainTensor, userIdTrainTensor],
        targetData,
        nItem,
        nUser
    }
}

module.exports = { processData }