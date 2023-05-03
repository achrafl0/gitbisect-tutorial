import { getFinalPrice } from "./getFinalPrice";

test("1", () => {
  expect(getFinalPrice([1, 2, 3], 120)).toEqual(6);
});

test("2", () => {
  expect(getFinalPrice([1, 2, 3, 4], 120)).toEqual(10);
});
