import { Link, useParams } from 'react-router-dom';
import { getPizza } from '../services/pizzaService';
import { useCart } from '../hooks/useCart';
import { formatPrice } from '../utils/formatters';
import { NotFound } from './NotFound';
export function PizzaDetails() { const {pizzaId} = useParams(); const pizza = getPizza(pizzaId); const {addToCart} = useCart(); if (!pizza) return <NotFound />; return <section className="details"><Link className="back" to="/">← Back to menu</Link><div className="details-grid"><img src={pizza.image} alt={pizza.name} /><div><span className="category">{pizza.category}</span><h1>{pizza.name}</h1><p className="lead">{pizza.description}</p><h2>{formatPrice(pizza.price)}</h2><h3>What’s on it</h3><ul className="ingredients">{pizza.ingredients.map(item => <li key={item}>✓ {item}</li>)}</ul><button className="button large" onClick={() => addToCart(pizza)}>Add to cart · {formatPrice(pizza.price)}</button></div></div></section>; }
