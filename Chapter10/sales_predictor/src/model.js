const dfd = require("danfojs-node")
const tf = dfd.tf

const LEARNING_RATE = 0.01

function getModel() {
    const model = tf.sequential();
    model.add(tf.layers.dense({ inputShape: [11], units: 128, kernelInitializer: 'leCunNormal' }));
    model.add(tf.layers.dense({ units: 64, activation: 'relu' }));
    model.add(tf.layers.dense({ units: 32, activation: 'relu' }));
    model.add(tf.layers.dense({ units: 1 }))

    model.compile({
        optimizer: tf.train.adam(LEARNING_RATE),
        loss: tf.losses.meanSquaredError,
        metrics: ['mse']
    });

    model.summary()
    return model
}


module.exports = { getModel }
