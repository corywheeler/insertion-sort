const {insertionSort} = require('../src/insertion-sort');

describe('insertion sort', () => {
    it('should sort an unsorted array of integers', () => {
        let unsortedList = [3, 12, 43, 10, 100];
        let sortedList = insertionSort(unsortedList);
        sortedList.should.equal([3, 10, 12, 43, 100]);
    })
})