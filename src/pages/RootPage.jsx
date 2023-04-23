import { Outlet } from 'react-router-dom';
import AppBar from '../components/AppBar/AppBar';
import AppHeader from '../features/appHeader/AppHeader';
import CategoriesBar from '../features/categories/CategoriesBar/CategoriesBar';
import AppGrid from '../features/grid/AppGrid';

export default function RootPage() {
  return (
    <>
      <AppHeader />
      <CategoriesBar />
      <AppGrid />
      <Outlet />
    </>
  );
}
