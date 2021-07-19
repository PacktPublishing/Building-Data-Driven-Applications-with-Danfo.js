const dfd = require("danfojs-node")
const tf = dfd.tf

const LEARNING_RATE = 0.01

function getModel({ nItem, nUser }) {
    const itemInput = tf.layers.input({ name: "itemInput", shape: [1] })
    const userInput = tf.layers.input({ name: "userInput", shape: [1] })

    const itemEmbedding = tf.layers.embedding({
        inputDim: nItem + 1,
        outputDim: 16,
        name: "itemEmbedding",
        embeddingsInitializer: "leCunUniform",
    }).apply(itemInput)

    const userEmbedding = tf.layers.embedding({
        inputDim: nUser + 1,
        outputDim: 16,
        name: "userEmbedding",
        embeddingsInitializer: "leCunUniform",
    }).apply(userInput)

    //Dot product of the two output layers
    const mergedOutput = tf.layers.dot({ axes: 0}).apply([itemEmbedding, userEmbedding])
    const flatten = tf.layers.flatten().apply(mergedOutput)
    const denseOut = tf.layers.dense({ units: 1, activation: "sigmoid", kernelInitializer: "leCunUniform" }).apply(flatten)

    const model = tf.model({ inputs: [itemInput, userInput], outputs: denseOut })

    model.compile({
        optimizer: tf.train.adam(LEARNING_RATE),
        loss: tf.losses.meanSquaredError
    });

    model.summary()
    return model
}
// getModel({ nItem: 20, nUser: 10 })

module.exports = { getModel }