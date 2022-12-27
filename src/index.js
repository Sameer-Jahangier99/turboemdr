import React from 'react';
import ReactDOM from 'react-dom/client';

// styles
import 'styles/css/index.css';
import 'styles/css/style.css';
import 'styles/css/responsive.css';
import 'styles/css/magnific-popup.css';
import 'styles/css/default.css';
import 'styles/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

// components
import App from 'app/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

