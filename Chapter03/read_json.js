const dfd = require("danfojs-node")
const path = require("path")

const file_path = path.join(__dirname, "data", "book.json")
//read json file locally
dfd.read_json(file_path).then(df => {

  df.head().print()

}) 