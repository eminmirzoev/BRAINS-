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

        const actual = tree.toString();

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

describe('BSTree.delete', () => {
    it('should return [] (55)', () => {
        const arr = undefined;
        const val = 55;
        const expected = '[]';
        tree.init(arr);
        tree.delete(val);

        const actual = tree.toString();
    });

    it('should return [] (55)', () => {
        const arr = [];
        const val = 55;
        const expected = '[]';
        tree.init(arr);
        tree.delete(val);

        const actual = tree.toString();
    });

    it('should return [1] (55)', () => {
        const arr = [1];
        const val = 55;
        const expected = '[1]';
        tree.init(arr);
        tree.delete(val);

        const actual = tree.toString();
    });

    it('should return [1, 2] (55)', () => {
        const arr = [2, 1];
        const val = 55;
        const expected = '[1, 2]';
        tree.init(arr);
        tree.delete(val);        

        const actual = tree.toString();
    });

    it('should return [-8, 0, 1, 2] (21)', () => {
        const arr = [1, 2, 0, -8, 21];
        const val = 21;
        const expected = '[-8, 0, 1, 2]';
        tree.init(arr);
        tree.delete(val);

        const actual = tree.toString();
    });

    it('should return [40, 50, 60, 70] (55)', () => {
        const arr = [40, 50, 55, 60, 70];
        const val = 55;
        const expected = '[40, 50, 60, 70]';
        tree.init(arr);
        tree.delete(val);

        const actual = tree.toString();

        assert.deepEqual(actual, expected);
    });

    it('should return [40, 50, 55, 60] (70)', () => {
        const arr = [40, 50, 55, 60, 70];
        const val = 70;
        const expected = '[40, 50, 55, 60]';
        tree.init(arr);
        tree.delete(val);

        const actual = tree.toString();
    });
    
    it('should return [40, 50, 55, 60, 74, 76, 80, 90] (75)', () => {
        const arr = [50, 40, 70, 55, 75, 60, 90, 74, 76, 80];
        const val = 75;
        const expected = '[40, 50, 55, 60, 70, 74, 76, 80, 90]';
        tree.init(arr);
        tree.delete(val);

        const actual = tree.toString();
    });
});    

describe('BSTree.getHeight', () => {
    let tree = null;

    beforeEach(() => {
        tree = new BSTree();
    });

    it('should return height(undefined)', () => {
        const arr = undefined;
        const expected = 0;
        tree.init(arr);

        const actual = tree.getHeight();

        assert.deepEqual(actual, expected);
    });
    

    it('should return height ([])', () => {
        const arr = [];
        const expected = 0;
        tree.init(arr);

        const actual = tree.getHeight();

        assert.deepEqual(actual, expected);
    });
    
    it('should return height(1)', () => {
        const arr = [1];
        const expected = 1;
        tree.init(arr);

        const actual = tree.getHeight();

        assert.deepEqual(actual, expected);
    });
    
    it('should return height(2, 1)', () => {
        const arr = [2, 1];
        const expected = 2;
        tree.init(arr);

        const actual = tree.getHeight();

        assert.deepEqual(actual, expected);
    });
    

    it('should return height([1, 2, 0, -8, 21])', () => {
        const arr = [1, 2, 0, -8, 21];
        const expected = 3;
        tree.init(arr);

        const actual = tree.getHeight();

        assert.deepEqual(actual, expected);
    });


    it('should return height([1, 2, 0, -8, 21, 12, -5, 9])', () => {
        const arr = [1, 2, 0, -8, 21, 12, -5, 9];
        const expected = 5;
        tree.init(arr);

        const actual = tree.getHeight();

        assert.deepEqual(actual, expected);
    });
});
