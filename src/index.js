const BSTree = require('./BSTree');

const tree = new BSTree();
const arr = [60, 50, 70, 40, 55];
tree.init(arr);

// const str = tree.toString();
const del = tree.delete(50);
console.log(del);