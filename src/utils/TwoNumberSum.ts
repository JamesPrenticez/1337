interface TwoNumberSumParams {
  array: number[];
  target: number;
}

export const TwoNumberSumNestedLoop = ({array, target}: TwoNumberSumParams): string =>{
  for(let a = 0; a <= array.length; a++){
    for(let b = 0; b < array.length; b++){
      if(array[a] !== array[b] && array[a] + array[b] === target){
        return `Sum: ${array[a]} + ${array[b]} = ${target}`
      }
    }
  } 
  return `No two numbers = ${target}`
}

// export const TwoNumberSumHashMap = ({array, target}: TwoNumberSumParams): string => {
//   let nums = {}
//   for(let i = 0; i < array.length; i++){
//     // Does our object/hash table contain (target - current number) aka 'y'? 
//     let potentialMatch = (target - array[i])
//     if(nums.hasOwnProperty(potentialMatch)){
//       return [target - array[i], array[i]]
//     } else {
//       nums[array[i]] = true
//     }
//   }
//   return [] //no answer
// }
