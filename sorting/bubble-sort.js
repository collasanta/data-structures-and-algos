const initArr = [1,7,3,15,4,6,2]

function bubbleSort(arr){
  for (i=0;i<arr.length;i++){
    console.log("start-round: ",i + " -----------")
    for (c=0;c<arr.length-1-i;c++){
      console.log("c",c)
      if (arr[c] > arr[c+1]){
        console.log("swap " + arr[c] + " for " + arr[c+1])
        let b = arr[c]
        arr[c] = arr[c+1]
        arr[c+1] = b
      }
    }
  }
  return arr
}

const result = bubbleSort(initArr)
console.log("final result: " + result)