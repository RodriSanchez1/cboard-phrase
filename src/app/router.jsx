import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from '../pages/ErrorPage';
import RootPage from '../pages/RootPage';
import SettingsPage from '../pages/SettingsPage';
import EditPage from '../pages/EditPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'settings',
        element: <SettingsPage />,
      },
      {
        path: 'edit',
        element: <EditPage />,
      },
    ],
  },
]);
