import { Outlet } from 'react-router-dom';
import AppBar from '../components/AppBar/AppBar';
import AppHeader from '../features/appHeader/AppHeader';
import CategoriesBar from '../features/category/CategoriesBar/CategoriesBar';
import AppGrid from '../features/grid/AppGrid';

export default function RootPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <AppHeader />
      <CategoriesBar />
      <AppGrid />
      <Outlet />
    </div>
  );
}
