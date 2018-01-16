
function checkUsersValid(goodUsers) {
  return function allUsersValid(submittedUsers) {
        return submittedUsers.every(function(submitUsers){
          return goodUsers.some(function(user){
            return user.id===submitUsers.id
            })
        })
     };
   }

   module.exports = checkUsersValid
   /*let goodUsers = [
      { id: 1 },
      { id: 2 },
      { id: 3 }
    ]
    let submittedUsers = ([
        { id: 2 },
        { id: 1 }
      ])

      console.log("Function checks if all the supplied users exist in the  original list of users?",(checkUsersValid(goodUsers))(submittedUsers)===true)

      submittedUsers = ([
          { id: 4 },
          { id: 1 }
        ])
     console.log("Function checks if all the supplied users exist in the  original list of users?",(checkUsersValid(goodUsers))(submittedUsers)===false)
     goodUsers = []
     submittedUsers = []
     console.log("Function works on empty users list?",(checkUsersValid(goodUsers))(submittedUsers)===true)
     goodUsers = [
        { id: 1 },
        { id: 2 }
      ]
      submittedUsers = []
      console.log("Function works if there are no users to check?",(checkUsersValid(goodUsers))(submittedUsers)===true)
      goodUsers = [
         { id: 1 },
         { id: 2 }
       ]
       submittedUsers = [{ id: 1 },
       { id: 2 },
       { id: 3 }]
       console.log("Function works if there are more users to check?",(checkUsersValid(goodUsers))(submittedUsers)===false)
       goodUsers = [
          { id: 1 },
          { id: 2 }
        ]
        submittedUsers = []
        console.log("Function works if there are no users to check?",(checkUsersValid(goodUsers))(submittedUsers)===true)
        submittedUsers = [
           { id: 1 },
           { id: 2 }
         ]
         goodUsers = []
         console.log("Function works if goodUsers list is empty?",(checkUsersValid(goodUsers))(submittedUsers)===false)
         */
