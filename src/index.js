// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (!matrix || !matrix.length) return [];
	return matrix.map((el, index) => {
		return (index % 2) ? el.reverse() : el
	}).flat()
};
