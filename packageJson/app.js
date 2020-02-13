const _ = require("lodash")
const arr = [1, false, 2, '', 3];

console.log(_.compact(arr));

// output: [1, 2, 3]
