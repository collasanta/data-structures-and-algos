

const arr = []
const elements = 90000000
let timeLinear 
let timeBinary

async function fillArray(elements){
  for (let i = 0; i < elements; i++) {
    arr.push(i)
  }
}

function getRandomNumber(max) {
  return Math.floor(Math.random() * (max + 1));
}


async function linearSearch(randomNumber, array) {
  const t1 = process.hrtime.bigint();
  console.time("linearSearch")
  for (let i=0; i < array.length; i++){
    if (arr[i] === randomNumber) {
      let t2 = process.hrtime.bigint();
      timeLinear = t2 - t1
      console.log(`linearSearch: found at iteration ${i} in ${timeLinear} nanoseconds`)
      break
    }
  }
}

async function binarySearch(targetNumber, array) {
  const t3 = process.hrtime.bigint();
  let indexS = 0
  let indexL = arr.length - 1
  let i = 0
  let middle = Math.floor(indexL/2)

  do {
    let actualValue =  array[middle]
    if (targetNumber > actualValue){
      indexS = middle
    }
    if (targetNumber < actualValue) {
      indexL = middle
    }
    if (array[middle] === targetNumber) {
      let t4 = process.hrtime.bigint();
      timeBinary = t4 - t3
      console.log(`binarySearch: found at iteration ${i} in ${timeBinary} nanoseconds}`)
      break
    }
    middle = indexS + Math.floor((indexL - indexS)/2)
    i++
  } while (true)
}

async function run(){
console.log(`--------------------------------------------------------------------`)
await fillArray(elements)
const randomNumber = getRandomNumber(arr.length)
console.log(`randomNumber is ${randomNumber}`)
linearSearch(randomNumber, arr)
binarySearch(randomNumber, arr)
console.log(`binary search is ${Math.ceil((Number(timeLinear))/(Number(timeBinary)))} times faster than linear search`)
console.log(`--------------------------------------------------------------------`)
}

run()