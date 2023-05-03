import { Cart } from "../shop/cart";

const itemPrices: Record<number, number> = {
  1: 10,
  2: 20,
  3: 40,
  4: 40,
};

export const getItemPrice = (itemId: number) => {
  return Object.keys(itemPrices).includes(itemId.toString()) ? itemPrices[itemId] : 0;
};

export const getPricesFromCartItems = (cart: Cart) => {
  return cart.items.map(getItemPrice);
};
