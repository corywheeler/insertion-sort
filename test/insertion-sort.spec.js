const {insertionSorter, swap} = require('../src/insertion-sort');

describe('insertionSorter', () => {
    it('should sort an unsorted array of integers', () => {
        let unsortedList = [3, 12, 43, 10, 100];
        let sortedList = insertionSorter(unsortedList);
        sortedList.should.deep.equal([3, 10, 12, 43, 100]);

    })
})

describe('swap', () => {
    it('should swap the value of two items in an array', () => {
        let list = [1, 2, 3];
        swap(list, 1, 2);
        list.should.deep.equal([1, 3, 2])
    })
})