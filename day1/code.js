import fs from 'fs';

const input = fs.readFileSync('./example.txt', 'utf-8').trim().split('\n');

console.log(input);

function findNumber(input) {
        let extractedCharacters = '';
        let extractedSecondCharacters = '';
        let finalNumber = 0; 
        let final = 0;
        const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

        for (let i = 0; i < input.length; i++) {
            let iCharacter = input[i];
            if (extractedCharacters === "" && numbers.some(x => iCharacter.includes(x))) {
                extractedCharacters = iCharacter;
            } else if (numbers.some(x => iCharacter.includes(x))) {
                extractedSecondCharacters = iCharacter;         
            } 
        } 

        if (extractedCharacters ===  "") {
            return 0;
        }
        if (extractedSecondCharacters === "") {
            extractedSecondCharacters = extractedCharacters;
        }
        finalNumber =  extractedCharacters.concat(extractedSecondCharacters);
        final = final + parseInt(finalNumber)
        return final;
    }


    function totalNumbers(inputArray) {
        
        let total = 0;
        inputArray.forEach(string => {
            total += findNumber(string)
        })
        
        console.log('Total ', total);
        return total;
    } 

totalNumbers(input);
