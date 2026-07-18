export const initialState = { cart: [], orders: [] };
export function storeReducer(state, action) {
  switch(action.type) {
    case 'HYDRATE': return action.payload;
    case 'ADD_TO_CART': { const existing = state.cart.find((item) => item.id === action.payload.id); return {...state, cart: existing ? state.cart.map((item) => item.id === existing.id ? {...item, quantity:item.quantity + 1} : item) : [...state.cart, {...action.payload, quantity:1}]}; }
    case 'SET_QUANTITY': return {...state, cart: state.cart.map((item) => item.id === action.payload.id ? {...item, quantity: action.payload.quantity} : item).filter((item) => item.quantity > 0)};
    case 'REMOVE_FROM_CART': return {...state, cart: state.cart.filter((item) => item.id !== action.payload)};
    case 'CREATE_ORDER': return {...state, orders:[action.payload, ...state.orders], cart:[]};
    case 'UPDATE_ORDER_STATUS': return {...state, orders:state.orders.map((order) => order.id === action.payload.id ? {...order, status:action.payload.status} : order)};
    default: return state;
  }
}
