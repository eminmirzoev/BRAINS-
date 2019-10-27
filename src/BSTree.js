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
        fixCurrentHeight(node.left);
        node.left = balance(node.left);
    } else {
        node.right = addNode(node.right, value);
        fixCurrentHeight(node.right);
        node.right = balance(node.right);
    }

    fixCurrentHeight(node);
    
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
    if (!value && value !== 0) {
        return;
    }

    this._root = deleteNode(value, this._root);
    this._root = balanceNode(this._root);
};

function deleteNode(value, node) {
    if (!node) {
        return node;
    }

    if (value > node.value) {
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

    for (let i = 0; i < levels.length; i++) {
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

BSTree.prototype.getLeaves = function() {
    size = getLeavesNode(this._root);

    return size;
}

function getLeavesNode(node) {
    let size = 0;

    if (!node) {
        return size;
    }

    node.left && (size += getLeavesNode(node.left));
    node.right && (size += getLeavesNode(node.right));

    if (!node.left && !node.right) {
        size++;
    }

    return size;
}

BSTree.prototype.reverse = function() {
    this._root = reverseNode(this._root);
}

function reverseNode(node) {
    if (!node) {
        return null;
    }

    const leftNode = node.left;

    node.left = node.right;
    node.right = leftNode;

    node.left = reverseNode(node.left);
    node.right = reverseNode(node.right);

    return node;
}

BSTree.prototype.toArray = function() {
    return toArrayNode(this._root);
}

function toArrayNode(node) {
    if (!node) {
        return [];
    }

    const left = toArrayNode(node.left);
    const right = toArrayNode(node.right);

    return [...left, node.value, ...right];
}

function fixCurrentHeight(node) {
    const leftHeight = node.left ? node.left.height : 0;
    const rightHeight = node.right ? node.right.height : 0;
    
    node.height = 0;
    node.height++;

    node.height += leftHeight > rightHeight ? leftHeight : rightHeight;
}

function rotateRight(node) {
    let tempNode = node.left;
    node.left = tempNode.right;
    tempNode.right = node;
    fixCurrentHeight(node);
    fixCurrentHeight(tempNode);

    return tempNode;
}

function rotateLeft(node) {
    let tempNode = node.right;
    node.right = tempNode.left;
    tempNode.left = node;
    fixCurrentHeight(tempNode);
    fixCurrentHeight(node);

    return tempNode;
}

function balance(node) {
    if (!node) {
        return node;
    }

    const bFactor = node.getBfactor();

    if (bFactor > 1) {
        if(node.right.getBfactor() < 0) {
            node.right = rotateRight(node.right);
        }

        return rotateLeft(node);
    } else if (bFactor < -1) {
        if(node.left.getBfactor() > 0) {
            node.left = rotateLeft(node.left);
        }

        return rotateRight(node);
    }

    return node;
}

function balanceNode(node) {
    if (!node) {
        return node;
    }

    node.left = balanceNode(node.left);
    node.right = balanceNode(node.right);
    fixCurrentHeight(node);

    const bFactor = node.getBfactor();

    if (bFactor < -1 || bFactor > 1) {
        node = balance(node);
    };

    return node;
}

module.exports = BSTree;
