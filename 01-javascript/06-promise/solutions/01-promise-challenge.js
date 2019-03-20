function callBackend(userIds) {

  let users = [
    { id: 1, name: 'John', salary: 93000 },
    { id: 2, name: 'Sarah', salary: 122000 },
  ]

  let filteredUsers = users.filter(u => userIds.indexOf(u.id) > -1)

  return new Promise(function(resolve, reject) {
    setTimeout(() => {
      if (filteredUsers.length > 0) {
        resolve(filteredUsers)
      } else {
        reject({msg: 'No users found for given ids'})   
      }
    }, Math.floor(Math.random()*3 +1))
  });
}

function main () {
  let userIds = [2, 1]
  const results = callBackend(userIds)
  
  results
    .then(function (data) {
      console.log("User", data)
    })
    .catch(function (error) {
      console.log('Oh no...', error.msg)
    })
}

main()
