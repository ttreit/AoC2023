// Day 1 Basic Bitch method
// Not intended to be efficient in any way

function extractNumbers() {
//Variables
    let input;
    let firstNumber = '0';
    let text;
    const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    let lastNumber;
    let total;

function findFirstNumber() {
    return console.log('Found First Number');
}

function findSecondNumber() {
    return console.log('Found Second Number');
}

function basicFunctionCode() {
    input = 'a1b0c2';
    for (let i = 0; i < input.length; i++) {
        // Get first number
        console.log('input ', input);
        let iCharacter = input[i];
        console.log('iCharacter ', iCharacter);
        if (numbers.some(x => iCharacter.includes(x))) {
            console.log('iCharacter contains a number');
            firstNumber = firstNumber.concat(iCharacter);
            console.log('firstNumber ', firstNumber, typeof firstNumber); 
        } else {
            console.log('That character was not a number it was ', iCharacter);

        }


        console.log('typeof iCharacter ', typeof iCharacter);
        return console.log ('FirstNumber is ', firstNumber);

        // let parsedCharacter = nextCharacter;
        // console.log('typeof parsedCharacter ', typeof parsedCharacter);

    
        //if ( typeof parseInt(nextCharacter) ===; )
        
        // text = firstNumber.toString();
    }

}

// Get input from file
    // Placeholder input String
  

    //Call functions
findFirstNumber();
findSecondNumber();
basicFunctionCode();




// output


}

extractNumbers();

// Notes
// parseInt() for string to number