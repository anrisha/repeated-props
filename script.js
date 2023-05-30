const arr = ["one", 2, "one", "one", "two", 2, "three", 4, 3, 2, 1, 1, 2, 4, 4];

const count = {};
let counter = function (e) {
  for (let i = 0; i < e.length; i++) {
    count[e[i]] = (count[e[i]] || 0) + 1;
  }

  console.log(count);
};
counter(arr);
