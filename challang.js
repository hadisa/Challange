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

//Des:
const a = 4;        // 00000000000000000000000000000101
const b = 4;        // 00000000000000000000000000000011

console.log(a ^ b); // 00000000000000000000000000000110
// expected output: 0
// but
{
  const a = 4;        // 00000000000000000000000000000101
  const b = 18;        // 00000000000000000000000000000011

  console.log(a ^ b); // 00000000000000000000000000000110
  // expected output: 22
}
//and
{
  const a = 4;        // 00000000000000000000000000000101
  const b = 14;        // 00000000000000000000000000000011

  console.log(a ^ b); // 00000000000000000000000000000110
  // expected output: 10
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


//===========================================================================================

/**
 * 
 * You will be given a list of 32 bit unsigned integers. Flip all the bits ( and ) and print the result as an unsigned integer.

   For example, your decimal input . We're working with 32 bits, so:
   Function Description:
   The flippingBits() function should return an unsigned decimal integer.
   Input parameter:
   n: an integer
   Constraints:
   0 ≤ n < 2²³
//-------
// lowBin = 00000010010001111000000000000000
// flip bits and reverse string
// highBin = 11111111111111100001110110111111
 * 
 * 
 */
function flippingBits(n) {
  // Write your code here

  let lowBin = ''
  let highBin = ''
  let result = 0
  // convert input decimal to binary
  while (n >= 1) {
    const rem = n % 2
    lowBin += rem
    rem === 1 ?
      n = Math.floor(n / 2) :
      n /= 2
  }
  // adjust binary to 32 bits
  while (lowBin.length < 32) {
    lowBin += 0
  }
  // reverse and invert each bit of binary
  for (let i = lowBin.length - 1; i >= 0; i--) {
    highBin += lowBin[i] === '0' ? '1' : '0'
  }
  // convert binary to decimal output
  for (let i = 0; i < highBin.length; i++) {
    const expo = highBin.length - 1 - i
    result += highBin[i] * (2 ** expo)
  }
  return result

}
console.log(flippingBits(123456))
//Output is :: 4294843839



var w = c.width = window.innerWidth,
  h = c.height = window.innerHeight,
  ctx = c.getContext('2d'),

  opts = {

    len: 20,
    count: 50,
    baseTime: 10,
    addedTime: 10,
    dieChance: .05,
    spawnChance: 1,
    sparkChance: .1,
    sparkDist: 10,
    sparkSize: 2,

    color: 'hsl(hue,100%,light%)',
    baseLight: 50,
    addedLight: 10, // [50-10,50+10]
    shadowToTimePropMult: 6,
    baseLightInputMultiplier: .01,
    addedLightInputMultiplier: .02,

    cx: w / 2,
    cy: h / 2,
    repaintAlpha: .04,
    hueChange: .1
  },

  tick = 0,
  lines = [],
  dieX = w / 2 / opts.len,
  dieY = h / 2 / opts.len,

  baseRad = Math.PI * 2 / 6;

ctx.fillStyle = 'black';
ctx.fillRect(0, 0, w, h);

function loop() {

  window.requestAnimationFrame(loop);

  ++tick;

  ctx.globalCompositeOperation = 'source-over';
  ctx.shadowBlur = 0;
  ctx.fillStyle = 'rgba(0,0,0,alp)'.replace('alp', opts.repaintAlpha);
  ctx.fillRect(0, 0, w, h);
  ctx.globalCompositeOperation = 'lighter';

  if (lines.length < opts.count && Math.random() < opts.spawnChance)
    lines.push(new Line);

  lines.map(function (line) { line.step(); });
}
function Line() {

  this.reset();
}
Line.prototype.reset = function () {

  this.x = 0;
  this.y = 0;
  this.addedX = 0;
  this.addedY = 0;

  this.rad = 0;

  this.lightInputMultiplier = opts.baseLightInputMultiplier + opts.addedLightInputMultiplier * Math.random();

  this.color = opts.color.replace('hue', tick * opts.hueChange);
  this.cumulativeTime = 0;

  this.beginPhase();
}
Line.prototype.beginPhase = function () {

  this.x += this.addedX;
  this.y += this.addedY;

  this.time = 0;
  this.targetTime = (opts.baseTime + opts.addedTime * Math.random()) | 0;

  this.rad += baseRad * (Math.random() < .5 ? 1 : -1);
  this.addedX = Math.cos(this.rad);
  this.addedY = Math.sin(this.rad);

  if (Math.random() < opts.dieChance || this.x > dieX || this.x < -dieX || this.y > dieY || this.y < -dieY)
    this.reset();
}
Line.prototype.step = function () {

  ++this.time;
  ++this.cumulativeTime;

  if (this.time >= this.targetTime)
    this.beginPhase();

  var prop = this.time / this.targetTime,
    wave = Math.sin(prop * Math.PI / 2),
    x = this.addedX * wave,
    y = this.addedY * wave;

  ctx.shadowBlur = prop * opts.shadowToTimePropMult;
  ctx.fillStyle = ctx.shadowColor = this.color.replace('light', opts.baseLight + opts.addedLight * Math.sin(this.cumulativeTime * this.lightInputMultiplier));
  ctx.fillRect(opts.cx + (this.x + x) * opts.len, opts.cy + (this.y + y) * opts.len, 2, 2);

  if (Math.random() < opts.sparkChance)
    ctx.fillRect(opts.cx + (this.x + x) * opts.len + Math.random() * opts.sparkDist * (Math.random() < .5 ? 1 : -1) - opts.sparkSize / 2, opts.cy + (this.y + y) * opts.len + Math.random() * opts.sparkDist * (Math.random() < .5 ? 1 : -1) - opts.sparkSize / 2, opts.sparkSize, opts.sparkSize)
}
loop();

window.addEventListener('resize', function () {

  w = c.width = window.innerWidth;
  h = c.height = window.innerHeight;
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, w, h);

  opts.cx = w / 2;
  opts.cy = h / 2;

  dieX = w / 2 / opts.len;
  dieY = h / 2 / opts.len;
});

//---------------------------------------------------------------------------------
// Given a square matrix, calculate the absolute difference between the sums of its diagonals.

// For example, the square matrix arr is shown below:

/**
1 2 3
4 5 6
9 8 9

The left-to-right diagonal = 1+5+9=15. The right to left diagonal = 3+5+9=17. Their absolute difference is [17-15] =2.
 * 
 */

function diagonalDifference(arr) {

  var rightToLeft = 0;
  var leftToRight = 0;
  for (var i = 0; i < arr.length; i++) {
    outerloop:
    for (var j = 0; j < arr[i].length; j++) {
      rightToLeft += arr[i][j + i];
      leftToRight += arr[i][(arr[i].length - 1) - i];

      break outerloop;
    }
  }
  console.log('right to left ', rightToLeft)
  console.log(Math.abs(rightToLeft - leftToRight))
  return Math.abs(rightToLeft - leftToRight);
}
var arr = [[1, 2, 3],
[4, 5, 6]
[9, 8, 9]]
console.log(diagonalDifference(arr))