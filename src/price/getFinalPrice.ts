import { applyDiscount } from "../discount/applyDiscount";

export const getFinalPrice = (prices: number[], userId: number) => {
  return applyDiscount(
    prices.reduce((acc, price) => acc + price, 0),
    userId
  );
};
