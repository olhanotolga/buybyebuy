export const CART_ACTION_TYPES = {
  ITEM_ADDED: 'item-added',
  ITEM_INCREMENTED: 'item-incremented',
  ITEM_REMOVED: 'item-removed',
  ITEM_DECREMENTED: 'item-decremented',
  CART_RESET: 'cart-reset',
};

export function cartReducer(state, action) {
  // duplicated to keep reducer a pure function
  const CART_ACTION_TYPES = {
    ITEM_ADDED: 'item-added',
    ITEM_INCREMENTED: 'item-incremented',
    ITEM_REMOVED: 'item-removed',
    ITEM_DECREMENTED: 'item-decremented',
    CART_RESET: 'cart-reset',
  };

  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.ITEM_ADDED: {
      const newItem = payload;
      console.log('add:', { newItem });
      return [...state, newItem];
    }

    case CART_ACTION_TYPES.ITEM_INCREMENTED: {
      const itemId = payload;
      console.log('increment:', { itemId });

      return [
        ...state.map((item) => {
          return {
            ...item,
            qty: item.id === itemId ? item.qty + 1 : item.qty,
          };
        }),
      ];
    }

    case CART_ACTION_TYPES.ITEM_REMOVED: {
      const itemId = payload;
      console.log('remove:', { itemId });
      return [...state.filter((item) => item.id !== itemId)];
    }

    case CART_ACTION_TYPES.ITEM_DECREMENTED: {
      const itemId = payload;
      console.log('decrement:', { itemId });
      const itemToDecrement = state.find((item) => item.id === itemId);
      const newQty = itemToDecrement.qty - 1;
      if (itemToDecrement) {
        return newQty <= 0
          ? [...state.filter((item) => item.id !== itemId)]
          : [
              ...state.map((item) => ({
                ...item,
                qty: item.id === itemId ? newQty : item.qty,
              })),
            ];
      }
    }

    case CART_ACTION_TYPES.CART_RESET: {
      return [];
    }

    default: {
      throw new Error('Unrecognized cart action!');
    }
  }
}
