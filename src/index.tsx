import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@/app/providers/ThemeProvider';
import App from '@/app/App';
import '@/app/styles/index.scss';

import '@/shared/config/i18n/i18n';
import { ErrorBoundary } from '@/app/providers/ErrorBoundary';
import { StorePorvider } from '@/app/providers/StoreProvider';

const container = document.getElementById('root');

if (!container) throw new Error('ID root is not found');

const root = createRoot(container);

root.render(
  <BrowserRouter>
    <StorePorvider>
      <ThemeProvider>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </ThemeProvider>
    </StorePorvider>
  </BrowserRouter>,
);
