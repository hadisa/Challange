

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
let str = "((()()";

// Function call
document.write('max lenght', findMaxLen(str) + "<br>");

str = "()(()))))";

// Function call
document.write('max lenght', findMaxLen(str) + "<br>");
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

    // Loop to find the frequency
    // of each character
    for (var i = 0; i < n; i++) {
        freq[s[i].charCodeAt(0) -
            "A".charCodeAt(0)]++;
    }

    // Sort in decreasing order
    // based on frequency
    freq.sort((a, b) => b - a);

    // Maximum possible answer
    var answer = n;

    // Loop to find the minimum operations
    // required such that frequency of
    // every character is equal
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


'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    var n=arr.length
    var pos=0;
    var neg=0;
    var zero=0;
arr.map((num, i) =>{
   if(num>0){
       pos++;
   } else if(num<0){
       neg++;
   }else if(num===0){
       zero++;
   }
}   
)
console.log(Number.parseFloat(pos/n).toFixed(6))
console.log(Number.parseFloat(neg/n).toFixed(6))
console.log(Number.parseFloat(zero/n).toFixed(6) )
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
//----------------------------------------------------------------------------------

// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

// Example arr=[1,3,5,7,9]

// The minimum sum is 16 and the maximum sum is 24 . The function prints
arr=[1,3,5,7,9]
function miniMaxSum(arr) {
    arr = arr.sort();
    var min=0;
    var max=0;
    // Write your code here
    arr.map((num, i)=>{
        if(i<4){
            min+=num;  
        }
        if(i>0){
            max+=num
        }
        
    })
console.log(min, '', max);
}

miniMaxSum(arr);

//====================================================================================================================

// Given a time in -hour AM/PM format, convert it to military (24-hour) time.

// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

function timeConversion(s) {
    console.log(s)
 var d = s.split(':')
 var hours=d[0];
 var minutes=d[1];
 var ss=d[2].slice(0, 2);
 var ampm=d[2].slice(2,5);
    
if(ampm == "PM" && hours<12) hours = Number(hours)+12;
if(ampm == "AM" && hours==12) hours = Number(hours)-12;
var sHours = hours.toString();
var sMinutes = minutes.toString();
if(hours<10) sHours = "0" + sHours;
if(minutes<10) sMinutes = "0" + sMinutes;
console.log(sHours + ":" + sMinutes)

return sHours + ":" + minutes + ":" + ss;
}