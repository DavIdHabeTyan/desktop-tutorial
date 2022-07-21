
// 1. Write a function that reverses a number
function reversTheNumber(number) {
    let str = number + ""
    let result = str.split("").reverse().join("")
    if (result.substring(0, 1) === "0") {
        return result.substring(1, result.length)
    } else {
        return result
    }
}
console.log(reversTheNumber(45677))
console.log(reversTheNumber(47890))



// 2. Write a function that checks whether a passed string is palindrom or not?
//     A palindrom is a word, phrase, or sequence that reads the same backwords as forward

function isPalindrom(text) {
    let revers = text.split("").reverse().join("");
    return text === revers
}
console.log(isPalindrom("madam"));
console.log(isPalindrom("nurse"))

// 3. Write a function that checks whether or not the input string is blank

function isBlank(text) {
   return text.length <= 0
}
console.log(isBlank("madam"));
console.log(isBlank(""));


// 4. Write a function to split a string and convert it into an array of words

function stringToArray(text) {
    if(text.length > 0) {
        return text.split(" ");
    }else {
        return text.split("")
    }
}
console.log(stringToArray('Web Development'))
console.log(stringToArray(""));

// 5. Write a function to convert a string (a person's first and last names) to
// abbreviated form. If there is only a first name listed, then return just that name
function convert(name) {
    let convertName = name.split(" ");
    if (convertName.length > 1) {
        return (convertName[0] + " " + convertName[1].charAt(0) + ".");
    }
    return convertName[0]
}
console.log(convert("Jon Doe"));
console.log(convert("Jon"));

// 6. Write a function to convert an input string to title case. Note that title case has
// the first letter of each word capitalized and every other word lowercase

function titleCase(text) {
    let lowerCase = text.toLowerCase().split(" ");
    let result = lowerCase.map(function (val) {
        return val.substring(0, 1).toUpperCase() + val.substring(1, val.length);
    });

    return result.join(" ");
}
console.log(titleCase("JavaScript exercise. Python exercise"));

// 7. Write a function to create new string from a given string with the first
// character of the given string added at the front and back

function appendChart(text) {
    let letter = text.substring(0, 1).toLowerCase()
    return  letter + text + letter

}
console.log(appendChart("Swift"))

// 8. Write a function to check whether the last digits of the given positive integers is
// same


// function isLastDigitsSame(...number) {
//
function isLastDigitsSame(...number) {
    let lastNumber = number[0] % 10;
    number.forEach(function (val) {
        if (val % 10 !== lastNumber) {
            lastNumber = false;
        }
    });

    if (lastNumber) {
        return true;
    } else {
        return false;
    }
}
console.log(isLastDigitsSame(134, 34, 4564, ));
console.log(isLastDigitsSame(134, 33));

///asfnaf



