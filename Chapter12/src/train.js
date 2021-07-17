const { processData } = require("./data_proc")
const { getModel } = require("./model")

async function train({
    dataPath,
    batchSize,
    epochs,
    modelSavePath,
}) {
    const {
        trainingData,
        targetData,
        validationData,
        validationTargetData,
        nUniqueBookId,
        nUniqueUserId
    } = await processData(dataPath)

    const model = getModel({ nUniqueBookId, nUniqueUserId })

    console.log("Training started....")
    await model.fit(trainingData, targetData, {
        batchSize,
        epochs,
        validationData: [validationData, validationTargetData],
        callbacks: {
            onEpochEnd: async (epoch, logs) => {
                const progressUpdate = `EPOCH (${epoch + 1}): Train MSE: ${Math.sqrt(logs.mse)}, Val MSE:  ${Math.sqrt(logs.val_mse)}\n`
                console.log(progressUpdate);
            }
        }
    });

    console.log("Saving model...")
    await model.save(`file://${modelSavePath}`)

}

module.exports = { train }
