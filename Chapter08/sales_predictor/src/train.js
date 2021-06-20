const { processData } = require("./data-proc")
const { getModel } = require("./model")

async function train() {
    const data = await processData("./dataset/train.csv")
    const Xtrain = data[0]
    const ytrain = data[1]

    const model = getModel()

    console.log("Training started....")
    await model.fit(Xtrain, ytrain, {
        batchSize: 24,
        epochs: 1,
        validationSplit: 0.2,
        callbacks: {
            onEpochEnd: async (epoch, logs) => {
                const progressUpdate = `EPOCH (${epoch + 1}): Train MSE: ${Math.sqrt(logs.mse)}, Val MSE:  ${Math.sqrt(logs.val_mse)}\n`
                console.log(progressUpdate);
            }
        }
    });
    
    console.log("Saving model...")
    await model.save("file://./sales_pred_model")

}

train()
