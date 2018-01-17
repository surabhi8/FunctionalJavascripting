
function countWords(inputWords) {
 let  countMap = {};
  inputWords.reduce(function(prev, current)  {
    if(!countMap[current]) {
      countMap[current] = 1;
    } else {
      ++countMap[current];
    }
    return current;
  }, null);
  return countMap;
}
//module.exports = countWords;

{
  let inputWords = ['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian'] 
  console.log("Function counts the occurrences of each new string?", compareTwoObjects(countWords(inputWords),))
}

{
  inputWords = []
  console.log("Function works on empty array? ", Object.keys(countWords(inputWords)).length===0)
}
//case sensitive
{
  inputWords = ['Apple','Apple']
  console.log("Function works when all words are same? ", Object.keys(countWords(inputWords)).length===1)
}
