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