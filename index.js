/*
You are a simple farmer living in the countryside. Unfortunately, there's a problem! It appears that your hay distributor has accidentally sent you hay stacks with needles in them. If your cows and sheep and other animals eat that, they will definitely get hurt. We have to find the haystacks that have needles, and remove them from our farm's feeding area.

Write a function called findHaystacksWithNeedles that has one parameter called listOfHaystacks. You can expect that that parameter will always be an array of objects, where each object element represents an individual haystack.

Your function should return a new array with only the haystacks with needles in them. 

An example is provided below:

If you were given this array:
let exampleArray = [
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

Given that array, your function should return an array that only contains 2 elements: the elements with haystackId of 2 and 3, since those are the only haystacks with needles in them. 
*/

// Write your code below: 