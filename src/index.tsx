import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "app/providers/ThemeProvider";
import App from "app/App";
import 'app/styles/index.scss';

import "shared/config/i18n/i18n";
import { ErrorBoundary } from "app/providers/ErrorBoundary";
import { StorePorvider } from "app/providers/StoreProvider";

render(
  <BrowserRouter>
    <StorePorvider>
      <ThemeProvider>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </ThemeProvider>
    </StorePorvider>
  </BrowserRouter>,
  document.getElementById("root")
);