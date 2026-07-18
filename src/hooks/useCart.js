import { useStore } from './useStore';
export function useCart() {
  const { cart, dispatch } = useStore();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  return { cart, total, itemCount, addToCart:(pizza) => dispatch({type:'ADD_TO_CART', payload:pizza}), setQuantity:(id, quantity) => dispatch({type:'SET_QUANTITY', payload:{id, quantity}}), removeFromCart:(id) => dispatch({type:'REMOVE_FROM_CART', payload:id}) };
}
