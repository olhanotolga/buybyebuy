export function calculateSubtotal(items) {
  return items.reduce((acc, cur) => acc + cur.price * cur.qty, 0);
}

export function calculateQuantity(items) {
  return items.reduce((acc, cur) => acc + cur.qty, 0);
}

export function calculateShipping(subtotal) {
  switch (true) {
      case subtotal === 0: {
        return 0;
      }
      case subtotal >= 50: {
        return 0;
      }
      default: {
        return 20;
      }
    }
}