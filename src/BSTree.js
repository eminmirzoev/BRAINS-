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
    if (!value   && value !== 0) {
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

BSTree.prototype.toString = function() {
    let str = '[';

    str += toStringNode(this._root);
    str += ']';

    return str;
}

function toStringNode(node) {
    let str = '';

    if (!node) {
        return '';
    }

    str += toStringNode(node.left);
    node.left && (str += ', ');
    str += `${node.value}`;
    node.right && (str += ', ');
    str += toStringNode(node.right);

    return str;
};

BSTree.prototype.delete = function(value) {
    if(!value && value !== 0) {
        return;
    }

    this._root = deleteNode(value, this._root);
};

function deleteNode(value, node) {
    if(!node) {
        return node;
    }

    if(value > node.value) {
        node.right = deleteNode(value, node.right);
    } else if (value < node.value) {
        node.left = deleteNode(value, node.left);
    } else if (value === node.value) {
        if (!node.left && !node.right) {
            return null;
        } else if (!node.right) {
            return node.left;
        } else if (!node.left) {
            return node.right;
        } else {
            let tempLeft = node.left;
            let tempRight = node.right;

            while (tempRight.left) {
                tempRight = tempRight.left;
            }

            tempRight.left = tempLeft;

            return node.right;
        }
    }

    return node;
};

BSTree.prototype.getHeight = function() {
    return getHeightNode(this._root);
}

function getHeightNode(node) {
    let height = 0;

    if (!node) {
        return 0;
    }
    
    const leftHeight = getHeightNode(node.left);
    const rightHeight = getHeightNode(node.right);
    height++;

    height += leftHeight > rightHeight ? leftHeight : rightHeight;

    return height;
}

BSTree.prototype.getWidth = function() {
    let levels = []; 
    let maxEl = 0;
                                    //начальный уровень       
    levels = getWidthNode(this._root, 0, levels); //levels - кол-во узлов на уровнях
    
    for(let i = 0; i < levels.length; i++) {
        if (levels[i] > maxEl) {
            maxEl = levels[i];
        } 
    }

    return maxEl;
}

function getWidthNode(node, currentLevel, levels) {
    if (!node) {
        return levels; 
    }   

    !levels[currentLevel] && (levels[currentLevel] = 0);

    levels = getWidthNode(node.left, currentLevel + 1, levels);
    levels[currentLevel] += 1;
    levels = getWidthNode(node.right, currentLevel + 1, levels);

    return levels; 
}


module.exports = BSTree;