import { Link } from 'react-router-dom';
export function EmptyState({ title, message, action='Browse pizzas', to='/' }) { return <section className="empty"><div>🍕</div><h2>{title}</h2><p>{message}</p><Link className="button" to={to}>{action}</Link></section>; }
