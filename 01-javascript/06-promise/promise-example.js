function callBackend(isLoggedIn) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isLoggedIn) {
        //Do the happy path here and return [{ name: 'john', age: 82 }, { name: 'Sammy', age: 18 }, { name: 'Tommy', age: 27 }]
        resolve([{ name: 'john', age: 82 }, { name: 'Sammy', age: 18 }, { name: 'Tommy', age: 27 }])
      } else {
        //Do the unhappy path here and return a messgae
        reject('User is not logged in')
      }
    }, 3000)
  });
}

function main () {
  let users = []

  const results = callBackend(true)
  //Use the returned promise to get the happy path

  //Use the catch case for the unhappy path
  results
    .then ((data) => {
      users = data
      console.log("User", users)
    })
    .catch((error) => {
        console.log('Oh no...', error.msg)
    })
}

main()
