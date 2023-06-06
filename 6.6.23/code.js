function squareSum(numbers){
  return numbers.reduce((acc,c) => acc + Math.pow(c,2),0)
}