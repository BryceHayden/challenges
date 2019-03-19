function callBackend() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(true)
    }, 5000);
  })
}

/*add a keyword here*/ function main() {
  let loginStatus = /*add a keyword here*/ callBackend()
  console.log(loginStatus ? 'The user is logged in' : 'Go Log in')
}

main()