const tf = require('@tensorflow/tfjs-node')



const a = tf.tensor1d([1, 2, 3]);
const b = tf.tensor1d([2, 2, 2]);

a.equal(b).print();
a.greater(b).print();
a.greaterEqual(b).print();
a.less(b).print();
a.lessEqual(b).print();

// const x = tf.tensor1d([1, 2, 3]);
// x.mean().print();  // or tf.mean(a)
// x.min().print();  // or tf.mean(a)
// x.max().print();  // or tf.mean(a)
// x.argMax().print();  // or tf.mean(a)
// x.argMin().print();  // or tf.mean(a)



// const x = tf.tensor1d([-1, 2, -3, 4]);
// x.abs().print();  // Computes the absolute values of the tensor
// x.cos().print(); // Computes the cosine of the tensor
// x.exp().print(); // Computes the exponential of the tensor
// x.log().print(); // Computes the natural logarithm  of the tensor
// x.square().print(); // Computes the sqaure of the tensor


// const tfsub = tf.sub(a, b)
// const tfdiv = tf.div(a, b)
// const tfpow = tf.pow(b, a)
// const tfmax = tf.maximum(a, b)

// tfsum.print()
// tfsub.print()
// tfdiv.print()
// tfpow.print()
// tfmax.print()

// tf.tensor1d([1, 2, 3]).print();
// tf.tensor2d([[1, 2], [3, 4]]).print();
// tf.tensor3d([[[1], [2]], [[3], [4]]]).print();
// tf.tensor4d([[[[1], [2]], [[3], [4]]]]).print();
// tf.tensor5d([[[[[1],[2]],[[3],[4]]],[[[5],[6]],[[7],[8]]]]]).print();
// tf.tensor6d([[[[[[1],[2]],[[3],[4]]],[[[5],[6]],[[7],[8]]]]]]).print();

// const tvector = tf.tensor([1, 2, 3, 4]);
// console.log(tvector)
// console.log('shape:', tvector.shape);
// tvector.print();

// const tvectorArray = tvector.array()
// const tvectorArraySync = tvector.arraySync()
// console.log(tvectorArray)
// console.log(tvectorArraySync)


// const ts = tf.tensor([1, 2, 3, 4], [1, 4]);
// console.log('dtype:', ts.dtype);
// const tsInt = tf.tensor([1, 2, 3, 4], [1, 4], 'int32');
// console.log('dtype:', tsInt.dtype);


// // Create a rank-2 tensor (matrix) from a multidimensional array.
// const tmatrix = tf.tensor([[1, 2], [3, 4]]);
// console.log('shape:', tmatrix.shape);
// tmatrix.print();

// // Or you can create a tensor from a flat array and specify a shape.
// const shape = [2, 2];
// const tmatrix2 = tf.tensor([1, 2, 3, 4], shape);
// console.log('shape:', tmatrix2.shape);
// tmatrix2.print();