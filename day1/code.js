function testFunction() {
    console.log('I am a simple test function');
}

function findNumber(input) {
    //Variables
        let extractedCharacters = '';
        let extractedSecondCharacters = '';
        let finalNumber = 0; 
        let final = 0;
        const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

        console.log('input ', input);

        for (let i = 0; i < input.length; i++) {
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
        

        // test for no digits and return 0 if none

        if (extractedCharacters ===  "") {
            return 0;
        }
        //concatonate digits as text
        
        console.log('extractedCharacters ', extractedCharacters);
        console.log('extractedSecondCharacters ', extractedSecondCharacters);
        if (extractedSecondCharacters === "") {
            extractedSecondCharacters = extractedCharacters;
        }
        finalNumber =  extractedCharacters.concat(extractedSecondCharacters);
        console.log('Concat ', finalNumber);
        
        //parseInt 
        final = final + parseInt(finalNumber)
        console.log('Final from findNumber ', final);
        return final;
    }


    function totalNumbers() {
        console.log('This is the total numbers function')

        // define two inputs for development purposes

        let input1 = '1bg6a2';
        let input2 = '5he8';
        let output1;
        let output2;
        let total;

        output1 = findNumber(input1);
        console.log('output1 ', output1);
        output2 = findNumber(input2);
        total = output1 + output2;
        console.log('Total from totalNumbers ', total);
        return total;
    }

// let oneNumber = findNumber('1jk2');
// console.log('oneNumber ', oneNumber, typeof oneNumber);

totalNumbers();
testFunction();
