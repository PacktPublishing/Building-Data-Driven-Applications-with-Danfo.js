const dfd = require("danfojs-node")
const path = require("path")

const file_path = path.join(__dirname, "data", "titanic.csv")
// read local csv file
dfd.read_csv(file_path).then(df => {

  df.head().print()

})

// read csv remotely
const csvUrl = "https://storage.googleapis.com/tfjs-examples/multivariate-linear-regression/data/boston-housing-train.csv";

dfd.read_csv(csvUrl).then((df) => {

  df.print()

}); 