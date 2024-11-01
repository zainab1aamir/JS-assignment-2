// Assignment number2



// Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.

let firstName = prompt("enter username: ");
let lastName = prompt("enter last name: ");
let fullName = firstName.concat(lastName);

console.log(fullName);

// Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser

let mobilePhone = prompt("enter your mobile phone model: ");
let result = mobilePhone.length;

console.log(mobilePhone);
console.log(mobilePhone.length);

// Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser .

let countryName = "Pakistani";
let results = countryName.indexOf("n");

console.log(results);

// Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser.

let word = "hello world";
let lastIndex = word.lastIndexOf("l");

console.log(lastIndex);

// Write a program to find the character at 3rd index in the
// word “Pakistani” and display the result in your browser.

let name = "pakistani";
let output = name.charAt(3);

console.log(output);

// Write a program to replace the “Hyder” to “Islam” in the
// word “Hyderabad” and display the result in your browser.

let countryOne = "hyderabad";
let countryTwo = countryOne.replace("hyder", "islam");

console.log(countryTwo);


// Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.
// var message = “Ali and Sami are best friends. They play cricket and
// football together.”;

let message = "Ali and Sami are best friends. They play cricket and football together.";

let result2 =  message.split("and").join("&");

console.log(result2);


// Write a program that converts a string “472” to a number
// 472. Display the values & types in your browser.

let str1 = "427";
let result3 = Number(str1);
console.log(result3);
console.log(typeof result3);


// Write a program that takes user input. Convert and
// show the input in capital letters.

let elements = "my name is zainab aamir khan";
let result4 = elements.toUpperCase();

console.log(result4);


// Write a program that converts the variable num to
// string.

let num = 12;
let result5 = num.toString();
console.log(result5);
console.log(typeof result5);













