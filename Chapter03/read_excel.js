const dfd = require("danfojs-node")
const path = require("path")

//read excel file
const file_path = path.join(__dirname, "data", "SampleData.xlsx")
dfd.read_excel(file_path).then(df => {

  df.head().print()

}) 