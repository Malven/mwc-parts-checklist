import { ConfigProvider } from 'antd';
import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { appTheme } from './config/theme';
import './i18n/config';
import './index.css';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Root element not found');
}

createRoot(rootElement).render(
  <StrictMode>
    <ConfigProvider theme={appTheme}>
      <Suspense
        fallback={
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '100vh',
              color: '#e5e7eb',
            }}
          >
            Loading...
          </div>
        }
      >
        <App />
      </Suspense>
    </ConfigProvider>
  </StrictMode>
);
