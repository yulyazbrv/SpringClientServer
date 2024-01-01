import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { QueryClient, QueryClientProvider } from "react-query";
import App from './App';
import './index.css';
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: Infinity } },
});
  
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <App />
      </Provider>
    </QueryClientProvider>
  </BrowserRouter>,
);
// ReactDOM.render(<App />, document.getElementById('root'))??
