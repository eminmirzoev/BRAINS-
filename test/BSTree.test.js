const { assert } = require('chai');
const BSTree = require('../src/BSTree');

describe('BSTree instance', () => {
    it('Should be an object', () => {
        const tree = new BSTree();
        
        assert.isObject(tree);
    });
});

describe('BSTree.getSize', () => {
    let tree = null;

    beforeEach(() => {
        tree = new BSTree();
    });

    it('should return size (undefined)', () => {
        const arr = undefined;
        const expected = 0;
        tree.init(arr);

        const actual = tree.getSize();

        assert.deepEqual(actual, expected);
    });
    
    it('should return size ([])', () => {
        const arr = [];
        const expected = 0;
        tree.init(arr);

        const actual = tree.getSize();

        assert.deepEqual(actual, expected);
    });
    
    it('should return size ([1])', () => {
        const arr = [1];
        const expected = 1;
        tree.init(arr);

        const actual = tree.getSize();

        assert.deepEqual(actual, expected);
    });
    
    it('should return size ([2, 1])', () => {
        const arr = [2, 1];
        const expected = 2;
        tree.init(arr);

        const actual = tree.getSize();

        assert.deepEqual(actual, expected);
    });
    
    it('should return size ([1, 2, 0, -8, 21])', () => {
        const arr = [1, 2, 0, -8, 21];
        const expected = 5;
        tree.init(arr);

        const actual = tree.getSize();

        assert.deepEqual(actual, expected);
    });
});

describe('BSTree.toString', () => {
    let tree = null;

    beforeEach(() => {
        tree = new BSTree();
    });

    it('should return correct string (undefined)', () => {
        const arr = undefined;
        const expected = '[]';
        tree.init(arr);

        const actual = tree.toString();

        assert.deepEqual(actual, expected);
    });
    
    it('should return size ([])', () => {
        const arr = [];
        const expected = '[]';
        tree.init(arr);

        const actual = tree.toString();

        assert.deepEqual(actual, expected);
    });
    
    it('should return correct string ([1])', () => {
        const arr = [1];
        const expected = '[1]';
        tree.init(arr);

        const actual = tree.toString();

        assert.deepEqual(actual, expected);
    });
    
    it('should return correct string ([2, 1])', () => {
        const arr = [2, 1];
        const expected = '[1, 2]';
        tree.init(arr);

        const actual = tree.getSize();

        assert.deepEqual(actual, expected);
    });
    
    it('should return correct string ([1, 2, 0, -8, 21])', () => {
        const arr = [1, 2, 0, -8, 21];
        const expected = '[-8, 0, 1, 2, 21]';
        tree.init(arr);

        const actual = tree.toString();

        assert.deepEqual(actual, expected);
    });
});
