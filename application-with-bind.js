module.exports = function(namespace) {
  return console.log.bind(null, namespace);
}
var info = logger('INFO:')
info('this is an info message')
console.log("")
