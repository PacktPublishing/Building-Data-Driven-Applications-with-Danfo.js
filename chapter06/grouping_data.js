const dfd = require("danfojs-node")
// single Column Grouping
let data = { 'A': [ 'foo', 'bar', 'foo', 'bar', 

                    'foo', 'bar', 'foo', 'foo' ],            	      
                    
              'C': [ 1, 3, 2, 4, 5, 2, 6, 7 ], 

              'D': [ 3, 2, 4, 1, 5, 6, 7, 8 ] 
            }; 

let df = new dfd.DataFrame(data); 

let group_df = df.groupby([ "A"]); // grouped by column A
group_df.mean().print()


let col_c = group_df.col(['C']) // Obtain column C
col_c.sum().print() 


let col_d = group_df.col(['D']) // Obtain column D
col_d.count().print() 


// Double column Grouping
let data = { 'A': [ 'foo', 'bar', 'foo', 'bar', 

                    'foo', 'bar', 'foo', 'foo' ], 

              ' B': [ 'one', 'one', 'two', 'three', 

      	          'two', 'two', 'one', 'three' ], 

               'C': [ 1, 3, 2, 4, 5, 2, 6, 7 ], 

               'D': [ 3, 2, 4, 1, 5, 6, 7, 8 ] }; 

let df = new dfd.DataFrame(data); 

let group_df = df.groupby([ "A", "B"]); 
group_df.mean().print() 

let col_c = group_df.col(['C']); // obtain column C
col_c.sum().print(); 

