const { exec } = require('child_process')
const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

let results = ''
let lastPlayer = ''
const line1 = [' ', ' ', ' ', '|', ' ', ' ', ' ']
const line2 = [' ', ' ', '|', '|', '|', ' ', ' ']
const line3 = [' ', '|', '|', '|', '|', '|', ' ']
const line4 = ['|', '|', '|', '|', '|', '|', '|']

if (process.argv[2] === undefined) {
  const playerTurns = function (line1, line2, line3, line4) {
    displayGame(line1, line2, line3, line4)
    console.log('Your turn :')
    rl.question('Line :', (argline) => {
      const code = argline.charCodeAt()
      if (argline < 1 || argline > 4 || code < 49 || code > 52) {
        console.log('Error: invalid input (positive number expected and between 1 and 4)')
        playerTurns(line1, line2, line3, line4)
      } else {
        rl.question('match :', (argmatch) => {
          if (argmatch < 1 || argmatch > 7 || code < 49 || code > 52) {
            console.log('Error: invalid input (positive number expected and between 1 and 7)')
            playerTurns(line1, line2, line3, line4)
          } else {
            switch (argline) {
              case '1':
                results = line1.filter(x => x.includes('|'))
                if (argmatch > results.length) {
                  console.log('Error: not enough matches on this line')
                  playerTurns(line1, line2, line3, line4)
                } else {
                  for (let index = 0; index < argmatch; index++) {
                    const finder = line1.indexOf('|')
                    line1[finder] = ' '
                  }
                  console.log(`Player removed ${argmatch} match(es) from line ${argline}`)
                  lastPlayer = 'Player'
                  displayGame(line1, line2, line3, line4)
                  gameStatus(line1, line2, line3, line4, lastPlayer)
                  iaTurns(line1, line2, line3, line4)
                }
                break

              case '2':
                results = line2.filter(x => x.includes('|'))
                if (argmatch > results.length) {
                  console.log('Error: not enough matches on this line')
                  playerTurns(line1, line2, line3, line4)
                } else {
                  for (let index = 0; index < argmatch; index++) {
                    const finder = line2.indexOf('|')
                    line2[finder] = ' '
                  }
                  console.log(`Player removed ${argmatch} match(es) from line ${argline}`)
                  lastPlayer = 'Player'
                  displayGame(line1, line2, line3, line4)
                  gameStatus(line1, line2, line3, line4, lastPlayer)
                  iaTurns(line1, line2, line3, line4)
                }
                break

              case '3':
                results = line3.filter(x => x.includes('|'))
                if (argmatch > results.length) {
                  console.log('Error: not enough matches on this line')
                  playerTurns(line1, line2, line3, line4)
                } else {
                  for (let index = 0; index < argmatch; index++) {
                    const finder = line3.indexOf('|')
                    line3[finder] = ' '
                  }
                  console.log(`Player removed ${argmatch} match(es) from line ${argline}`)
                  lastPlayer = 'Player'
                  displayGame(line1, line2, line3, line4)
                  gameStatus(line1, line2, line3, line4, lastPlayer)
                  iaTurns(line1, line2, line3, line4)
                }
                break

              case '4':
                results = line4.filter(x => x.includes('|'))
                if (argmatch > results.length) {
                  console.log('Error: not enough matches on this line')
                  playerTurns(line1, line2, line3, line4)
                } else {
                  for (let index = 0; index < argmatch; index++) {
                    const finder = line4.indexOf('|')
                    line4[finder] = ' '
                  }
                  console.log(`Player removed ${argmatch} match(es) from line ${argline}`)
                  lastPlayer = 'Player'
                  displayGame(line1, line2, line3, line4)
                  gameStatus(line1, line2, line3, line4, lastPlayer)
                  iaTurns(line1, line2, line3, line4)
                }
                break

              default:
                console.log('line undefined')
                break
            }
          }
        })
      }
    })
  }

  playerTurns(line1, line2, line3, line4) // we have to actually start our recursion somehow

  async function iaTurns (line1, line2, line3, line4) {
    const randomLine = Math.floor(Math.random() * (5 - 1)) + 1
    const randomMatch = Math.floor(Math.random() * (8 - 1)) + 1
    switch (randomLine) {
      case 1:
        results = line1.filter(x => x.includes('|'))
        if (randomMatch > results.length) {
          iaTurns(line1, line2, line3, line4)
        } else {
          lastPlayer = 'AI'
          console.log('AI’s turn...')
          console.log(`AI removed ${randomMatch} match(es) from line ${randomLine}`)
          for (let index = 0; index < randomMatch; index++) {
            const finder = line1.indexOf('|')
            line1[finder] = ' '
          }
          gameStatus(line1, line2, line3, line4, lastPlayer)
          playerTurns(line1, line2, line3, line4)
        }
        break
      case 2:
        results = line2.filter(x => x.includes('|'))
        if (randomMatch > results.length) {
          iaTurns(line1, line2, line3, line4)
        } else {
          lastPlayer = 'AI'
          console.log('AI’s turn...')
          console.log(`AI removed ${randomMatch} match(es) from line ${randomLine}`)
          for (let index = 0; index < randomMatch; index++) {
            const finder = line2.indexOf('|')
            line2[finder] = ' '
          }
          gameStatus(line1, line2, line3, line4, lastPlayer)
          playerTurns(line1, line2, line3, line4)
        }
        break
      case 3:
        results = line3.filter(x => x.includes('|'))
        if (randomMatch > results.length) {
          iaTurns(line1, line2, line3, line4)
        } else {
          lastPlayer = 'AI'
          console.log('AI’s turn...')
          console.log(`AI removed ${randomMatch} match(es) from line ${randomLine}`)
          for (let index = 0; index < randomMatch; index++) {
            const finder = line3.indexOf('|')
            line3[finder] = ' '
          }
          gameStatus(line1, line2, line3, line4, lastPlayer)
          playerTurns(line1, line2, line3, line4)
        }
        break
      case 4:
        results = line4.filter(x => x.includes('|'))
        if (randomMatch > results.length) {
          iaTurns(line1, line2, line3, line4)
        } else {
          lastPlayer = 'AI'
          console.log('AI’s turn...')
          console.log(`AI removed ${randomMatch} match(es) from line ${randomLine}`)
          for (let index = 0; index < randomMatch; index++) {
            const finder = line4.indexOf('|')
            line4[finder] = ' '
          }
          gameStatus(line1, line2, line3, line4, lastPlayer)
          playerTurns(line1, line2, line3, line4)
        }
        break
    }
  }

  function gameStatus (line1, line2, line3, line4, lastPlayer) {
    const check1 = line1.filter(x => x.includes('|'))
    const check2 = line2.filter(x => x.includes('|'))
    const check3 = line3.filter(x => x.includes('|'))
    const check4 = line4.filter(x => x.includes('|'))
    if (check1.length !== 0 || check2.length !== 0 || check3.length !== 0 || check4.length !== 0) {
      return null
    } else {
      if (lastPlayer === 'Player') {
        console.log('You lost, too bad..')
        process.exit()
      } else {
        displayGame(line1, line2, line3, line4)
        console.log('I lost.. snif.. but I’ll get you next time!!')
        process.exit()
      }
    }
  }

  function displayGame (line1, line2, line3, line4) {
    console.log('* * * * * * * * ')
    console.log(`*${line1[0]} ${line1[1]} ${line1[2]} ${line1[3]} ${line1[4]} ${line1[5]} ${line1[6]}*`)
    console.log(`*${line2[0]} ${line2[1]} ${line2[2]} ${line2[3]} ${line2[4]} ${line2[5]} ${line2[6]}*`)
    console.log(`*${line3[0]} ${line3[1]} ${line3[2]} ${line3[3]} ${line3[4]} ${line3[5]} ${line3[6]}*`)
    console.log(`*${line4[0]} ${line4[1]} ${line4[2]} ${line4[3]} ${line4[4]} ${line4[5]} ${line4[6]}*`)
    console.log('* * * * * * * * ')
  }
} else {
  exec('npx electron ./electron.js')
}
