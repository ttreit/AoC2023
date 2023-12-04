function simpleFunction() {
    console.log('I am a simple function');
}

function findFirstNumber() {
    //Variables
        let input;
        let firstNumber = '0';
        let text;
        const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
        let lastNumber;
        let total;
        input = 'a1562b0c2';
    
        for (let i = 0; i < input.length; i++) {
            console.log('input ', input);
            let iCharacter = input[i];
            console.log('iCharacter ', iCharacter);
            if (numbers.some(x => iCharacter.includes(x))) {
                console.log('iCharacter contains a number');
                firstNumber = firstNumber.concat(iCharacter);
                console.log('firstNumber ', firstNumber, typeof firstNumber);
            } else if (firstNumber === '0') {
                continue;
            } else {
                console.log('firstNumber ', firstNumber, typeof firstNumber);
                console.log('i is currently ', i);
                firstNumber = parseInt(firstNumber);
                console.log('firstNumber after parseInt ', firstNumber, typeof firstNumber);
                break;
            }
        } 
        return firstNumber;
    }
    
let oneNumber = findFirstNumber();
console.log('oneNumber ', oneNumber, typeof oneNumber);
simpleFunction();
