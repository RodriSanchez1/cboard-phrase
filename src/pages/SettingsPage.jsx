import Settings from '../features/settings/Settings';
import { Outlet } from 'react-router-dom';
export default function SettingsPage() {
  return (
    <>
      <Settings />
      <Outlet />
    </>
  );
}
