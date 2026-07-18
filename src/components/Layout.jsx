import { Outlet } from 'react-router-dom';
import { Header } from './Header';
export function Layout() { return <><Header /><main><Outlet /></main><footer>© {new Date().getFullYear()} Slice Express · Made fresh, delivered happy.</footer></>; }
