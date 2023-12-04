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
    
    // Get input from file
        // Placeholder input String
        input = 'a1b0c2';
    
    // remove first number and everything before it
        for (let i = 0; i < input.length; i++) {
            // Get first number
            console.log('input ', input);
            let iCharacter = input[i];
            console.log('iCharacter ', iCharacter);
            if (numbers.some(x => iCharacter.includes(x))) {
                console.log('iCharacter contains a number');
                firstNumber = firstNumber.concat(iCharacter);
                console.log('firstNumber ', firstNumber, typeof firstNumber);
            }
            console.log('typeof iCharacter ', typeof iCharacter);
    
            // let parsedCharacter = nextCharacter;
            // console.log('typeof parsedCharacter ', typeof parsedCharacter);
    
        
            //if ( typeof parseInt(nextCharacter) ===; )
            
            // text = firstNumber.toString();
        }
    
    // find last number
    
    // output

    }
    
extractNumbers();
    
    // Notes
    // parseInt() for string to number