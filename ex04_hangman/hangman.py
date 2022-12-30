from words import english_words
import random

wordToGuess = english_words[random.randrange(0, len(english_words))]
splitedWord = list(wordToGuess)
characterFound = []
trials = 8

print('Welcome to Hangman')
print(f'the word to guess has {len(wordToGuess)} letters')

def game(trials):
    userInput = input('Choose a character :  ')
    if wordToGuess.count(userInput) != 0 :
        print(f'Find {wordToGuess.count(userInput)} {userInput} in the word')
        for i in range(wordToGuess.count(userInput)):
            j = splitedWord.index(userInput)
            characterFound.insert(j,userInput)
            splitedWord[j].replace(userInput, '')
        if len(characterFound) == len(wordToGuess):
            print("".join(characterFound))
            print('You won')
            quit()
        print(characterFound)
        game(trials)
    else:
        trials = trials -1
        print(f'there is no {userInput} in the word, you have {trials} tries left')
        if trials == 0:
            print('you lose')
            quit()
        game(trials)
        
game(trials)