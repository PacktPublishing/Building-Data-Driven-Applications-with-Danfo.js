const dfd = require("danfojs-node")
const tf = dfd.tf

const LEARNING_RATE = 0.001

function getModel({ nUniqueBookId, nUniqueUserId }) {
    const bookInput = tf.layers.input({ name: "bookInput", shape: [1] })
    const bookEmbedding = tf.layers.embedding({
        inputDim: nUniqueBookId + 1,
        outputDim: 8,
        name: "bookEmbedding"
    }).apply(bookInput)
    const bookOutput = tf.layers.flatten().apply(bookEmbedding)

    const userInput = tf.layers.input({ name: "userInput", shape: [1] })
    const userEmbedding = tf.layers.embedding({
        inputDim: nUniqueUserId + 1,
        outputDim: 8,
        name: "userEmbedding"
    }).apply(userInput)
    const userOutput = tf.layers.flatten().apply(userEmbedding)

    //concatenate the two output layers
    const mergedOutput = tf.layers.concatenate().apply([bookOutput, userOutput])
    //pass to some dense layers
    const dense1 = tf.layers.dense({ units: 128, activation: "relu" }).apply(mergedOutput)
    const dense2 = tf.layers.dense({ units: 32, activation: "relu" }).apply(dense1)
    const denseOut = tf.layers.dense({ units: 1, activation: "sigmoid" }).apply(dense2)

    const model = tf.model({ inputs: [bookInput, userInput], outputs: denseOut })

    model.compile({
        optimizer: tf.train.sgd(LEARNING_RATE),
        loss: tf.losses.meanSquaredError,
        metrics: ['mse']
    });

    model.summary()
    return model
}

module.exports = { getModel }