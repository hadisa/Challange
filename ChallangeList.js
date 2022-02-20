

// var arr = ['5', '2', 'c', 'd', '+'];
// var arr = ['5', '-2','4', 'c', 'd','9', '+', '+'];
var arr = ['1']


var rs = 0;
var result = [];
var calaculat;


for (var i = 0; i <= arr.length; i++) {

    if (arr[i] == 'd') {
        if (result.length !== 0) {
            result.push(result[result.length - 1] * 2)
            console.log(result)
        }
    } else if (arr[i] == 'c') {
        if (result.length !== 0) {
            result.pop()
        }
    } else if (arr[i] == '+') {
        if (result.length !== 0) {
            if (result.length !== 1) {
                result.push(result[result.length - 1] + result[result.length - 2])
                console.log(result)
            }
        }
    } else if (!isNaN(arr[i])) {
        result.push(parseInt(arr[i]))
        console.log(result)
    }

}


document.write('Result  is rs << ', result)
for (var j = 0; j <= result.length - 1; j++) {
    rs += result[j];
}

document.write('<br />')
document.write(rs)
// ===================================================

if (Object.prototype.toString.call(rs) === '[object Array]') {
    console.log('Array!');
}
//   ===============================
// const value = 2
// isNaN(value) //false
// isNaN('test') //true
// isNaN({}) //true
// isNaN(1.2) //false
// ============================
//arrayList.length = 0; // Empty the array by setting length to 0


function isInt(num) {
    return num % 1 === 0;
}

console.log(isInt(4)); // true
console.log(isInt(12.2)); // false
console.log(isInt(0.3)); // false
//   ========================================================================================================================================
duplicate([1, 2, 3, 4, 5]); // [1,2,3,4,5,1,2,3,4,5] ?
function duplicate(arr) {
    return arr.concat(arr);
}
//  if the array is [3, 5, 2, -4, 8, 11] and the sum is 7, your program should return [[11, -4], [2, 5]] because 11 + -4 = 7 and 2 + 5 = 7?

// our two sum function which will return
// all pairs in the array that sum up to S
function twoSum(arr, S) {

    var sums = [];
    var hashTable = {};

    // check each element in array
    for (var i = 0; i < arr.length; i++) {

        // calculate S - current element
        var sumMinusElement = S - arr[i];

        // check if this number exists in hash table
        // if so then we found a pair of numbers that sum to S
        if (hashTable[sumMinusElement.toString()] !== undefined) {
            sums.push([arr[i], sumMinusElement]);
        }

        // add the current number to the hash table
        hashTable[arr[i].toString()] = arr[i];

    }

    // return all pairs of integers that sum to S
    return sums;

}

twoSum([3, 5, 2, -4, 8, 11], 7);
//==========================================================================================================================================
//Write a function called lucky_sevens which takes an array of integers and returns true if any three consecutive elements sum to 7.
function lucky_sevens(arr) {

    // if less than 3 elements then this challenge is not possible
    if (arr.length < 3) {
        return "not possible";
    }

    // because we know there are at least 3 elements we can
    // start the loop at the 3rd element in the array (i=2)
    // and check it along with the two previous elements (i-1) and (i-2)
    for (var i = 2; i < arr.length; i++) {
        if (arr[i] + arr[i - 1] + arr[i - 2] === 7) {
            return true;
        }
    }

    // if loop is finished and no elements summed to 7
    return false;

}

lucky_sevens([2, 1, 5, 1, 0]);
//=======================================================================================================================================

// You will be given a number N that represents where the minute hand currently is on a clock.Your program should return the angle that is formed by the minute hand and the 12 o'clock mark on the clock.


function simpleClockAngle(num) {

    // we got 6 because 360/60 = 6
    // 360 represents the full number of a degrees in a circle and
    // 60 is the number of minutes on a clock, so dividing these two numbers
    // gives us the number of degrees for one minute
    return 6 * num;

}

simpleClockAngle(15);
//=======================================================================================================================================
//   You will be given an array of several arrays that each contain integers and your goal is to write a function that will sum up all the numbers in all the arrays.
//   For example, if the input is[[3, 2], [1], [4, 12]] then your program should output 22 because 3 + 2 + 1 + 4 + 12 = 22. Solve without and with reduce.

function sum_array(arr) {
    // store our final answer
    var sum = 0;
    // loop through entire array
    for (var i = 0; i < arr.length; i++) {
        // loop through each inner array
        for (var j = 0; j < arr[i].length; j++) {
            // add this number to the current final sum
            sum += arr[i][j];
        }
    }

    return sum;
}

sum_array([[3, 2], [1], [4, 12]]);

// With reduce:

function sumArray(arr) {
    return arr.reduce((t, e) => t.concat(e)).reduce((t, e) => t + e)

}
//======================================================================================================================================

//   You will be given 2 parameters: a low and high number. Your goal is to print all numbers between low and high, 
//   and for each of these numbers print whether or not the number is divisible by 3. If the number is divisible by 3,
//    print the word "div3" directly after the number.
function test_divisors(low, high) {

    // we'll store all numbers and strings within an array
    // instead of printing directly to the console
    var output = [];

    for (var i = low; i <= high; i++) {

        // simply store the current number in the output array
        output.push(i);

        // check if the current number is evenly divisible by 3
        if (i % 3 === 0) { output.push('div3'); }

    }

    // return all numbers and strings
    return output;

}

test_divisors(2, 10);
//=======================================================================================================================================
// Write a function called oddball_sum which takes in a list of numbers and returns the sum of all the odd elements.
// Try to solve with and without reduce function.

//Without reduce:
function oddball_sum(nums) {

    // final count of all odd numbers added up
    var final_count = 0;

    // loop through entire list
    for (var i = 0; i < nums.length; i++) {

        // we divide by 2, and if there is a remainder then
        // the number must be odd so we add it to final_count
        if (nums[i] % 2 === 1) {
            final_count += nums[i]
        }

    }

    return final_count;

}

oddball_sum([1, 2, 3, 4, 5]);

function oddball_sum(nums) {
    return nums.reduce(function (total, item) {
        if (item % 2 === 1) {
            return total += item;
        }
        return total;
    });
}
// =======================================================================================================
function findMaxLen(str) {
    let n = str.length;

    // Create a stack and push -1 as 
    // initial index to it.
    let stk = [];
    stk.push(-1);

    // Initialize result
    let result = 0;

    // Traverse all characters of given string
    for (let i = 0; i < n; i++) {
        // If opening bracket, push index of it
        if (str.charAt(i) == '(') {
            stk.push(i);
        }

        // If closing bracket, i.e.,str[i] = ')'
        else {
            // Pop the previous opening
            // bracket's index
            if (stk.length != 0) {
                stk.pop();
            }

            // Check if this length formed with base of
            // current valid substring is more than max
            // so far
            if (stk.length != 0) {
                result = Math.max(result, i - stk[stk.length - 1]);
            }

            // If stack is empty. push current index as
            // base for next valid substring (if any)
            else {
                stk.push(i);
            }
        }
    }

    return result;
}

// Driver code
let st = "((()()";

// Function call
document.write('max lenght', findMaxLen(st) + "<br>");

st = "()(()))))";

// Function call
document.write('max lenght', findMaxLen(st) + "<br>");
//====================================================================================
//Given a string s containing just characters '(', ')', '[', ']', '{', '}' determine if the input
// string is valis. An input string is valid if:
//Open brackets must be closed by the same type of brackets
//Open brackets must be closed in the correct order
function isValid(s) {
    var stc = [];
    var result = false;
    for (var i = 0; i < s.length; i++) {
        if (s[i] == '(' || s[i] == '[' || s[i] == '{') {
            stc.push(s[i])
        } else {
            if ((stc[stc.length - 1] == '(' && s[i] == ')') || (stc[stc.length - 1] == '[' && s[i] == ']') || (stc[stc.length - 1] == '{' && s[i] == '}')) {
                result = true;
                stc.pop();
            } else {
                return false;
            }
        }
    }
    return result;
}
const res = isValid('({{[]}})')
document.write('is Valid >>>', res + "<br>")
// This code is contributed by Potta Lokesh
// =====================================================

//Minimum characters to be replaced to make frequency of all characters same?
// JavaScript implementation to find the minimum
// characters to be replaced to make
// frequency of all characters same

// Function to find the minimum
// operations to convert given
// string to another with equal
// frequencies of characters


function minOperations(s) {
    // Frequency of characters
    var freq = new Array(26).fill(0);
    var n = s.length;

    for (var i = 0; i < n; i++) {
        freq[s[i].charCodeAt(0) -
            "A".charCodeAt(0)]++;
    }

    // Sort in decreasing order based on frequency
    freq.sort((a, b) => b - a);

    // Maximum possible answer
    var answer = n;

    for (var i = 1; i <= 26; i++) {
        if (n % i === 0) {
            var x = n / i;
            var y = 0;
            for (var j = 0; j < i; j++) {
                y += Math.min(freq[j], x);
            }
            answer = Math.min(answer, n - y);
        }
    }
    return answer;
}



// Driver Code
var s = "BBCDF";
document.write(minOperations(s));




//===================================================================================================

// JavaScript program to find minimum
// replacements in a string to
// make adjacent characters unequal

// Function which counts the minimum
// number of required operations
function count_minimum(s) {
    // n stores the length of the string s
    var n = s.length;

    // ans will store the required ans
    var ans = 0;

    // i is the current index in the string
    var i = 0;

    while (i < n) {
        var j = i;

        // Move j until characters s[i] & s[j]
        // are equal or the end of the
        // string is reached
        while (s[j] === s[i] && j < n) {
            j++;
        }

        // diff stores the length of the
        // substring such that all the
        // characters are equal in it
        var diff = j - i;

        // We need atleast diff/2 operations
        // for this substring
        ans += parseInt(diff / 2);
        i = j;
    }

    document.write('Make equals :: ', ans + "<br>");
}

// Driver code
var str2 = "cnaaab";
count_minimum(str2);
//============================================================================

// Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with 6 places after the decimal.

// Example
// arr=[3,-1,0,-4,1] n=arr.length and 2 positive, 2 negative and 1 zero
// There are  elements, two positive, two negative and one zero. Their ratios are ,  and . Results are printed as:

// 0.400000
// 0.400000
// 0.200000
// Function Description

// Output Format

// Print the following  lines, each to  decimals:

// proportion of positive values
// proportion of negative values
// proportion of zeros


/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */


function plusMinus(arr1) {
    var n = arr1.length
    var pos = 0;
    var neg = 0;
    var zero = 0;
    arr1.map((num, i) => {
        if (num > 0) {
            pos++;
        } else if (num < 0) {
            neg++;
        } else if (num === 0) {
            zero++;
        }
    }
    )
    console.log(Number.parseFloat(pos / n).toFixed(6))
    console.log(Number.parseFloat(neg / n).toFixed(6))
    console.log(Number.parseFloat(zero / n).toFixed(6))
}
const arr1 = [3, -1, 0, -4, 1]
plusMinus(arr1);



//----------------------------------------------------------------------------------

// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

// Example arr=[1,3,5,7,9]

// The minimum sum is 16 and the maximum sum is 24 . The function prints

// array = [1, 3, 5, 7, 9]
// function miniMaxSum(arr) {
//     arr = arr.sort();
//     var min = 0;
//     var max = 0;
//     // Write your code here
//     arr.map((num, i) => {
//         if (i < 4) {
//             min += num;
//         }
//         if (i > 0) {
//             max += num
//         }
//     })
//     console.log(min, '', max);
// }

// miniMaxSum(array);

//====================================================================================================================

// Given a time in -hour AM/PM format, convert it to military (24-hour) time.

// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.



function timeConversion(s) {
    var d = s.split(':')
    var hours = d[0];
    var minutes = d[1];
    var ss = d[2].slice(0, 2);
    var ampm = d[2].slice(2, 5);

    if (ampm == "PM" && hours < 12) hours = Number(hours) + 12;

    if (ampm == "AM" && hours == 12) hours = Number(hours) - 12;
    var sHours = hours.toString();
    var sMinutes = minutes.toString();
    if (Number(hours) == 0) sHours = '00'
    if (minutes < 10) sMinutes = "0" + sMinutes;

    return sHours + ":" + minutes + ":" + ss;
}
console.log(timeConversion('12:00:00AM'));


// =====================================================================

// Maria plays college basketball and wants to go pro. Each season she maintains a record of her play. She tabulates the number of times she breaks her season record for most points and least points in a game. Points scored in the first game establish her record for the season, and she begins counting from there.

// Example score=[12, 24, 10, 24]

// Scores are in the same order as the games played. She tabulates her results as follows:

//                                      Count
//     Game  Score  Minimum  Maximum   Min Max
//      0      12     12       12       0   0
//      1      24     12       24       0   1
//      2      10     10       24       1   1
//      3      24     10       24       1   1






// ==================================================================
// Camel Case is a naming style common in many programming languages. In Java, method and variable names typically start with a lowercase letter, with all subsequent words starting with a capital letter (example: startThread). Names of classes follow the same pattern, except that they start with a capital letter (example: BlueCar).

// Your task is to write a program that creates or splits Camel Case variable, method, and class names.

// Input Format

// Each line of the input file will begin with an operation (S or C) followed by a semi-colon followed by M, C, or V followed by a semi-colon followed by the words you'll need to operate on.
// The operation will either be 

// S (split) or C (combine):=> split operation, the words will be a camel case method 
// ===> Input :S;M;plasticCup() OutPut=> plastic cup

// M indicates method, C indicates class, and V indicates variable :=> 
// class or variable name that you need to split into a space-delimited list of words starting with a lowercase letter.
// Example:
// Input :C;V;mobile phone
// Output: mobilePhone

//  class or variable name that you need to split into a space-delimited list of words starting with a lowercase letter.
// In the case of a combine operation, the words will be a space-delimited list of words starting with 
// lowercase letters that you need to combine into the appropriate camel case String. 
// Methods should end with an empty set of parentheses to differentiate them from variable names.
// Output Format

// For each input line, your program should print either the space-delimited list of words (in the case of a split operation) or the appropriate camel case string (in the case of a combine operation).
// Sample Input

// S;M;plasticCup()

// C;V;mobile phone

// C;C;coffee machine

// S;C;LargeSoftwareBook

// C;M;white sheet of paper

// S;V;pictureFrame
// // ======================================================================
// Sample Output

// plastic cup

// mobilePhone

// CoffeeMachine

// large software book

// whiteSheetOfPaper()

// picture frame


function processData(input) {
    //Enter your code here
    var arrInput = input.split("\n")
    // console.log('This is a test', arrInput)
    for (var i = 0; i < arrInput.length; i++) {
        var sentenses = arrInput[i].split(';')
        var fLetter = sentenses[0];
        var sLetter = sentenses[1];
        var result;
        var str2 = sentenses[2]

        var newStr = '';
        //split
        if (fLetter == 'S') {

            var array1 = str2.split(/(?=[A-Z])/);
            console.log('sperate', array1)

            if (sLetter == 'V') {
                array1[0].toLowerCase()
                console.log('sperate V', array1)

            } else if (sLetter == 'M') {
                console.log('sperate M', array1[0].charAt(0).toUpperCase() + array1.slice(1))


            } else if (sLetter == 'C') {
                console.log('sperate C', array1)

            }

        }
        //combine
        if (fLetter == 'C') {

            var array1 = str2.split(' ');
            if (sLetter == 'V') {
                for (var x = 0; x < array1.length; x++) {
                    newStr += array1[x].charAt(0).toUpperCase() + array1[x].slice(1);
                }
                console.log('combine V', newStr.charAt(0).toLowerCase())

            } else if (sLetter == 'M') {
                for (var x = 0; x < array1.length; x++) {
                    newStr += array1[x].charAt(0).toUpperCase() + array1[x].slice(1);
                }
                console.log('combine M', newStr.charAt(0).toLowerCase())


            } else if (sLetter == 'C') {
                for (var x = 0; x < array1.length; x++) {
                    newStr += array1[x].charAt(0).toUpperCase() + array1[x].slice(1);
                }
                console.log('combine C', newStr)

                // const upper = sentenses[2].charAt(0).toUpperCase() + sentenses[2].substring(1);
                // console.log('This is C in the V', sentenses[2]);
            }

        }
    }

}
var str1 = 'S;V;iPad\n' + 'C;M;mouse pad\n' + 'C;C;code swarm\n' + 'S;C;OrangeHighlighter\n';

var sty = 'S;M;plasticCup\n' + 'C;V;mobile phone\n' + 'C;C;coffee machine\n' + 'S;C;LargeSoftwareBook\n' + 'C;M;white sheet of paper\n';
console.log(processData(sty));

//-----------------------------------------------------------------------------------

// Given an array of integers and a positive integer k, determine the number of (i, j) pairs where i<j  and arr[i] + arr[j] is divisible by k.


// Function Description

// Complete the divisibleSumPairs function in the editor below.

// divisibleSumPairs has the following parameter(s):

// int n: the length of array 
// int ar[n]: an array of integers
// int k: the integer divisor
// Returns
// - int: the number of pairs




function divisibleSumPairs(n, k, ar) {

    var count = 0;
    for (var i = 0; i < n; i++) {
        for (var j = i; j < n; j++) {
            if (((ar[i] + ar[j]) % k) == 0 && i !== j) {
                count++;
            }
        }
    }
    return count;
}


//----------------------------------------------------
// There is a collection of input strings and a collection of query strings. For each query string, determine how many times it occurs in the list of input strings. Return an array of the results.
// Function Description

// Complete the function matchingStrings in the editor below. The function must return an array of integers representing the frequency of occurrence of each query string in strings.

// matchingStrings has the following parameters:

// string strings[n] - an array of strings to search
// string queries[q] - an array of query strings
// Returns

// int[q]: an array of results for each query

function matchingStrings(strings, queries) {

    var arrRes = [];
    var myStr= [];

    for (var i = 0; i < queries.length; i++) {
        arrRes.push[n];
        myStr.push[3];
        console.log('myStr push time', myStr)
        var n = 0;
        for (var j = i; j < strings.length; j++) {
            if (queries[i].indexOf(strings[j]) >= 0) {
                console.log(queries[i], strings[j])
                n++;
            }
        }
       
       
    }
    console.log('Result is', arrRes)
    return arrRes;
}

console.log(matchingStrings(['ab', 'ab', 'abc'], ['ab', 'abc', 'bc']))