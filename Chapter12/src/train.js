const { processData } = require("./data_proc")
const { getModel } = require("./model")


async function train() {
    const {
        trainingData,
        targetData,
        // nExtraFeatures,
        nUniqueBookId,
        nUniqueUserId
    } = await processData()

    const model = getModel({ nUniqueBookId, nUniqueUserId })

    console.log("Training started....")
    await model.fit(trainingData, targetData, {
        batchSize: 128,
        epochs: 5,
        validationSplit: 0.1,
        callbacks: {
            onEpochEnd: async (epoch, logs) => {
                const progressUpdate = `EPOCH (${epoch + 1}): Train MSE: ${Math.sqrt(logs.mse)}, Val MSE:  ${Math.sqrt(logs.val_mse)}\n`
                console.log(progressUpdate);
            }
        }
    });

    console.log("Saving model...")
    await model.save(`file://book_recommendation_model`)

}

train()
