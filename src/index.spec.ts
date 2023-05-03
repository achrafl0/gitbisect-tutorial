import { isAdmin } from ".";

test("1", () => {
  expect(isAdmin()).toEqual(true);
});
