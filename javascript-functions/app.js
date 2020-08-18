// Write a function that takes in a lower case word and makes it upper case

let word = "sunny"
const lowertoUpper = (word) => word.toUpperCase();
const result = lowertoUpper(word); 
console.log(result); 

// Write a function that multiplies three numbers together and returns the result

const multiply = (num1, num2, num3) => {
    return num1 * num2 * num3;
}
const result = multiply(3, 7, 19);
console.log(result); 

// Write a function that reverses a string so it reads backwards

const reverse = (word) => {
    return [...word].reverse().join("");
}

const result = reverse("sunny andy"); 
console.log(result); 

// Write a function that checks whether a number is greater than 500
    // If the number is greater, return true
    // If the number is less, return false 

const number = (number) => {
    if (number > 500) {
        return true;
    }
    else {
        return false;
    }
}
const result = number("500")
console.log(result);


// Write a function that takes in a letter and returns the letter before it in the alphabet
// EXTENSION:
    // Write a function that takes in a word and a number
        // Print the word out that number of times