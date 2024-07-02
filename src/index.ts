import ArraySumCalculator from "./array-sum-calculator";

const instance = ArraySumCalculator.getInstance();

console.log(instance.calculateSum([1, 2, 3, 4, 5]));
// 15

console.log(instance.calculateSum([1, 2, 3, 4, 5].map(n => n * 2)));
// 30
