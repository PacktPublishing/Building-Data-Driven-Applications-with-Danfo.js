const dfd = require("Danfo.js-node") 

//read json file locally
dfd.read_json('data/book.json').then(df => { 

  df.head().print() 

}) 