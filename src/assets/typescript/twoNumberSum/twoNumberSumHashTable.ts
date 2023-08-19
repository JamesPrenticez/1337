export const twoNumberSumHashTable = (array: number[], target: number): number[] => {

  // Use an object with number keys instead of an array to track numbers
  const nums: { [key: number]: boolean } = {};
  
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

