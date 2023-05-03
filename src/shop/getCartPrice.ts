import { getFinalPrice } from "../price/getFinalPrice";
import { getPricesFromCartItems } from "../price/getPricesFromCartItems";
import { Cart } from "./cart";

export const getCartPrice = (cart: Cart) => {
  return getFinalPrice(getPricesFromCartItems(cart), cart.userId);
};
