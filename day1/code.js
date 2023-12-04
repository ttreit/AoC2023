// Day 1 Basic Bitch method
// Not intended to be efficient in any way

function extractNumbers() {
//Variables
    let input;
    let firstNumber;
    let text;
    const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    let lastNumber;
    let total;

// Get input from file
    // Placeholder input String
    input = 'a1b0c2';

// remove first number and everything before it
    for (let i = 0; i < input.length; i++) {
        // Get first number
        console.log('input ', input);
        let nextCharacter = input[i];
        console.log('nextCharacter ', nextCharacter);
        if (numbers.some(x => nextCharacter.includes(x))) {
            console.log('nextCharacter contains a number');
        }
        console.log('typeof nextCharacter ', typeof nextCharacter);

        // let parsedCharacter = nextCharacter;
        // console.log('typeof parsedCharacter ', typeof parsedCharacter);

    
        //if ( typeof parseInt(nextCharacter) ===; )
        
        // text = firstNumber.toString();
    }

// find last number

// output
    console.log('firstNumber ', firstNumber);
    console.log('firstNumber + 5 ', firstNumber + 5);
    console.log('text: ', text, typeof(text));
    console.log('text + 5 ', text + 5);
}

extractNumbers();

// Notes
// parseInt() for string to number