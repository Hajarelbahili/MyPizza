import { Link } from 'react-router-dom';
import { useStore } from '../hooks/useStore';
import { EmptyState } from '../components/EmptyState';
import { formatDate, formatPrice } from '../utils/formatters';
export function OrderHistory() { const {orders} = useStore(); if (!orders.length) return <EmptyState title="No orders yet" message="Your past pizza adventures will appear right here." />; return <section className="container narrow"><p className="eyebrow">PAST & CURRENT</p><h1>Your orders</h1><div className="order-list">{orders.map(order => <article className="order-card" key={order.id}><div><span className="category">{order.status}</span><h2>{order.id}</h2><p>{formatDate(order.createdAt)} · {order.items.reduce((sum,i) => sum+i.quantity,0)} pizza{order.items.length > 1 ? 's' : ''}</p></div><div><strong>{formatPrice(order.total)}</strong><Link to={`/track/${order.id}`}>Track order →</Link></div></article>)}</div></section>; }
