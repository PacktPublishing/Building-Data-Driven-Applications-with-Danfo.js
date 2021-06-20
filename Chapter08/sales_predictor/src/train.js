const { processData } = require("./data-proc")
const { get_model } = require("./model")

async function train() {
    const data = await processData("./dataset/train.csv")
    const Xtrain = data[0]
    const ytrain = data[1]

    const model = get_model()

    console.log("Training started....")
    await model.fit(Xtrain, ytrain, {
        batchSize: 24,
        epochs: 20,
        validationSplit: 0.2,
        callbacks: {
            onEpochEnd: async (epoch, logs) => {
                const progressUpdate = `EPOCH (${epoch + 1}): Train MSE: ${Math.sqrt(logs.mse)}, Val MSE:  ${Math.sqrt(logs.val_mse)}\n`
                console.log(progressUpdate);
            }
        }
    });

}

train()