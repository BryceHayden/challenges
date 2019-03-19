/*
  This is the first challenge that will help us prepare to create
  a tic-tac-toe website. You are given a couple of different games
  (represented by an array of arrays). Your goal is to complete the
  checkForWinner function to determine IF there is a winner. Determining
  on the status (x won, o won, or cats game) you will return a string
  of the status (see the conditional checks below to see what is expected).
*/
function checkForWinner(game) {
  let winner = 'cat'

  for(let index = 0; index < game.length; index++) {
    let xPlaysInRow = 0
    let xPlaysInColumn = 0
    let oPlaysInRow = 0
    let oPlaysInColumn = 0
    let xForwardDiagonalPlays = 0
    let xBackwardsDiagonalPlays = 0

    for(let marker = 0; marker < game.length; marker++) {
      //check times played in the row
      if(game[index][marker] === 'o') {
        oPlaysInRow++
      }
      //check times played in the column
      if(game[marker][index] === 'o') {
        oPlaysInColumn++
      }
      //check times played in the row
      if(game[index][marker] === 'x') {
        xPlaysInRow++
      }
      //check times played in the column
      if(game[marker][index] === 'x') {
        xPlaysInColumn++
      }
    }
    if(oPlaysInRow === game.length || oPlaysInColumn === game.length) {
      winner = 'o'
      break;
    }
    if(xPlaysInRow === game.length || xPlaysInColumn === game.length) {
      winner = 'x'
      break;
    }
  }

  return winner
}

function main() {
  let gameOne = [
    [ 'x', 'o', 'x'],
    [ 'x', '-', 'o'],
    [ 'x', '-', 'o']
  ]

  let gameTwo = [
    [ 'o', 'o', 'o'],
    [ '', 'x', ''],
    [ '-', '-', 'x']
  ]

  let gameThree = [
    [ 'o', 'x', 'o'],
    [ 'o', 'x', 'x'],
    [ 'x', 'o', 'x']
  ]

  let gameFour = [
    [ 'x', 'o', 'o'],
    [ 'o', 'x', 'x'],
    [ 'x', 'o', 'x']
  ]

  let gameFive = [
    [ 'x', 'x', 'o'],
    [ 'x', 'o', 'x'],
    [ 'o', 'o', 'x']
  ]
  const gameOneWinner = checkForWinner(gameOne)
  const gameTwoWinner = checkForWinner(gameTwo)
  const gameThreeWinner = checkForWinner(gameThree)
  const gameFourWinner = checkForWinner(gameFour)
  const gameFiveWinner = checkForWinner(gameFive)

  const checkGameOne = gameOneWinner === 'x'
  const checkGameTwo = gameTwoWinner === 'o'
  const checkGameThree =  gameThreeWinner === 'cat'
  const checkGameFour =  gameFourWinner === 'x'
  const checkGameFive =  gameFiveWinner === 'o'

  if(!checkGameFour || !checkGameFive) {
    console.log('Your diagonal checks are not working')
  } else if(!checkGameOne && !checkGameTwo && !checkGameThree) {
    console.log('checkForWinner is not working for: \n Any of the examples provided')
  } else if(!checkGameOne && !checkGameTwo && checkGameThree) {
    console.log('checkForWinner is not working for: \n games one and two')
  } else if(!checkGameOne && checkGameTwo && !checkGameThree) {
    console.log('checkForWinner is not working for: \n games one and three')
  } else if(checkGameOne && !checkGameTwo && !checkGameThree) {
    console.log('checkForWinner is not working for:\n games two and three')
  } else if(!checkGameOne && checkGameTwo && checkGameThree) {
    console.log('checkForWinner is not working for:\n game one')
  } else if(checkGameOne && !checkGameTwo && checkGameThree) {
    console.log('checkForWinner is not working for:\n game two')
  } else if(checkGameOne && checkGameTwo && !checkGameThree) {
    console.log('checkForWinner is not working for:\n game three')
  } else {
    console.log("Your code works for all of the examples provided...be careful there are other use cases!!!!")
  }
}

main()
