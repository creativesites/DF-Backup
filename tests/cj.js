const data = require('./phones.json');

var count = data.reduce(function(values, v) {
    if (!values.set[v]) {
      values.set[v] = 1;
      values.count++;
    }
    return values;
  }, { set: {}, count: 0 }).count;
  
  console.log(count);

  // get value with highest count
    var max = data.reduce(function(values, v) {
    if (!values.set[v]) {
      values.set[v] = 1;
      values.count++;
    } else {
      values.set[v]++;
    }
    if (values.set[v] > values.max) {
        values.max = values.set[v];
        values.maxValue = v;
        }
    return values;
    }, { set: {}, count: 0, max: 0, maxValue: null }).maxValue;
    console.log(max);

    let g = '+17032260855'
    // find the count of g in the array
    let countG = data.reduce((n, val) => n + (val === g), 0);
    console.log(countG);