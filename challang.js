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


arrcomplex = [1, 2, 3, 4, 3, 2, 1];
arrunique = 0;
loop1:
for (var i = 0; i < arrcomplex.length; i++) {
    var isunique = false
    loop2:
    for (var j = 0; j < arrcomplex.length; j++) {
        if (arrcomplex[i] === arrcomplex[j])
            break loop2;
        else isunique = true;
    }
    if (isunique) arrunique = arrcomplex[i];
}