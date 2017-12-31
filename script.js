var practiceArray = [4, 7, 8, 5, 4, 3, 7];


function getMean(array) {
// sum of all numbers divided by number length
  var
    sum,
    mean;
  //make a sum variable with 0
  sum = 0;
  array.forEach(num => {
  // loop through the array and add each num to the sum
    sum += num;
  });
  // make the sum and divide it by array length
  mean = sum / array.length;
  return mean;
}
function getMedian(array) {
// middle number in the array or the two middle numbers added and divided by 2
  var
    median,
    midOne,
    midTwo;
  //sorts numbers in acending order
  array.sort(function(a, b){return a - b});
// we  check if the array is uneven and if it is finding the median through dividing by 2
  if(array.length % 2 !== 0) {
    median = array[Math.floor(array.length / 2)];
  } else {
    // we  check if the array is even and if it is finding the median one through dividing by 2 and subtracting 1 and median two divided by 2.
    midOne = array[(array.length / 2) - 1];
    midTwo = array[array.length / 2];
    // calc median from adding and divinding by 2
    median = (midOne + midTwo) / 2;
  }
  return median;

}
function getMode(array) {
  var
    modeObject,
    maxFrequency,
    modes;
// get the item that repeats the most in the array
  modeObject = [];
  array.forEach(num => {
  //if its not found on mode object set it in the array as 0
  if(!modeObject[num]) {modeObject[num] = 0; }
  //add one to the list in the array
  modeObject[num]++;
  });
  //to keep track of the max number of occurences in the below loop
  maxFrequency = 0;
  //to keep track of the most occuring numbers
  modes = [];
  //loop through the modeObject to check each num for frequency and if its past the max update max and move to modes.
  for(var num in modeObject){
    if(modeObject[num] > maxFrequency) {
      modes = [num];
      maxFrequency = modeObject[num];
    } else if (modeObject[num] === maxFrequency) {
    //if the number is the same frequency push the number to the mode array
      modes.push(num);
    }
  }
  // if the mode array lenth is the same length as the modeObject it tell it that there is no modes and its all even
  if(modes.length === Object.keys(modeObject).length) { modes = []; }
  return modes;
}

function meanMedianMode(array) {
  return {
    mean: getMean(array),
    median: getMedian(array),
    mode: getMode(array)
  };

}

console.log(meanMedianMode(practiceArray));
