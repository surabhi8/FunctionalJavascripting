function getShortMessages(messages) {
        messages = messages.filter(function(m){
          return m.message.length<50
        }).map(function(m){
          return m.message;
        })
        return messages;
}

module.exports = getShortMessages
/*
let messages = [{
  message  : 'Hellokdshfshdshdjsns'
},{
  message  : 'Javascriptisawonderfumjnsdkjfasjdlsdjadlkdlangaugebdhf'
},{
  message  : 'hello'
}]

console.log("2 messages are returned?", getShortMessages(messages).length===2);

messages = [];
console.log("no messages are returned?", getShortMessages(messages).length===0);
*/
//Content test case
