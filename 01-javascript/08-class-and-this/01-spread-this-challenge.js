function foo () {
	return Math.max(Math.floor(this.salary * (this.yearsEmployed/100)),0)
}
var a = 5

//Update the user object to contain the call site for foo
let users = [
  { id: 1, name: 'John', salary: 93000, yearsEmployed: 3 },
  { id: 2, name: 'Sarah', salary: 122000, yearsEmployed: 1 },
  { id: 34, name: 'Dan', salary: 32000,yearsEmployed: 2 },
  { id: 57, name: 'Abramov', salary: 200000, yearsEmployed: 7 },
]

let bonusData = users.map(u => {
  const {bonusCal, ...baseUser} = u
  return {
    //Finsh this object
  }
})

console.log(bonusData)