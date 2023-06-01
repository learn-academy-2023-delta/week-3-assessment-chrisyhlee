// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.

describe('fibIt', () => {
  it('takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence', () => {
    const fibLength1 = 6
    // Expected output: [1, 1, 2, 3, 5, 8]
    
    const fibLength2 = 10
    // Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
    expect(fibIt(fibLength1)).toEqual([1, 1, 2, 3, 5, 8])
    expect(fibIt(fibLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
  })
})


// b) Create the function that makes the test pass.

// Pseudo code:

// create arrow function with one parameter
const fibIt = (num) => {
  // define variable with array [1, 1]
  let arr = [1, 1]
  // create for loop starting at index 2
  for(let i = 2; i < num; i++) {
    // add current index - 1 to current index - 2, then push to arr variable
    arr.push(arr[i - 2] + arr[i - 1])
  }
  // return arr
  return arr
}



// --------------------2) Create a function that takes in an object and returns an array of the values sorted from least to greatest.
// Hint: Check out this resource: Object.values() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values

// a) Create a test with expect statements for each of the variables provided.

describe('leastToGreatest', () => {
  it('takes in an object and returns an array of the values sorted from least to greatest', () => {
    const studyMinutesWeek1 = {
      sunday: 90,
      monday: 30,
      tuesday: 20,
      wednesday: 15,
      thursday: 30,
      friday: 15,
      saturday: 60
    }
    // Expected output: [15, 15, 20, 30, 30, 60, 90]
    
    const studyMinutesWeek2 = {
      sunday: 100,
      monday: 10,
      tuesday: 45,
      wednesday: 60,
      thursday: 20,
      friday: 15,
      saturday: 65
    }
    // Expected output: [10, 15, 20, 45, 60, 65, 100]
    expect(leastToGreatest(studyMinutesWeek1)).toEqual([15, 15, 20, 30, 30, 60, 90])
    expect(leastToGreatest(studyMinutesWeek2)).toEqual([10, 15, 20, 45, 60, 65, 100])
  })
})


// b) Create the function that makes the test pass.

// Pseudo code:

const leastToGreatest = (collection) => Object.values(collection).sort((a, b) => a - b)


// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

describe('arraySum', () => {
  it('takes in an array and returns an array of the accumulating sum. An empty array should return an empty array', () => {
    const accountTransactions1 = [100, -17, -23, -9]
    // Expected output: [100, 83, 60, 51]
    
    const accountTransactions2 = [250, -89, 100, -96]
    // Expected output: [250, 161, 261, 165]
    
    const accountTransactions3 = []
    // Expected output: []
    expect(arraySum(accountTransactions1)).toEqual([100, 83, 60, 51])
    expect(arraySum(accountTransactions2)).toEqual([250, 161, 261, 165])
    expect(arraySum(accountTransactions3)).toEqual([])
  })
})


// b) Create the function that makes the test pass.

// Pseudo code:

// create a function that takes an array
// const arraySum = (array) => {
//   // declare variable sum, starting at 0
//   let sum = 0
//   // declare variable newArray, starting as empty array
//   let newArray = []
//   for(let i = 0; i < array.length; i++) {
//     // each iteration reassigning sum to equal current index value + current sum
//     // sum = array[i] + sum
//     sum += array[i]
//     // after sum is calculated, push into newArray
//     newArray.push(sum)
//   }
//   return newArray
// }

// Different approach

const arraySum = (arr) => {
  let sum = 0
  return arr.reduce((acc, currentValue) => {
    return [...acc, sum += currentValue]
  }, [])
}