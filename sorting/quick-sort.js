//divide and conquer
const initArr = [6,7,3,2,9,8,1]
// [3,2,4,1]6[7,9,8]
// [2,1]3[4] //  []7[98]
// 2[1] [4]  //  [] 7 [8]9
// pivot always the first elemtn

function quickSort(arr) {
  if (arr.length === 0) return []
  if (arr.length === 1) return arr
  let arrLow = []
  let arrHigh = []
  let pivot = arr[0]
  let arrEqual = [pivot]

  for (let i = 1; i <= arr.length; i++ ){
    if (arr[i] < pivot){
      arrLow.push(arr[i])
    } 
    if (arr[i] === pivot) {
      arrEqual.push(arr[i])
    }
    if (arr[i] > pivot){
      arrHigh.push(arr[i])
    } 
  }

  console.log("arrLow", arrLow)
  console.log("arrEqual", arrEqual)
  console.log("arrHigh", arrHigh)
  
  return [...quickSort(arrLow), ...arrEqual, ...quickSort(arrHigh)]
}


let result = quickSort(initArr)
console.log("resultout", result)