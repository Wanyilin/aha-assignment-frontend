import React from 'react';
import { createRoot } from 'react-dom/client';
import { Container } from 'react-dom';
import { makeServer } from 'mirage/server';

import App from 'App';

if (process.env.NODE_ENV === 'test') {
  makeServer({ environment: 'test' });
}

// eslint-disable-next-line no-undef
const container: Container = document.getElementById('root')!;

createRoot(container).render(<App />);
