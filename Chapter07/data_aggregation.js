const dfd = require("danfojs-node")

let data = {
  'A': ['foo', 'bar', 'foo', 'bar',

    'foo', 'bar', 'foo', 'foo'],

  'C': [1, 3, 2, 4, 5, 2, 6, 7],

  'D': [3, 2, 4, 1, 5, 6, 7, 8]
};

let df = new dfd.DataFrame(data);
let group_df = df.groupby(["A"]);
group_df.agg({ C: "mean", D: "count" }).print();


// grouped by two column
data = {
  'A': ['foo', 'bar', 'foo', 'bar',

    'foo', 'bar', 'foo', 'foo'],

  'B': ['one', 'one', 'two', 'three',

    'two', 'two', 'one', 'three'],

  'C': [1, 3, 2, 4, 5, 2, 6, 7],

  'D': [3, 2, 4, 1, 5, 6, 7, 8]
};

df = new dfd.DataFrame(data);
group_df = df.groupby(["A", "B"]);
group_df.agg({ C: "mean", D: "count" }).print(); 