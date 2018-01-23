function repeat(operation, num) {
  if (num <= 0) return
  operation()
  return function(){
    repeat(operation, --num)
  }
  
function trampoline(fn) {
  while(fn && typeof(fn)==='function'){
    fn = fn();
  }
  return fn;
}
function operationRepeat(operation, num) {
  return trampoline(repeat(operation, num))
}
module.exports = operationRepeat
