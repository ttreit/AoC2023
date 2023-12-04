function simpleFunction() {
    console.log('I am a simple function');
}

function findFirstNumber() {
    //Variables
        let input;
        let extractedCharacters = '';
        let extractedNumber = 0;
        let iterator = 0;
        const returnArray = [extractedNumber, iterator];
        const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

        input = '12';
    
        for (let i = 0; i < input.length; i++) {
            console.log('input ', input);
            let iCharacter = input[i];
            if (numbers.some(x => iCharacter.includes(x))) {
                console.log('iCharacter contains the number ', iCharacter);
                extractedCharacters = extractedCharacters.concat(iCharacter);
                console.log('extractedCharacters ', extractedCharacters, typeof extractedCharacters);
            } else if (extractedCharacters === '') {
                continue;
            } else {
                console.log('**** Not a Number, Not Blank ****')
                console.log('i =', i);
                iterator = i;
                break;
            }
        } 
        //parseInt 
        extractedNumber = parseInt(extractedCharacters);
        console.log(extractedNumber, iterator);
        returnArray[0] = extractedNumber;
        returnArray[1] = iterator;
        return returnArray;
    }

let oneNumber = findFirstNumber();
console.log('oneNumber ', oneNumber, typeof oneNumber);

simpleFunction();
