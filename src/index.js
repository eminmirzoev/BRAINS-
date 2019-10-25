const BSTree = require('./BSTree');

const tree = new BSTree();
const arr = [60, 50, 70, 40, 55];
tree.init(arr);

// const str = tree.toString();
const str = tree.toArray();
console.log(str)