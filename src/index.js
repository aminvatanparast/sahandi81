import { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

 import App from './App.js';
  import './assets/styles/global.css';
import Loading from "./components/Loading/index.jsx";
import {persistor, store} from "./store";


const Root = () => {

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
            <Suspense fallback={() => <Loading />}>
              <Router basename={process.env.PUBLIC_URL}>
                  <App />
              </Router>
            </Suspense>
      </PersistGate>
    </Provider>
  );
};

const root = createRoot(document.getElementById('root'));
root.render(<Root />);
