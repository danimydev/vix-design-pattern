class ArraySumCalculator {
  private static instance: ArraySumCalculator;

  private constructor() { }

  static getInstance() {
    if (!this.instance) {
      this.instance = new ArraySumCalculator();
    }
    return this.instance;
  }

  calculateSum(numbers: number[]) {
    let sum = 0;
    numbers.forEach(number => {
      sum += number;
    });
    return sum;
  }
}

export default ArraySumCalculator;
