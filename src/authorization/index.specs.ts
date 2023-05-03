import { isUserAdmin } from ".";

// test("1", () => {
//   expect(isAdmin()).toEqual(true);
// });

test("1", () => {
  expect(isUserAdmin(1)).toEqual(true);
});

test("2", () => {
  expect(isUserAdmin(2)).toEqual(true);
});

test("3", () => {
  expect(isUserAdmin(3)).toEqual(false);
});

test("10 IMPORTANT : USER 32 IS A CUSTOMER", () => {
  expect(isUserAdmin(32)).toEqual(false);
});