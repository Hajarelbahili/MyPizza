import { Link } from 'react-router-dom';
import { formatPrice } from '../utils/formatters';
import { useCart } from '../hooks/useCart';
export function PizzaCard({ pizza }) { const {addToCart} = useCart(); return <article className="pizza-card"><Link to={`/pizza/${pizza.id}`}><img src={pizza.image} alt={pizza.name} /></Link><div className="card-body"><div className="card-top">{pizza.badge && <span className="badge">{pizza.badge}</span>}<span className="category">{pizza.category}</span></div><Link to={`/pizza/${pizza.id}`}><h3>{pizza.name}</h3></Link><p>{pizza.description}</p><div className="card-footer"><strong>{formatPrice(pizza.price)}</strong><button onClick={() => addToCart(pizza)}>Add +</button></div></div></article>; }
