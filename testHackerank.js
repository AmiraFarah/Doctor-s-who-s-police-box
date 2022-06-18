function miniMaxSum(arr) {

const max = Math.max(...arr)
const min = Math.min(...arr)
let sum=0
if (max == min) { for(let i = 1; i<arr.length; i++)
sum+= arr[i]
console.log(sum,sum)
}
else{
 const minArray = arr.filter(val=>val!==max)
 const minSum = minArray.reduce((acc,current)=> acc+current
 )
 const maxArray = arr.filter(val =>val !== min) 
const maxSum = maxArray.reduce((acc,current)=>acc+current)
console.log(minSum,maxSum)}
}
miniMaxSum([5,5,5,5])