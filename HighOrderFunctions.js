let i = 0;
function repeat(operation, num){
  if(num===0){
    return;
  }
  operation();
  return repeat(operation, num-1);
}
function incrementVariable(){
  i = i+1;
}
repeat(incrementVariable, 10)
//module.exports = repeat;
console.log("The function works as functiona;  ?",i===10)
