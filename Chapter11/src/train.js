const { processData } = require("./data_proc")
const { getModel } = require("./model")
const path = require("path")

async function train() {
    const {
        trainingData,
        targetData,
        nItem,
        nUser
    } = await processData()

    const model = getModel({ nItem, nUser })

    console.log("Training started....")
    await model.fit(trainingData, targetData, {
        batchSize: 128,
        epochs: 5,
        validationSplit: 0.1,
        callbacks: {
            onEpochEnd: async (epoch, logs) => {
                const progressUpdate = `EPOCH (${epoch + 1}): Train MSE: ${Math.sqrt(logs.loss)}, Val MSE:  ${Math.sqrt(logs.val_loss)}\n`
                console.log(progressUpdate);
            }
        }
    });

    console.log("Saving model...")
    await model.save(`file://${path.join(__dirname, "movie_recommendation_model")}`)

}

train()
