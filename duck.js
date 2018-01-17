function duckCount() {
  return Array.prototype.filter.call(arguments,(function(object){
    return Object.prototype.hasOwnProperty.call(object, 'quack');
  })).length;
}
module.exports = duckCount
{
  let notDuck = Object.create({quack: true})
  let duck = {quack: true}
  console.log("The number of objects that has quack property is?",duckCount(duck, notDuck)===1)
}

{

  console.log("The number of objects that has quack property is?",duckCount()===0)
}
{
  let duck1 = {quack: true}
  let duck2 = {quack: true}
  console.log("The number of objects that has quack property is?",duckCount(duck1,duck2)===2)
}
{
  let notDuck = Object.create({quack: true})

  console.log("The number of objects that has quack property is?",duckCount(notDuck,notDuck)===0)
}
