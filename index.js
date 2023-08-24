const validateArray = (arr) => {
  if (!Array.isArray(arr)) {
    throw new Error("Input is not an array.");
  }

  if (arr.length === 0) {
    throw new Error("Array is empty.");
  }

  if (!arr.every((item) => typeof item === "number")) {
    throw new Error("Array contains non-numeric elements.");
  }
};

// Function to calculate the sum of an array
const sum = (arr) => {
  validateArray(arr);
  return arr.reduce((acc, curr) => acc + curr, 0);
};

// Function to calculate the average of an array
const avg = (arr) => {
  validateArray(arr);
  return sum(arr) / arr.length;
};

// Function to calculate the mode of an array
const mode = (arr) => {
  validateArray(arr);

  const frequencyMap = {};
  let maxFrequency = 1;
  let mode = [];

  arr.forEach((num) => {
    if (frequencyMap[num]) {
      frequencyMap[num]++;
    } else {
      frequencyMap[num] = 1;
    }

    if (frequencyMap[num] > maxFrequency) {
      maxFrequency = frequencyMap[num];
      mode = [num];
    } else if (
      frequencyMap[num] === maxFrequency &&
      frequencyMap[num] > 1 &&
      !mode.includes(num)
    ) {
      mode.push(num);
    }
  });

  return mode;
};

// Function to calculate the median of an array
const median = (arr) => {
  validateArray(arr);

  arr.sort((a, b) => a - b);
  const middle = Math.floor(arr.length / 2);

  if (arr.length % 2 === 0) {
    return (arr[middle - 1] + arr[middle]) / 2;
  } else {
    return arr[middle];
  }
};

// Function to calculate the range of an array
const range = (arr) => Math.max(...arr) - Math.min(...arr);

// Function to calculate the variance of an array
const variance = (arr) => {
  validateArray(arr);

  const mean = avg(arr);
  const squaredDifferences = arr.map((num) => Math.pow(num - mean, 2));
  const sumOfSquaredDifferences = squaredDifferences.reduce(
    (acc, curr) => acc + curr,
    0
  );
  return sumOfSquaredDifferences / arr.length;
};

// Function to calculate the standard deviation of an array
const standardDeviation = (arr) => {
  validateArray(arr);
  return Math.sqrt(variance(arr));
};

module.exports = {
  sum,
  avg,
  mode,
  median,
  range,
  variance,
  standardDeviation,
};
