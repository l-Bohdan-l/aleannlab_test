import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import GlobalStyle from './styles/Global.styled';
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";
// import {Home} from './components/Home/Home'

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home/>,
//   },
// ]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
    {/* <RouterProvider router={router} /> */}
  </React.StrictMode>
);


