const insertionSorter = (unsortedList) => {
    let i, j;

    for (i = 1; i < unsortedList.length; i++) {
        j = i;
        while ((j > 0) && (unsortedList[j] < unsortedList[j - 1])) {
            swap(unsortedList, j, j - 1);
            j = j - 1;
        }
    }
};

const swap = (list, firstIndex, secondIndex) => {
    [list[firstIndex], list[secondIndex]] = [list[secondIndex], list[firstIndex]];
};

module.exports = {insertionSorter, swap};