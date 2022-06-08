import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ApolloProvider } from '@apollo/client';
import { CLIENT } from './utils/constants';
// import reportWebVitals from './reportWebVitals';

// global css
import './assets/styles/app.css';
import './assets/styles/animate.css';
import './assets/styles/colors.css';
import './assets/styles/tailwind.css';



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ApolloProvider client={CLIENT}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);

// disabled web-vitals reporting in main branch, see dev branch
// reportWebVitals(console.log);
