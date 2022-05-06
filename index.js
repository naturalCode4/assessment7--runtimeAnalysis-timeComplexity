// Sum Zero
// Write a function that takes in an array of numbers.
// The function should return True if any two numbers
// in list sum to 0, and false otherwise.

const addToZero = arr => {
    for (let i=0; i<arr.length; i++) {
        for (let j=0; j<arr.length; j++) {
            if (arr[i] + arr[j] === 0) {
                return true
            }
        }
    }
    return false
}

// console.log(addToZero([1,2,3,4]))
// console.log(addToZero([1,2,-2,4]))

// time complexity: O(n^2)
// space complexity: O(n)

const addToZeroIncludes = arr => {
    for (let i=0; i<arr.length; i++) {
        if (arr.includes(arr[i]*-1)) {
            return true
        }
    }
    return false
}

// time complexity: probably also O(n^2) as .includes probably loops whole array
// space complexity: O(n)

// Unique Characters
// Write a function that takes in a single word, as a string.
// It should return True if that word contains only unique characters.
// Return False otherwise.

const hasUniqueChars = string => {
    for (let i=0; i<string.length; i++) {
        for (let j=0; j<string.length; j++) {
            console.log(i, j, string[i], string[j])
            if (string[i]===string[j] && i!==j) {
                return false
            }
        }
    }
    return true
}

// console.log(hasUniqueChars('adinkramer'))
// console.log(hasUniqueChars('adinkmer'))

// time complexity: O(n^2)
// space complexity: O(n)

//pangram sentence
// A pangram is a sentence that contains all the letters of the English alphabet at least once,
const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

const isPangram = string => {
    string = string.toLowerCase().split('')
    let yep = true
    // console.log(string)
    alphabet.forEach(letter => {
        // console.log(!string.includes(letter.toLowerCase()))
        if (!string.includes(letter.toLowerCase())) {
            yep = false
        }
    })
    return yep
}

// console.log(isPangram("the QUICK brown fox jumps over the lazy dog!"))
// console.log(isPangram("I like cats"))

// time complexity: O(n) going with the assumption that .includes loops over a whole array, and also assuming our alphabet has a static length
// space complexity: O(1)

// Longest Word
// Write a function, find_longest_word, that takes a list of words and returns the length of the longest one.

const find_longest_word = listOfWords => {
    let longest_word = 0
    listOfWords.forEach(word => {
        if (word.length > longest_word) {
            longest_word = word.length
        }
    })
    return longest_word
}

// console.log(find_longest_word(['hello','worlds']))

// time complexity: O(n). I wonder, why not account for words being potentially long length? so its like O(nm). I know we reduce to just n, but it seems more descriptive and helpful to me for it to be O(nm)
// space complexity: O(n)




