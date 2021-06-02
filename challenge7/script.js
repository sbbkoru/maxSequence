"use strict";

const maxSequence = function (arr) {
  if (arr.length === 0) {
    return 0;
  } else if (arr.every((num) => num < 0)) {
    return 0;
  } else {
    const maxInt = Math.pow(2, 53);
    let enfazla = -maxInt;
    let son = 0;

    for (let i = 0; i < arr.length; i++) {
      son += arr[i];
      if (enfazla < son) enfazla = son;
      if (son < 0) son = 0;
    }
    return enfazla;
  }
};
const ar3 = [-5, -3, -2, 6, 2, -4, 5, -7, 4];
const ar2 = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const ar4 = [7, -3, -2, 6, -5];
const ar5 = [3, 2, 8, 1];
const ar6 = [-5, -4, 11, 3, -4];
console.log(maxSequence(ar4));
