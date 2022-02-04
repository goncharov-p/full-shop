export const reducer = (state, action) => {
  switch (action.type) {

    case "setAll": return {
      products: action.payload.products,
      user: action.payload.user,
      basketCount: action.payload.basketCount
    };

    case "setProducts": return { ...state, products: action.payload };

    case "setBasket": return { ...state, basketCount: action.payload };

    default: return state;
  }
}