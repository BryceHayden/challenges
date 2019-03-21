function foo () {
	return Math.min(Math.floor(this.salary * (this.yearsEmployed/100)),0)
}
var a = 5

let users = [
  { id: 1, name: 'John', salary: 93000, yearsEmployed: 3, bonusCal: foo },
  { id: 2, name: 'Sarah', salary: 122000, yearsEmployed: 1, bonusCal: foo  },
  { id: 34, name: 'Dan', salary: 32000,yearsEmployed: 2, bonusCal: foo  },
  { id: 57, name: 'Abramov', salary: 200000, yearsEmployed: 7, bonusCal: foo  },
]

let bonusData = users.map(u => {
  const {bonusCal, ...baseUser} = u
  return {
    ...baseUser,
    bonus: u.bonusCal()
  }
})
console.log(bonusData)