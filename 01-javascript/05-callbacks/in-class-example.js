function getEmps (callback) {
  let emps = ['Bryce', 'Sarah', 'John', 'Debbie',  'Emily']

  setTimeout(function () {
    callback(emps)
  }, 500)
}

function hirePeople (callback) {
  let shouldWeHire = false

  setTimeout(function () {
    callback(shouldWeHire)
  }, 1000)
}
function hirePeopleCallback(hire) {
  if(hire) {
    console.log('Get people!!!')
  } else {
    console.log('Stop we are good!')
  }
}
function asyncCallback (employees) {
  if(employees.length < 4)
    hirePeople(hirePeopleCallback)  

  console.log("Fire people")
}

getEmps(asyncCallback)