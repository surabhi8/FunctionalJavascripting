function doubleALL(input){
  let doubleArray = input.map(function(x){
    return x = x*2;
  })
  return doubleArray;
}
function compareTwoArray(array1,array2){
  return array1.toString() == array2.toString();
}
module.exports = doubleALL;
{
let array1 = [1,2,3,4]
console.log("All array values get doubled using Array#map? ",compareTwoArray(doubleALL(array1),[2,4,6,8])===true)
}
{
let array1 = [ ]
console.log("Map works on empty array?",compareTwoArray(doubleALL(array1),[])===true)
}
