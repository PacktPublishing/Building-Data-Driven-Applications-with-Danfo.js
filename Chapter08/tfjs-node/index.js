const tf = require('@tensorflow/tfjs-node')
// const tf = require('@tensorflow/tfjs-node-gpu') GPU version
// const tf = require('@tensorflow/tfjs') Pure JS version

const xs = tf.randomNormal([100, 10])
const ys = tf.randomNormal([100, 1])

const sum = xs.add(ys)
const xsSum = xs.sum()
const xsMean = xs.mean()

console.log("Sum of xs and ys")
sum.print()
console.log("Sum of xs")
xsSum.print()
console.log("Mean of xs")
xsMean.print()

