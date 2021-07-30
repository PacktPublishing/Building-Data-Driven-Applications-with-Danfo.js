const dfd = require("danfojs-node")
const tf = dfd.tf

async function loadModel() {
    const model = await tf.loadLayersModel('file://./sales_pred_model/model.json');
    model.summary()
    return model
}

async function predict() {
    //You'll probably have to do some data pre-processing as we did before training
    const data = [0.1, 0.21, 0.25, 0.058, 0.0, 0.0720, 0.111, 1, 0, 0.5, 0.33] //sample processed test data
    const model = await loadModel()
    const value = model.predict(tf.tensor(data, [1, 11])) //cast data to required shape
    console.log(value.arraySync());

}

predict()
