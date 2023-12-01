// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// 'abc' =>  ['ab', 'c_']
// 'abcdef' => ['ab', 'cd', 'ef']

function solution(str) {
    const pairs = [];
  
    for (let i = 0; i < str.length; i += 2) {
      const pair = str.slice(i, i + 2);
      pairs.push(pair);
    }
  
    // If the string length is odd, add an underscore to the last pair
    if (str.length % 2 !== 0) {
      pairs[pairs.length - 1] += '_';
    }
  
    return pairs;
  }
  console.log(solution('abcdefg'))
  ////////////////////////////////////////////////////////////////////////////////

//   Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc')  returns true
// solution('abc', 'd')  returns false
function solution(str, ending) {
    return str.endsWith(ending);
  }

  console.log(solution('abc', 'gbc'))

  /////////////////////////////////////////////////////////////////////////////////

//   Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

// Your task is to write a function maskify, which changes all but the last four characters into '#'.

// Examples (input --> output):
// "4556364607935616" --> "############5616"
//      "64607935616" -->      "#######5616"
//                "1" -->                "1"
//                 "" -->                 ""

// "What was the name of your first pet?"
// "Skippy" --> "##ippy"
// "Nananananananananananananananana Batman!" --> "####################################man!"

function maskify(str) {
    // Check if the string length is greater than 4
    if (str.length > 4) {
      // Replace all characters except the last four with '#'
      return '#'.repeat(str.length - 4) + str.slice(-4);
    } else {
      // Return the original string if its length is 4 or less
      return str;
    }
  }
  
  // Examples:
  console.log(maskify("4556364607935616")); // Output: "############5616"
  console.log(maskify("64607935616"));      // Output: "#######5616"
  console.log(maskify("1"));                // Output: "1"
  console.log(maskify(""));                 // Output: ""
  console.log(maskify("Skippy"));           // Output: "##ippy"
  console.log(maskify("Nananananananananananananananana Batman!"));

  //////////////////////////////////////////////////////////////////////////////////

//   Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

function descendingOrder(n) {
    // Convert the number to a string, split its digits, and sort them in descending order
    const sortedDigits = n.toString().split('').sort((a, b) => b - a);
  
    // Join the sorted digits and convert back to a number
    const result = parseInt(sortedDigits.join(''), 10);
  
    return result;
  }

  /////////////////////////////////////////////////////////////////////////////////
//   Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

function countDuplicates(input) {
    // Convert the input string to lowercase for case-insensitive comparison
    const lowercaseInput = input.toLowerCase();
    
    // Create an object to store character occurrences
    const charCount = {};
  
    // Iterate through each character in the input string
    for (let char of lowercaseInput) {
      // Ignore non-alphabetic and non-numeric characters
      if (/[a-z0-9]/.test(char)) {
        // If the character is not in the object, add it; otherwise, increment its count
        charCount[char] = (charCount[char] || 0) + 1;
      }
    }
  
    // Count the characters that occur more than once
    const duplicatesCount = Object.values(charCount).filter(count => count > 1).length;
  
    return duplicatesCount;
  }
  //////////////////////////////////////////////////////////////////////////////
//   In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Examples
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.
function highAndLow(numbers) {
    // Split the input string into an array of numbers
    const numberArray = numbers.split(' ').map(Number);
  
    // Find the minimum and maximum values
    const min = Math.min(...numberArray);
    const max = Math.max(...numberArray);
  
    // Return the result as a formatted string
    return `${max} ${min}`;
  }
  ///////////////////////////////////////////////////////////////////////////
//   Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"])  returns[false,1,1,2,1,3,"a",0,0]