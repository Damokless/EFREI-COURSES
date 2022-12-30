import random

iaMoves = ["rock", "paper", "scissors"]
print('Welcome to Rock, Paper, Scissors choose between "rock", "paper", or "scissors"')
def restartGame():
    print('Welcome to Rock, Paper, Scissors choose between "rock", "paper", or "scissors"')
    game()

def game():
    iaChoice = random.randrange(0,2)
    userInput = input('Choose wisely :  ').lower()

    if userInput != "rock" and userInput != "paper" and userInput != "scissors":
        print('Incorrect input try again')
        restartGame()
    # draw case
    if userInput == iaMoves[iaChoice]:
        print(f"It's a draw ! IA choose {iaMoves[iaChoice]} and you choose {userInput}")
        game()
    # rock case    
    if userInput == "rock" and iaMoves[iaChoice] == "paper":
        print(f"You lose ! IA choose {iaMoves[iaChoice]} and you choose {userInput}")
        retry = input("retry ? ( 'yes' or 'no' ) :  ")
        if retry == 'yes':
            restartGame()
    if userInput == "rock" and iaMoves[iaChoice] == "scissors":
        print(f"You win ! IA choose {iaMoves[iaChoice]} and you choose {userInput}")
        retry = input("retry ? ( 'yes' or 'no' ) :  ")
        if retry == 'yes':
            restartGame()
    # paper case
    if userInput == "paper" and iaMoves[iaChoice] == "rock":
        print(f"You win ! IA choose {iaMoves[iaChoice]} and you choose {userInput}")
        retry = input("retry ? ( 'yes' or 'no' ) :  ")
        if retry == 'yes':
            restartGame()
    if userInput == "paper" and iaMoves[iaChoice] == "scissors":
        print(f"You lose ! IA choose {iaMoves[iaChoice]} and you choose {userInput}")
        retry = input("retry ? ( 'yes' or 'no' ) :  ")
        if retry == 'yes':
            restartGame()
    # scissors case
    if userInput == "scissors" and iaMoves[iaChoice] == "rock":
        print(f"You lose ! IA choose {iaMoves[iaChoice]} and you choose {userInput}")
        retry = input("retry ? ( 'yes' or 'no' ) :  ")
        if retry == 'yes':
            restartGame()
    if userInput == "scissors" and iaMoves[iaChoice] == "paper":
        print(f"You win ! IA choose {iaMoves[iaChoice]} and you choose {userInput}")
        retry = input("retry ? ( 'yes' or 'no' ) :  ")
        if retry == 'yes':
            restartGame()
game()