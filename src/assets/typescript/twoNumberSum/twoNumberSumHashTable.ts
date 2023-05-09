// eslint-disable-next-line @typescript-eslint/no-unused-vars
const twoNumberSum = (array: number[], target: number): number[] => {
  // eslint-disable-next-line @typescript-eslint/consistent-indexed-object-style
  const nums: { [key: number]: boolean } = {}; // Use an object with number keys instead of an array to track numbers
  for (let i = 0; i < array.length; i++) {
    const potentialMatch = target - array[i];
    if (nums[potentialMatch]) {
      // Return an array of numbers
      return [potentialMatch, array[i]];
    } else {
      nums[array[i]] = true;
    }
  }
  return []; // Return an empty array for no match
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