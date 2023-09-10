import React from 'react';
import { Route, Link, Routes } from 'react-router-dom';
import App from '../components/app';
import Price from '../components/price';
const RouteApp = () => {
  return (
    <Routes>
      {' '}
      <Route path="/" Component={App} />
      <Route path="/price" Component={Price} />
    </Routes>
  );
};

export default RouteApp;
