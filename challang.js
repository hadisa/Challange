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