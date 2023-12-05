import fs from 'fs';
const input = fs.readFileSync('./example.txt', 'utf-8').trim().split('\n');
console.log(input);

function mainFunction(input) {
        console.log('Main Function');
    } 

mainFunction(input);
