import json
import sys

with open(sys.argv[1]) as json_file:
    data = json.load(json_file)
    mainKeys = list(data.keys())
    finalString = ""
    for i in range(0, len(data.keys())):
        finalString = finalString + '[' + mainKeys[i] + '] \n'
        subKeys = list(data[mainKeys[i]])
        subValues = list(data[mainKeys[i]].values())
        for j in range(0, len(data[mainKeys[i]])):
            finalString = finalString + subKeys[j] + '= ' + subValues[j] + '\n'
    with open('output.ini','w') as output:
        output.write(finalString)

    print(finalString)