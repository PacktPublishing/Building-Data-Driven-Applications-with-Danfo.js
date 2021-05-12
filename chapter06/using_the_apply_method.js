const dfd = require("danfojs-node")
let data = { 'A': [ 'foo', 'bar', 'foo', 'bar', 

                    'foo', 'bar', 'foo', 'foo' ], 

               'C': [ 1, 3, 2, 4, 5, 2, 6, 7 ], 

               'D': [ 3, 2, 4, 1, 5, 6, 7, 8 ] 
            }; 

let df = new dfd.DataFrame(data); 
let group_df = df.groupby([ "A"]); 

const add = (x) => { 
  return x.add(2); 
}; 

group_df.apply(add).print(); 

// double column grouping
data = { 'A': [ 'foo', 'bar', 'foo', 'bar', 

                    'foo', 'bar', 'foo', 'foo' ], 

            'B': [ 'one', 'one', 'two', 'three', 

                  'two', 'two', 'one', 'three' ], 

            'C': [ 1, 3, 2, 4, 5, 2, 6, 7 ], 

            'D': [ 3, 2, 4, 1, 5, 6, 7, 8 ] }; 

df = new DataFrame(data); 
group_df = df.groupby([ "A", "B"]); 

let subMin = (x) => { 
  return x.sub(x.min()); 
}; 
group_df.apply(subMin).print(); 

subMin = (x) => { 
  if (x.values.length > 1) { 
    return x.sub(x.min()); 
  } else { 
    return x; 
  } 
}; 
group_df.apply(subMin).print(); 

// standardization of data 

data = { 'A': [ 'foo', 'bar', 'foo', 'bar', 

                    'foo', 'bar', 'foo', 'foo' ], 

            'C': [ 1, 3, 2, 4, 5, 2, 6, 7 ], 

            'D': [ 3, 2, 4, 1, 5, 6, 7, 8 ] }; 

df = new DataFrame(data); 
group_df = df.groupby([ "A"]); 

// (x - x.mean()) / x.std() 
const norm = (x) => { 
  return x.sub(x.mean()).div(x.std()); 
}; 
group_df.apply(norm).print(); 

