let count=0;
function reduce(arr, fn, initial) {
  count = 0;
  let max = arr.length-1;
  return (function reducer(i,prev){

    if(i>max){
      return prev;
    }  count++;
    let reduced = fn(prev,arr[i],i,arr)
    return reducer(i+1,reduced);
  })(0,initial);
}
module.exports = reduce

{
  console.log("The reduce() method reduces the array to a single value.?", reduce([1,2,3], function(prev, curr) {
    return prev + curr  }, 0)===6)
}

{
  console.log("The reduce() method executes a provided function for each value of the array?", reduce([1,2], function(prev, curr) {
    return prev + curr  }, 0),count===2)
}
