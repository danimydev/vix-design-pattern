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
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i]!;
    }
    return sum;
  }
}

export default ArraySumCalculator;
