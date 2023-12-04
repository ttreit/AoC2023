function simpleFunction() {
    console.log('I am a simple function');
}

function findNumber() {
    //Variables
        let input;
        let extractedCharacters = '';
        let extractedSecondCharacters = '';
        let extractedNumber1;
        let extractedNumber2;  
        let finalNumber = 0; 
        let total = 0;
        const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

        input = 'n1b265h75c7';
    
        for (let i = 0; i < input.length; i++) {
            console.log('input ', input);
            let iCharacter = input[i];
            if (extractedCharacters === "" && numbers.some(x => iCharacter.includes(x))) {
                console.log('IF #1 - iCharacter contains  ', iCharacter);
                extractedCharacters = iCharacter;
                console.log('IF #1 - extractedCharacters ', extractedCharacters, typeof extractedCharacters);
            } else if (numbers.some(x => iCharacter.includes(x))) {
                console.log('IF #2 - icharacter contains ', iCharacter);
                extractedSecondCharacters = iCharacter;
                console.log('IF #2 - extractedCharacters ', extractedCharacters, typeof extractedCharacters);
                console.log('IF #2 - extractedSecondCharacters ', extractedSecondCharacters, typeof extractedSecondCharacters);          
            } 
        } 
        
        //concatonate digits as text
        finalNumber =  extractedCharacters.concat(extractedSecondCharacters);
        console.log('Concat ', finalNumber);
        
        //parseInt 
        total = total + parseInt(finalNumber)
        console.log('TOTAL ', total);
        return total;
    }

let oneNumber = findNumber();
console.log('oneNumber ', oneNumber, typeof oneNumber);

simpleFunction();
