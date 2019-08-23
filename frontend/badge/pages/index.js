import App from '../components/App';
import { Grid, Button, Toolbar, Typography, AppBar } from '@material-ui/core';
import Router from 'next/router';
import Dialog from '../widgets/Dialog';
import { useState } from 'react';
import CheckOut from '../components/Badge/checkOut';
import Home from '../components/Badge/home';

export default () => {
  const [checkout, setCheckOut] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  function navigateTo(target) {
    Router.push(target);
  }

  console.log(checkout);

  return (
    <App>
      <Home />
    </App>
  );
};
