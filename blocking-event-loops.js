function repeat(operation, num) {
  console.log("I am in repeat")
  if (num <= 0) return
  operation()
  if(num%2===0){
    return (setTimeout(function(){repeat(operation, --num)}))
  }
  else {
    return repeat(operation, --num)
  }
}
function operation(){
  console.log("Hello")
}
repeat(operation,10)
module.exports = repeat
