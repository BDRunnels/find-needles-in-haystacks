
// You are a simple farmer living in the countryside. Unfortunately, there's a problem! It appears that your hay distributor has accidentally sent you hay stacks with needles in them. If your cows and sheep and other animals eat that, they will definitely get hurt. We have to find the haystacks that have needles, and remove them from our farm's feeding area.

// Write a function called findHaystacksWithNeedles that has one parameter called listOfHaystacks. You can expect that that parameter will always be an array of objects, where each object element represents an individual haystack.

// Your function should return a new array with only the haystacks with needles in them. 

// An example is provided below:

// If you were given this array:
let listOfHaystacks = [
    {
        haystackId: 1,
        lbsOfHay: 20,
        numOfNeedles: 0
    },
    {
        haystackId: 2,
        lbsOfHay: 30,
        numOfNeedles: 2
    },
    {
        haystackId: 3,
        lbsOfHay: 25,
        numOfNeedles: 1
    },
    {
        haystackId: 4,
        lbsOfHay: 25,
        numOfNeedles: 0
    }
]

// Given that array, your function should return an array that only contains 2 elements: the elements with haystackId of 2 and 3, since those are the only haystacks with needles in them. 


// Write your code below: 


// function findHaystacksWithNeedles () {
//     let needles = 0
//     if (needles !== listOfHaystacks.numOfNeedles ) {
//         return listOfHaystacks
//     }
// } 


// console.log(findHaystacksWithNeedles(listOfHaystacks))

// ELLES ANSWER

// Real life APPROACH:
        // Pre-step: we have to set up and figure out our step-by-step process to find the haystack needles.
 const findHaystacksWithNeedles = (listOfHaystacks) => {
    let pieceOfPaperWithNeedleHaystacks = [];



    // 1) We want to look at the piece of paper (the array)
        // In coding terms, that is the equivalent of looking at the argument value for our listOfHaystacks parameter.

    // 2) We want to do something over and over again. 
    for (let index = 0; index < listOfHaystacks.length; index++) {

        // 2a) We want to look at the current haystack we're considering on the piece of paper. 
        let currentHaystack = listOfHaystacks[index];

        // 2b) We want to ask if that current haystack has a number of needles that is more than 0. We will need to do one thing in one situation and another thing in another. 
        if (currentHaystack.numOfNeedles > 0) {
        // If it does have needles: Go get another piece of paper and write the number of that haystack on that piece of paper. 
            pieceOfPaperWithNeedleHaystacks.push(currentHaystack)
        // If it doesn't have needles: Skip it and go to next hay stack.
        } else {
            continue // NOT TECHNICALLY NECESSARY, if removed, result is the same. CONTINUE will skip if numOfNeedles is NOT greater than 0. 
        }
    }
        
    // 3) Give back that piece of paper with the needle haystacks on it to the hay distributor. 
    return pieceOfPaperWithNeedleHaystacks
}

console.log(findHaystacksWithNeedles(listOfHaystacks))
    