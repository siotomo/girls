import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import Index from '../pages/Index';
import ErrorBoundary from '../components/shared/ErrorBoundary';
import '../../stylesheets/application.scss';

const element = document.getElementById('root') as HTMLDivElement;
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
