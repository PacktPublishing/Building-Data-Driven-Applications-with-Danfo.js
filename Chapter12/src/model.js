const dfd = require("danfojs-node")
const tf = dfd.tf

const LEARNING_RATE = 0.001

// function getModel() {
//     const model = tf.sequential();
//     model.add(tf.layers.dense({ inputShape: [18], units: 128, kernelInitializer: 'leCunNormal' }));
//     model.add(tf.layers.dense({ units: 64, activation: 'relu' }));
//     model.add(tf.layers.dense({ units: 32, activation: 'relu' }));
//     model.add(tf.layers.dense({ units: 1 }))

//     model.compile({
//         optimizer: tf.train.adam(LEARNING_RATE),
//         loss: tf.losses.meanSquaredError,
//         metrics: ['mse']
//     });

//     return model
// }

function getModel({ nExtraFeatures, nUniqueBookId, nUniqueUserId }) {
    const bookInput = tf.layers.input({ name: "bookInput", shape: [1] })
    const bookEmbedding = tf.layers.embedding({
        inputDim: nUniqueBookId + 1,
        outputDim: 32,
        name: "bookEmbedding"
    }).apply(bookInput)
    const bookOutput = tf.layers.flatten().apply(bookEmbedding)

    const userInput = tf.layers.input({ name: "userInput", shape: [1] })
    const userEmbedding = tf.layers.embedding({
        inputDim: nUniqueUserId + 1,
        outputDim: 32,
        name: "userEmbedding"
    }).apply(userInput)
    const userOutput = tf.layers.flatten().apply(userEmbedding)


    const extraFeatsInput = tf.layers.input({ name: "ExtraInput", shape: [18] })
    const denseExtra0 = tf.layers.dense({ units: 128, activation: "relu" }).apply(extraFeatsInput)
    const denseExtra1 = tf.layers.dense({ units: 64, activation: "relu" }).apply(denseExtra0)

    const mergedOutput = tf.layers.concatenate().apply([bookOutput, userOutput, denseExtra1])

    // const extraFeatsEmbedding = tf.layers.embedding({
    //     inputDim: nExtraFeatures,
    //     outputDim: 64,
    //     name: "extraEmbedding"
    // }).apply(extraFeatsInput)
    // const extraFeatsOutput = tf.layers.flatten().apply(extraFeatsEmbedding)


    //concatenate the three output layers
    //pass to some dense layers
    const dense1 = tf.layers.dense({ units: 128, activation: "relu" }).apply(mergedOutput)
    const dense2 = tf.layers.dense({ units: 64, activation: "relu" }).apply(dense1)
    const dense3 = tf.layers.dense({ units: 32, activation: "relu" }).apply(dense2)
    const denseOut = tf.layers.dense({ units: 1, activation: "sigmoid" }).apply(dense3)

    const model = tf.model({ inputs: [extraFeatsInput, bookInput, userInput], outputs: denseOut })

    model.compile({
        optimizer: tf.train.sgd(LEARNING_RATE),
        loss: tf.losses.meanSquaredError,
        metrics: ['mse']
    });

    model.summary()
    return model
}

// getModel({ nExtraFeatures: 200, nUniqueBookId: 20, nUniqueUserId: 10 })
module.exports = { getModel }