const dfd = require("danfojs-node")
const path = require("path")

async function processData(ratingsDataPath) {
    const ratingsDF = await dfd.read_csv(ratingsDataPath)

    ratingsDF.head().print()

    //split data into train and target values
    let xTrain, xVal;
    const nxTrain = ratingsDF.shape[0] * 0.9; //training size of 90%

    xTrain = (await ratingsDF.sample()).iloc({ rows: [`0:${nxTrain}`] })
    xVal = (await ratingsDF.sample()).iloc({ rows: [`${nxTrain}:`] })

    xTrain.head().print()
    xVal.head().print()

    console.log(`Training Dataset Shape: ${xTrain.shape}`)
    console.log(`Test Dataset Shape: ${xVal.shape}`)

    const nUniqueBookId = ratingsDF["book_id"].nunique()
    const nUniqueUserId = ratingsDF["user_id"].nunique()

    const bookIdTrainTensor = (xTrain["book_id"]).tensor
    const userIdTrainTensor = (xTrain["user_id"]).tensor
    const ratingsTrainTensor = (xTrain["rating"]).tensor

    const bookIdValidationTensor = (xVal["book_id"]).tensor
    const userIdValidationTensor = (xVal["user_id"]).tensor
    const ratingsValidationTensor = (xVal["rating"]).tensor

    return {
        trainingData: [bookIdTrainTensor, userIdTrainTensor],
        targetData: ratingsTrainTensor,
        validationData: [bookIdValidationTensor, userIdValidationTensor],
        validationTargetData: ratingsValidationTensor,
        nUniqueBookId,
        nUniqueUserId
    }
}

module.exports = { processData }