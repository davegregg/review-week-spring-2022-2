console.log(pages) // loaded from other file, see index.html line 13

let arraysAreShallowClones = function (arrayA, arrayB) {
    // Are there any cases where this function can exit early,
    // instead of doing a lot of work?
    if (arrayA === arrayB) {
        throw new Error("Arguments point to same array in memory.")
    }
    if (!Array.isArray(arrayA) || !Array.isArray(arrayB)) {
        throw new Error("Invalid arguments: Function requires two arrays.")
    }
    if (arrayA.length !== arrayB.length) {
        return false
    }

    for (let position = 0; position < arrayA.length; position += 1) {
        let valueOfA = arrayA[position] // 0
        let valueOfB = arrayB[position] // 0

        if (valueOfA !== valueOfB) {
            return false
        }
    }

    return true
}

let arraysAreDeepClones = function (arrayA, arrayB) {
    return JSON.stringify(arrayA) === JSON.stringify(arrayB)
}

/* How do we decide between alternative approaches in code?
    - How readable is it?
    - Is there a significant performance difference?
    - Do we need to be sure to write code which is backward compability?
    - Is it built-in, third-party, or hand-written? What are the Pro's and Con's?
*/

// Approach 1: Manual Way
let pagesClone1 = []
for (let index = 0; index < pages.length; index += 1) {
    let number = pages[index]
    pagesClone1.push(number)
}

// Approach 2: Slice()
let pagesClone2 = pages.slice()

// Approach 3: Spread operator
let pagesClone3 = [...pages]

// Approach 4: Array.from()
let pagesClone4 = Array.from(pages)

// Approach 5: Concat()
let pagesClone5 = [].concat(pages) // pages.concat([])

// Approach 6: Iteration methods
let pagesClone6 = pages.map(item => item)

// Approach 7: Cheap, deep clone method
let pagesClone7 = JSON.parse(JSON.stringify(pages))
// JavaScript Object Notation (JSON)
// JSON is a string version of JavaScript data.
// JSON is used by LOTS of systems and LOTS of programming languages.

let deepClone = (item) => JSON.parse(JSON.stringify(item))


// 3 ways to write functions:

// Arrow Functions
let add1 = (x, y) => {
    return x + y
}

let subtract = (x, y) => x - y
let squareRoot = x => Math.sqrt(x)
let addTwo = x => x + 2

// "Syntax sugar" or "Syntactic sugar"

// Function Expression
let add2 = function (x, y) {
    return x + y
}

// Function Statement (have hoisting)
function add3 (x, y) {
    return x + y
}    