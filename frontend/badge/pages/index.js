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
      {/* <Grid container direction='column' alignItems='center' style={{ paddingTop: 50 }}>
        <h1>WELCOME TO MOLEX JUÁREZ</h1>
        <img src='/static/images/Molex_Red.png' alt='Logo Molex' style={{ width: 220, margin: 50 }} />
        <Button variant='contained' onClick={() => navigateTo('/badge-new')}>
          New Visitor Badge
        </Button>
        <img src='/static/images/id-badge-solid.svg' alt='Id-Badge' style={{ width: 150, marginTop: 40 }} />
        <Button variant='contained' color='default' className='' onClick={() => setCheckOut({ checkout: true })} size='small'>
          Check Out
        </Button>
        <Button variant='outlined' onClick={() => navigateTo('/badges')} style={{ marginTop: 30 }}>
          Visitor Badge History
        </Button>
        <AppBar style={{ top: 'auto', bottom: 0, background: '#333333' }}>
          <Toolbar>
            <Grid container direction='column' alignItems='center'>
              <Typography> © 2019 | Visitor Badge System By Molex Juárez </Typography>
            </Grid>
          </Toolbar>
        </AppBar>
      </Grid>
      <Dialog
        open={!!checkout}
        onClose={() => {
          this.refresh();

          setCheckOut({ checkout: false });
        }}
        draggable
        title='CheckOut'
        okLabel='Save'
      >
        {dialog => {
          return !isLoading && <CheckOut dialog={dialog} data={checkout} />;
        }}
      </Dialog> */}
    </App>
  );
};
