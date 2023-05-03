export class Cart {
  items: number[] = [];
  userId: number;

  constructor(userId: number) {
    this.userId = userId;
  }

  addToCart(itemId: number) {
    this.items.push(itemId);
  }
}
