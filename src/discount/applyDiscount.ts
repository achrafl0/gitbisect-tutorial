import { isUserAdmin } from "../authorization";

export const applyDiscount = (price: number, userId: number) => {
  if (isUserAdmin(userId)) {
    return 0;
  }
  return price;
};
