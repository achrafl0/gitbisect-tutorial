import { isAdmin } from ".";

// test("1", () => {
//   expect(isAdmin()).toEqual(true);
// });

test("1", () => {
  expect(isAdmin(1)).toEqual(true);
});

test("2", () => {
  expect(isAdmin(2)).toEqual(true);
});

test("3", () => {
  expect(isAdmin(3)).toEqual(false);
});
