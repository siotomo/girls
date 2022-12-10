import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import Index from '../pages/RukaIndex';
import ErrorBoundary from '../components/shared/ErrorBoundary';

const element = document.getElementById('ruka') as HTMLDivElement;
const root = createRoot(element);

if (element) {
  root.render(
    <Router>
      <ErrorBoundary>
        <Index />
      </ErrorBoundary>
    </Router>
  );
}
