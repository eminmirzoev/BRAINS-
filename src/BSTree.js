const ITree = require('./ITree');
const Node = require('./Node');

function BSTree() {
    ITree.apply(this, arguments);

    this._root;
};

BSTree.prototype = Object.create(ITree.prototype);
BSTree.prototype.constructor = BSTree;

BSTree.prototype.init = function(array) {
    this.clear();

    if (Array.isArray(array)) {
        for (let i = 0; i < array.length; i++) {
            this.add(array[i]);
        }
    }
}

BSTree.prototype.add = function(value) {
    if (!value && value !== 0) {
        return;
    }

    this._root = addNode(this._root, value);    
}

function addNode(node, value) {
    if (!node) {
        return new Node(value);
    } else if (value < node.value) {
        node.left = addNode(node.left, value);
    } else {
        node.right = addNode(node.right, value);
    }

    return node;
}

BSTree.prototype.clear = function() {
    this._root = null;
}

BSTree.prototype.getSize = function() {
    return getSizeNode(this._root);
}

function getSizeNode(node) {
    if (!node) {
        return 0;
    }

    let result = 1;
    result += getSizeNode(node.left);
    result += getSizeNode(node.right);

    return result;
}

module.exports = BSTree;