function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.height = 1;
}

Node.prototype.getBfactor = function() {
    const leftHeight = this.left ? this.left.height : 0;
    const rightHeight = this.right ? this.right.height : 0;

    return rightHeight - leftHeight;
};

module.exports = Node;