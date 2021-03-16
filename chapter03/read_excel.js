const dfd = require("Danfo.js-node") 

  
//read excel file
dfd.read_excel('data/SampleData.xlsx', {header_index: 7}).then(df => { 

  df.head().print() 

}) 