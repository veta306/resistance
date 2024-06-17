import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/home';
import RatingPage from './pages/rating';
import PersonPage from './pages/person';
import './index.css';
import 'normalize.css';
import LatestPage from './pages/latest';
import DetailsPage from './pages/details';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/rating',
    element: <RatingPage />,
  },
  {
    path: '/person',
    element: <PersonPage />,
  },
  {
    path: '/shames',
    element: <LatestPage />,
  },
  {
    path: '/details',
    element: <DetailsPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
