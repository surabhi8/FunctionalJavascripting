function loadUsers(userIds, load, done) {
  let users = []
  let count = 0;
  userIds.forEach(function(id,index){
    load(id,function(user){
      users[index] = user;
      count++;
    })
    if(userIds===count){
      done(users)
    }
  })
}

module.exports = loadUsers
