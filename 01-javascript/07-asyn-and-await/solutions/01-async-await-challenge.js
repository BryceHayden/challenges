function callBackend() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(true)
    }, 5000);
  })
}

async function main() {
  let loginStatus = await callBackend()
  console.log(loginStatus ? 'The user is logged in' : 'Go Log in')
}

main()