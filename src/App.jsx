import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { PizzaDetails } from './pages/PizzaDetails';
import { Cart } from './pages/Cart';
import { Checkout } from './pages/Checkout';
import { OrderTracking } from './pages/OrderTracking';
import { OrderHistory } from './pages/OrderHistory';
import { NotFound } from './pages/NotFound';

export function App() { return <Routes><Route element={<Layout />}><Route path="/" element={<Home />} /><Route path="/pizza/:pizzaId" element={<PizzaDetails />} /><Route path="/cart" element={<Cart />} /><Route path="/checkout" element={<Checkout />} /><Route path="/orders" element={<OrderHistory />} /><Route path="/track/:orderId" element={<OrderTracking />} /><Route path="*" element={<NotFound />} /></Route></Routes>; }
