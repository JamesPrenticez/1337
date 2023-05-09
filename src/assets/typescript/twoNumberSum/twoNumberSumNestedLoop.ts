// eslint-disable-next-line @typescript-eslint/no-unused-vars
const twoNumberSumNestedLoopTS = ({array, target}: {array: number[], target: number}): number[] =>{
  for(let a = 0; a <= array.length; a++){
    for(let b = 0; b < array.length; b++){
      if(array[a] !== array[b] && array[a] + array[b] === target){
        return [array[a], array[b]]
      }
    }
  } 
  return []
}