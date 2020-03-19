// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (matrix == undefined) {
        return [];
    } else {
        const arr = matrix.map((item, i, a) => {
            if (i % 2 !== 0) {
                return item.reverse();
            } else {
                return item;
            }
        });

        let sortArr = [];

        arr.forEach((item, i, a) => {
            item.forEach(el => sortArr.push(el));
        });

        return sortArr;
    }
}
