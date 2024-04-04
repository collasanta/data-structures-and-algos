
const nums = [2,7,11,15]
const target = 9

// const nums = [3,2,4]
// const target = 6

// const nums = [3,3]
// const target = 6

function twoSum(nums, target) {
  for (i=0; i < nums.length; i++) {
    for (j=i+1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target){
        return [i,j]
      }
    }
  }
}
const result = twoSum(nums,target)

// FOLLOW UP => Can you come up with an algorithm that is less than O(n2) time complexity?

function twoSumOptimized(nums, target) {
  const map = {} // {value: index}
  for (let i=0; i < nums.length; i++) {
    const value = nums[i]
    const complementPair = target - value
    if (map[complementPair] !== undefined){
      return [i, map[complementPair]]
    } else {
      map[value] = i
    }
  }
}

const result2 = twoSum(nums,target)

// TIME COMPLEXITY O(N^2)
console.log({result})

// TIME COMPLEXITY O(N)
console.log({result2})

 