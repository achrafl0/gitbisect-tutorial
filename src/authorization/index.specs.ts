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

test("4", () => {
  expect(isUserAdmin(4)).toEqual(true);
});

test("5", () => {
  expect(isUserAdmin(5)).toEqual(false);
});

test("6", () => {
  expect(isUserAdmin(8)).toEqual(true);
});

test("7", () => {
  expect(isUserAdmin(16)).toEqual(true);
});
