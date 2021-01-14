console.clear();
var matrixExample = [
    [1, 2, 3, 4],
    [4, 5, 6, 5],
    [7, 8, 9, 7],
    [7, 8, 9, 7]
];
function sumUpDiagonals(matrix) {
    let n = matrix.length,
        sumMain = 0,
        sumSecondary = 0
    for (let i = 0; i < n; i++) {
        sumMain += matrix[i][i]
    }
    for (let i = 0; i < n; i++) {
        sumSecondary += matrix[i][n - 1 - i]
    }
    return [sumMain, sumSecondary]
}
console.log(sumUpDiagonals(matrixExample));

