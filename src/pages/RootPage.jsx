import { Outlet } from 'react-router-dom';
import AppBar from '../components/AppBar/AppBar';
import CategoriesBar from '../components/CategoriesBar/CategoriesBar';
import OutputSection from '../components/OutputSection/OutputSection';
import GridSection from '../components/GridSection/GridSection';

export default function RootPage() {
  return (
    <>
      <OutputSection />
      <CategoriesBar />
      <GridSection />
      <Outlet />
    </>
  );
}
