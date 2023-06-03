import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { store, persistor } from './app/store';
import { router } from './app/router';
import SpeechProvider from './features/speech/SpeechProvider';
import ThemeProvider from './features/theme/ThemeProvider';
import LanguageProvider from './features/language/LanguageProvider';
import AnalyticsProvider from './features/analytics/AnalyticsProvider';
import { PersistGate } from 'redux-persist/integration/react';
import './index.css';

import ReactGA from 'react-ga4';

ReactGA.initialize('G-04C2G47Y2W', {
  gaOptions: {
    debug_mode: true,
  },
  gtagOptions: {
    debug_mode: true,
  },
});

if (process.env.NODE_ENV === 'development') {
  // const { worker } = await import('./mocks/browser');
  // worker.start();
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider>
          <SpeechProvider>
            <LanguageProvider>
              <AnalyticsProvider>
                <RouterProvider router={router} />
              </AnalyticsProvider>
            </LanguageProvider>
          </SpeechProvider>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
