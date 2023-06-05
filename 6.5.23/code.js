function findNeedle(haystack) {
  let index
  haystack.forEach((x,i) => {
    if (x==='needle'){
      index = i;
    }
  })
  return `found the needle at position ${index}`
}