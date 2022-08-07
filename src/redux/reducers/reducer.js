const INIT_STATE = {
  cart: [],
};

export const cartreducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "ADD_CART":
      const ItemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );

      if (ItemIndex >= 0) {
        if (state.cart[ItemIndex].userqnty < state.cart[ItemIndex].quantity) {
          state.cart[ItemIndex].userqnty += 1;
        } else {
          alert("Sorry Out of stock!!!😐");
        }
      } else {
        const temp = { ...action.payload, userqnty: 1 };
        return {
          ...state,
          cart: [...state.cart, temp],
        };
      }

    case "RMV_CART":
      const data = state.cart.filter((el) => el.id !== action.payload);

      return {
        ...state,
        cart: data,
      };

    case "RMV_ONE":
      const ItemIndex_dec = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );

      if (state.cart[ItemIndex_dec].userqnty >= 1) {
        const dltitems = (state.cart[ItemIndex_dec].userqnty -= 1);
        console.log([...state.cart, dltitems]);

        return {
          ...state,
          cart: [...state.cart],
        };
      } else if (state.cart[ItemIndex_dec].userqnty === 1) {
        const data = state.cart.filter((el) => el.id !== action.payload.id);

        return {
          ...state,
          cart: data,
        };
      }

    case "CLEAR_CART":
      return {
        ...state,
        cart: [],
      };

    default:
      return state;
  }
};
