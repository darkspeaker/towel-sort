
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let arr = []
  if(matrix !== undefined){
    matrix.map((item, index) => index % 2 !== 0 ? item = item.reverse() : item).map(item => item.map(i => arr.push(i)))
  }
  else{
    return []
  }
  return arr
}
