// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (!matrix || !matrix.length) return [];
    let newArr = [];
    matrix.forEach((el, index) => {
        if (index % 2 === 0) {
            for (let i = 0; i < el.length; i++) {
                newArr.push(el[i]);
            }
        } else {
            for (let i = el.length - 1; i >= 0; i--) {
                newArr.push(el[i]);
            }
        }
    });
    return newArr;
};
