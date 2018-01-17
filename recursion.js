function reduce(arr, fn, initial) {
  let prev = initial;
  let cur = arr[0];
  if(arr.length===0){
    return initial;
  }else{
    initial = fn(prev,cur)
    return reduce(arr.slice(1),fn,initial)
  }

}

reduce([1,2,3], function(prev, curr) {
  return prev + curr
}, 0)

module.exports = reduce

{
  console.log("Reduce function works?", reduce([1,2,3], function(prev, curr) {
    return prev + curr  }, 0)===6)
}

{
  console.log("Reduce function works for empty array?", reduce([], function(prev, curr) {
    return prev + curr  }, 0)===0)
}
