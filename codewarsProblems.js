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