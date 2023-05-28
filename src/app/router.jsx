import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from '../pages/ErrorPage';
import RootPage from '../pages/RootPage';
import SettingsPage from '../pages/SettingsPage';
import EditPage from '../pages/EditPage';
import SpeechSettings from '../features/speech/SpeechSettings';
import LanguageSettings from '../features/language/LanguageSettings';
import LoginPage from '../pages/LoginPage';
import User from '../features/user/User';

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
        element: <LanguageSettings />,
      },
      {
        path: 'user',
        element: <User />,
      },
    ],
  },
  {
    path: '/login',
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  },
]);
