function simpleFunction() {
    console.log('I am a simple function');
}

function findfirstCharacter() {
    //Variables
        let input;
        let firstCharacter = '0';
        let firstNumber = 0;
        let iterator = 0;
        const returnArray = [firstNumber, iterator];
        const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

        input = 'a12b0c2';
    
        for (let i = 0; i < input.length; i++) {
            console.log('input ', input);
            let iCharacter = input[i];
            console.log('iCharacter ', iCharacter);
            if (numbers.some(x => iCharacter.includes(x))) {
                console.log('iCharacter contains a number');
                firstCharacter = firstCharacter.concat(iCharacter);
                console.log('firstCharacter ', firstCharacter, typeof firstCharacter);
            } else if (firstCharacter === '0') {
                continue;
            } else {
                console.log('firstCharacter ', firstCharacter, typeof firstCharacter);
                console.log('i is currently ', i);
                iterator = i;
                firstNumber = parseInt(firstCharacter);
                console.log('firstNumber after parseInt ', firstNumber, typeof firstCharacter);
                break;
            }
        } 

        console.log(firstNumber, iterator);
        returnArray[0] = firstNumber;
        returnArray[1] = iterator;
        return returnArray;
    }

let oneNumber = findfirstCharacter();
console.log('oneNumber ', oneNumber, typeof oneNumber);

simpleFunction();
