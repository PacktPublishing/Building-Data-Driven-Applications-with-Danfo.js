const dfd = require("danfojs-node")

// read local csv file
dfd.read_csv('data/titanic.csv').then(df => { 

  df.head().print() 

}) 

// read csv remotely
const csvUrl = "https://storage.googleapis.com/tfjs-examples/multivariate-linear-regression/data/boston-housing-train.csv"; 

dfd.read_csv(csvUrl).then((df) => { 

  df.print() 

}); 