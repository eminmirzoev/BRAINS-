const BSTree = require('./BSTree');

const tree = new BSTree();
const arr = [1, 2, 0, -8, 21, 12, -5, 9];
tree.init(arr);

// const str = tree.toString();
const del = tree.delete(12);
console.log(del);