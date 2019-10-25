function ITree() {};

ITree.prototype.init = function(array) { console.log('ITree.init'); }
ITree.prototype.clear = function() { console.log('ITree.clear'); }
ITree.prototype.getSize = function() { console.log('ITree.getSize'); }
ITree.prototype.toArray = function() { console.log('ITree.toArray'); }
ITree.prototype.toString = function() { console.log('ITree.toString'); }
ITree.prototype.add = function(value) { console.log('ITree.add'); }
ITree.prototype.delete = function(value) { console.log('ITree.delete'); }
ITree.prototype.getWidth = function() { console.log('ITree.getWidth'); }
ITree.prototype.getHeight = function() { console.log('ITree.getHeight'); }
ITree.prototype.getNodes = function() { console.log('ITree.getNodes'); }
ITree.prototype.getLeaves = function() { console.log('ITree.getLeaves'); }
ITree.prototype.reverse = function() { console.log('ITree.reverse'); }

module.exports = ITree;