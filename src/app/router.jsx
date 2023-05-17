import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from '../pages/ErrorPage';
import RootPage from '../pages/RootPage';
import SettingsPage from '../pages/SettingsPage';
import EditPage from '../pages/EditPage';
import SpeechSettings from '../features/speech/SpeechSettings';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'edit',
        element: <EditPage />,
      },
    ],
  },
  {
    path: '/settings',
    element: <SettingsPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'speech',
        element: <SpeechSettings />,
      },
      {
        path: 'language',
        element: <EditPage />,
      },
    ],
  },
]);
