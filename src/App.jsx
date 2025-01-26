import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'

// Pages
import HomePage from './pages/Home';
import Dashboard from './pages/Dashboard';
import Settings from './pages/Settings';

import Error404 from './pages/Error404';

// Routes
const routes = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <Error404 />
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
    errorElement: <Error404 />
  },
  {
    path: '/settings',
    element: <Settings />,
    errorElement: <Error404 />
  }
]);

const App = () => {
  return(<RouterProvider router={routes} />);
}

export default App
