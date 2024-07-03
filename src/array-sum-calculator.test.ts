import ArraySumCalculator from "@/array-sum-calculator";

describe("ArraySumCalculator test suite", () => {
  it("should return the same instance on multiple access", () => {
    const instanceA = ArraySumCalculator.getInstance();
    const instanceB = ArraySumCalculator.getInstance();
    expect(instanceA).toBe(instanceB);
  });

  it("should return the sum of all numbers on given array", () => {
    const instance = ArraySumCalculator.getInstance();
    expect(instance.calculateSum([1, 2, 3])).toBe(6);
    expect(instance.calculateSum([1, 2, 3].map(n => n * 2))).toBe(12);
  });
});
