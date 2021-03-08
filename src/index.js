
// You should implement your task here.

module.exports = function towelSort(matrix) {
  if (arguments.length === 0) {
    return [];
  } else {
    const result = matrix.map((item, index) => {
      if (index % 2 != 0) {
        item.reverse()
      }
      return item;
    }).reduce((prev, item) => {
      return prev.concat(item);
    }, [])
  
    return result;
  }
  
}
