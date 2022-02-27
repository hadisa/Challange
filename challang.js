// There is a collection of input strings and a collection of query strings. For each query string, determine how many times it occurs in the list of input strings. Return an array of the results.
// Function Description

// Complete the function matchingStrings in the editor below. The function must return an array of integers representing the frequency of occurrence of each query string in strings.

// matchingStrings has the following parameters:

// string strings[n] - an array of strings to search
// string queries[q] - an array of query strings
// Returns

// int[q]: an array of results for each query



function matchingStrings(strings, queries) {
    console.log(strings)
    console.log(queries)
    var arrRes = [];
    for (var i = 0; i < queries.length; i++) {

        var n = 0;
        for (var j = 0; j < strings.length; j++) {
            if (new String(queries[i]).trim().valueOf() === new String(strings[j]).trim().valueOf()) {
                console.log(queries[i], strings[j])
                n++;
            }
        }
        arrRes.push(n);
    }
    console.log('Result is', arrRes)
    return arrRes;
}

console.log(matchingStrings(['4', 'aba', 'baba', 'aba', 'xzxb'], ['ab', '3', 'aba', 'xzxb']))
//=================================================================================

// Given an array of integers, where all elements but one occur twice, find the unique element.
//a =[1,2,3,4,3,2,1]
// Example

// The unique element is .

// Function Description

// Complete the lonelyinteger function in the editor below.

// lonelyinteger has the following parameter(s):

// int a[n]: an array of integers
// Returns

// int: the element that occurs only once
// Input Format

// The first line contains a single integer, , the number of integers in the array.
// The second line contains  space-separated integers that describe the values in .


function lonelyinteger(a) {

    let res = a[0];
    for (let i = 1; i < a.length; i++)
        res = res ^ a[i];

    return res;

}



//--------------------------------------------------------------------------------
// Submissions	Leaderboard	Discussions	Editorial
// HackerLand University has the following grading policy:

// Every student receives a grade in the inclusive range from 0 to 100 .
// Any grade less than 40 is a failing grade.

// Sam is a professor at the university and likes to round each student's grade according to these rules:
// If the difference between the grade and the next multiple of 5 is less than 3, round grade up to the next multiple of 5.
//If the value of grade is less than 38, no rounding occurs as the result will still be a failing grade.
// Examples

//  grade= 85 round to  (85 - 84 is less than 3)
//  grade= 29 do not round (result is less than 40)
//  grade =57 do not round (60 - 57 is 3 or higher)

// Given the initial value of grade for each of Sam's n students, write code to automate the rounding process.

// Function Description

// Complete the function gradingStudents in the editor below.

// gradingStudents has the following parameter(s):

// int grades[n]: the grades before rounding

