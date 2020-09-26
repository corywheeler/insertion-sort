const insertionSorter = (unsortedList) => {
    let i, j;

    for (i = 1; i < unsortedList.length; i++) {
        j = i;
        while ((j > 0) && (unsortedList[j] < unsortedList[j - 1])) {
            swap(unsortedList, j, j - 1);
            j = j - 1;
        }
    }
    return unsortedList;
};

const swap = (list, firstIndex, secondIndex) => {
    let temp = list[firstIndex];
    list[firstIndex] = list[secondIndex];
    list[secondIndex] = temp;
};

module.exports = {insertionSorter, swap};