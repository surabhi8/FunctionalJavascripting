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
//module.exports = repeat;
{
repeat(incrementVariable, 10)
console.log("The function is a high order function?",i===10)
}
