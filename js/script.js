// write a function that takes the input string and reverses it
// example
// argument: Hello
// return: olleH
function reverseThisString(string){
    const word = string.split('');

    const reverseWord = []; 
    let result = ""; 
    word.forEach(function(letter){

        reverseWord.unshift(letter);
    })
    
    reverseWord.forEach(function(letter){
        result += letter;
    })
    
    console.log(result);

   
}
reverseThisString('Hello');


// write a function that takes the input string and switches all uppercase characters to lowercase and lowercase charcaters to uppercase
// example:
// argument: Hello World
// return: hELLO wORLD
function swapCase(string) {

    const word = string.split('');

    let result = "";
    word.forEach(function(letter){
        // console.log(letter)
        if (letter === letter.toUpperCase()){
           letter = letter.toLowerCase();
            result = result + letter;
            return; 
        }
        
        letter = letter.toUpperCase()
        result = result + letter;
        
    })

    console.log(result)
}
swapCase('Hello World')


//convert array of numbers from farenheit to celcius
// example:
// argument: [23, 32, 41, 50, 59]
// return: [-5, 0, 5, 10, 15]
// hint: use Array.map
function toCelcius(array){
    const celciusArr = array.map(function(temp){
        return (temp-32) * (5/9);
    })
    console.log(celciusArr);
}
toCelcius([23, 32, 41, 50, 59]);

//write a function that takes an input array and returns an array of booleans (>=75) or fail (<75)
// example:
// argument: [20, 30, 50, 80, 90, 100]
// return: [false, false, false, true, true, true]
// hint: use Array.map
function passOrFail(array){
    const arrBool = array.map(test => test >= 75);

    return arrBool;
}
console.log(passOrFail([20, 30, 50, 80, 90, 100]))

//write code that loops through the two variables returns an array ['2 is zwei', '3 is drei', '4 is vier', '5 is fünf', '6 is sechs']
// example:
// return: ['2 is zwei', '3 is drei', '4 is vier', '5 is fünf', '6 is sechs']
// hint: use Array.forEach, Array.map or a for loop
function germanNumbers(){
    const cardinalNumbers = [2,3,4,5,6];
    const germanNumbers = ['zwei', 'drei', 'vier', 'fünf', 'sechs'];

    const combine = []; 

    
    for (let i =0; i<cardinalNumbers.length; i++){
        combine.push(`${cardinalNumbers[i]} is ${germanNumbers[i]} `  )
    }

    console.log(combine);
}
germanNumbers();

// write code that returns an array of ONLY prime numbers that are in the array numbers
// example: 
// return [2, 3, 5, 7, 11, 13]
// hint use: Array.filter
function returnPrimeNumbers(){
    const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

    const primeArr = numbers.filter(function(number){
        if (number ===1 ){
            return false;
        }
        if (number === 2 || number === 3 || number === 5 ) {
            return true;
        }

        if (number%2 === 0 || number %3 ===0 || number %5 ===0){
            return false; 
        }
        else {
            return true;
        }
    })
    console.log(primeArr);    
}
returnPrimeNumbers();

//Write a function that loops through and console.log's the numbers from 1 to 100, except multiples of three, log (without quotes) "CSC225 RULES" instead of the number, for the multiples of five, log (without quotes) "I LOVE JAVASCRIPT". For numbers which are multiples of both three and five, log (without quotes) "CSC225 RULES I LOVE JAVASCRIPT" 

function CSC225Display(){

    const max = 101; 
    
    for (let i =1; i<max; i++){

        if (i%3 ===0 && i%5 ===0 ){
            console.log('CSC225 RULES I LOVE JAVASCIPT');
        }
        else if (i%3 === 0){
            console.log('CSC225 RULES');
        }
        else if (i%5 ===0){
            console.log('I LOVE JAVASCIPT');
        }
        else {
            console.log(i);
        }
    }

}

CSC225Display();
