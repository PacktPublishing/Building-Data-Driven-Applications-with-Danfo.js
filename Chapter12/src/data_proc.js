const dfd = require("danfojs-node")
const path = require("path")

async function processData(ratingsDataPath) {
    const ratingsDF = await dfd.read_csv(ratingsDataPath)

    ratingsDF.head().print()

    const nUniqueBookId = ratingsDF["book_id"].nunique()
    const nUniqueUserId = ratingsDF["user_id"].nunique()

    const bookIdTrainTensor = (ratingsDF["book_id"]).tensor
    const userIdTrainTensor = (ratingsDF["user_id"]).tensor
    const ratingsTrainTensor = (ratingsDF["rating"]).tensor

    return {
        trainingData: [bookIdTrainTensor, userIdTrainTensor],
        targetData: ratingsTrainTensor,
        nUniqueBookId,
        nUniqueUserId
    }
}

module.exports = { processData }