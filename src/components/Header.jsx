import { NavLink, Link } from 'react-router-dom';
import { useCart } from '../hooks/useCart';
export function Header() { const {itemCount} = useCart(); return <header><Link to="/" className="brand"><span>🍕</span> Slice Express</Link><nav><NavLink to="/">Menu</NavLink><NavLink to="/orders">Orders</NavLink><NavLink to="/cart" className="cart-link">Cart <b>{itemCount}</b></NavLink></nav></header>; }
