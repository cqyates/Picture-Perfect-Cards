import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import App from './App.jsx';
import Home from "./pages/Home/index.jsx"
import Build from './pages/Build/index.jsx'
import Save from "./pages/Save/index.jsx"
import Send from "./pages/Send/index.jsx"
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <h1 className='display-2'>Wrong page!</h1>,
    children: [
      {
        index: true,
        element: <Home />
      }, {
        path: '/save',
        element: <Save />
      }, 
      {
        path: '/build',
        element: <Build />
      },
      {
        path: '/send',
        element: <Send />
      }
    ]
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);
