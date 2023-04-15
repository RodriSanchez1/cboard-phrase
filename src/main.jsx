import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { store } from './app/store';
import { router } from './app/router';
import SpeechProvider from './features/speech/SpeechProvider';
import ThemeProvider from './features/theme/ThemeProvider';
import './index.css';

if (process.env.NODE_ENV === 'development') {
  const { worker } = await import('./mocks/browser');
  worker.start();
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <SpeechProvider>
          <RouterProvider router={router} />
        </SpeechProvider>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
