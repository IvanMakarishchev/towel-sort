
// You should implement your task here.

module.exports = function towelSort (matrix) {
  towelSorted = [];
  if (!matrix) return [];
  matrix.forEach((el,index) => {
    if (index%2 !== 0){
      el.reverse();
    };
    el.forEach(el => towelSorted.push(el));
  });
  console.log(matrix);
  return towelSorted;
}