const dfd = require("danfojs-node")

let data = {
  'A': ['foo', 'bar', 'foo', 'bar',

    'foo', 'bar', 'foo', 'foo'],

  'B': ['one', 'one', 'two', 'three',

    'two', 'two', 'one', 'three'],

  'C': [1, 3, 2, 4, 5, 2, 6, 7],

  'D': [3, 2, 4, 1, 5, 6, 7, 8]
};

let df = new dfd.DataFrame(data);
let group_df1 = df.groupby(["A"]);
console.log(group_df1.data_tensors) // print data_tensors


let grouped_data1 = group_df1.data_tensors;

for (let key in grouped_data1) {

  grouped_data1[key].print();

}

let group_df2 = df.groupby(["A", "B"]);
let grouped_data = group_df2.data_tensors;

for (let key in grouped_data) {
  let key_data = grouped_data[key];
  for (let key2 in key_data) {
    grouped_data[key][key2].print();
  }
}

// Using get_groups
let group_df3 = df.groupby(["A"]);
group_df3.get_groups(["foo"]).print()  // get grouped data for key foo
group_df3.get_groups(["bar"]).print()  // get grouped data for key bar

let group_df4 = df.groupby(["A", "B"]);  // grouped by double column
group_df4.get_groups(["foo", "one"]).print() // obtain grouped data base on key combination from columnA and B
group_df4.get_groups(["bar", "two"]).print()





