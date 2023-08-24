# cal-sum-avg-mode-medium-range-and-more

Now, you can calculate the sum, average, mode, median, range, variance, and standard deviation for the given array of numbers:

# Install

```sh
npm i cal-sum-avg-mode-medium-range-and-more
```

# Usage

## functionName(array);

_array_ - input array.

### Invoke:

```js
const {
  sum,
  avg,
  mode,
  median,
  range,
  variance,
  standardDeviation,
} = require("cal-sum-avg-mode-medium-range-and-more");
```

### Input:

input must be an array of numbers.

```js
const arr = [48, 35, 2, 56, 7, 23, 70, 5, 58, 58, 5, 5];
```

### Sum:

The sum of a set of numbers is the result of adding all the numbers together.

```js
const getSum = sum(arr);
```

Output:

```js
372; // number
```

### Average (Mean):

The average, or mean, of a set of numbers is calculated by adding all the numbers together and then dividing the sum by the total count of numbers.

```js
const getAvg = avg(arr);
```

Output:

```js
31; // number
```

### Mode:

The mode of a set of numbers is the number that appears most frequently in the set. A set of numbers can have one mode, more than one mode (multi-modal), or no mode at all.

```js
const getMode = mode(arr);
```

Output:

```js
[5]; // array
```

### Median:

The median of a set of numbers is the middle value when the numbers are arranged in ascending order. If there is an even number of values, the median is the average of the two middle values.

```js
const getMedian = median(arr);
```

Output:

```js
29; // number
```

### Range:

The range of a set of numbers is the difference between the maximum (largest) and minimum (smallest) values in the set. It measures the spread or dispersion of the data.

```js
const getRange = range(arr);
```

Output:

```js
68; // number
```

### Variance:

Variance is a measure of how much the values in a dataset differ from the mean. It is calculated by taking the average of the squared differences between each value and the mean.

```js
const getVariance = variance(arr);
```

Output:

```js
618.1666666666666; // number
```

### Standard deviation:

The standard deviation is a statistic that quantifies the amount of variation or dispersion in a set of values. It is the square root of the variance and provides a measure of how spread out the values are in relation to the mean.

```js
const getStandardDeviation = standardDeviation(arr);
```

Output:

```js
24.862957721612016; // number
```

# License

ISC © chamaramadhushanka
