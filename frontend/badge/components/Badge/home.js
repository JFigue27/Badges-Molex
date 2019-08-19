import React from 'react';
import { withRouter } from 'next/router';
import { withSnackbar } from 'notistack';
import { NoSsr, Typography, Grid, AppBar, Toolbar } from '@material-ui/core';
import SearchBox from '../../widgets/Searchbox';
import Pagination from 'react-js-pagination';
import ListContainer from '../../core/ListContainer';
import { Button } from '@material-ui/core';
import { Icon } from '@material-ui/core';
import Dialog from '../../widgets/Dialog';
import CheckOut from './checkOut.js';

import BadgeService from './badge.service';
///start:slot:dependencies<<<
import Router from 'next/router';
///end:slot:dependencies<<<

const service = new BadgeService();
const defaultConfig = {
  service
  ///start:slot:config<<<///end:slot:config<<<
};

class BadgesList extends ListContainer {
  constructor(props, config) {
    Object.assign(defaultConfig, config);
    super(props, defaultConfig);
    ///start:slot:ctor<<<///end:slot:ctor<<<
  }

  componentDidMount() {
    console.log('List did mount');
    this.load();

    ///start:slot:didMount<<<///end:slot:didMount<<<
  }

  AFTER_LOAD = baseList => {
    console.log('AFTER_LOAD');
    ///start:slot:afterLoad<<<///end:slot:afterLoad<<<
  };

  AFTER_CREATE = instance => {
    console.log('AFTER_CREATE', instance);
    this.openDialog(instance);

    ///start:slot:afterCreate<<<///end:slot:afterCreate<<<
  };

  AFTER_CREATE_AND_CHECKOUT = entity => {
    console.log('AFTER_CREATE_AND_CHECKOUT', entity);
    ///start:slot:afterCreateCheckout<<<///end:slot:afterCreateCheckout<<<
  };

  AFTER_REMOVE = () => {
    console.log('AFTER_REMOVE');
    ///start:slot:afterRemove<<<///end:slot:afterRemove<<<
  };

  ON_OPEN_ITEM = item => {
    console.log('ON_OPEN_ITEM', item);
    this.openDialog(item);

    ///start:slot:onOpenItem<<<///end:slot:onOpenItem<<<
  };

  openDialogCheckOut = item => {
    this.setState({
      checkout: item
    });
  };

  closeDialogCheckOut = feedback => {
    if (feedback == 'ok') {
      this.refresh();
    }
    this.setState({
      checkout: false
    });
  };
  ///start:slot:js<<<///end:slot:js<<<

  render() {
    const { isLoading, baseEntity, baseList, filterOptions } = this.state;

    function navigateTo(target) {
      Router.push(target);
    }

    return (
      <NoSsr>
        <Typography variant='h3' className='app-header-primary' gutterBottom>
          WELCOME TO MOLEX JUÁREZ
        </Typography>
        <img src='/static/images/Molex_Red.png' alt='Logo Molex' style={{ width: 220, margin: 30 }} />
        <Button variant='contained' onClick={() => navigateTo('/badge-new')}>
          New Visitor Badge
        </Button>
        <img src='/static/images/id-badge-solid.svg' alt='Id-Badge' style={{ width: 150, marginTop: 30 }} />
        <Button
          variant='contained'
          color='default'
          className=''
          onClick={event => {
            this.openDialogCheckOut(event, {});
          }}
          size='small'
        >
          <Icon>edit</Icon>Open
        </Button>
        <Button variant='outlined' onClick={() => navigateTo('/badges')} style={{ marginTop: 30 }}>
          Visitor Badge History
        </Button>
        <Dialog open={!!this.state.checkout} onClose={this.closeDialogCheckOut} draggable title='CheckOut' okLabel='Save'>
          {dialog => {
            return !isLoading && <CheckOut dialog={dialog} data={this.state.checkout} />;
          }}
        </Dialog>
        <AppBar style={{ top: 'auto', bottom: 0, background: '#333333' }}>
          <Toolbar>
            <Grid container direction='column' alignItems='center'>
              <Typography> © 2019 | Visitor Badge System By Molex Juárez </Typography>
            </Grid>
          </Toolbar>
        </AppBar>
      </NoSsr>
    );
  }
}

export default withSnackbar(withRouter(BadgesList));
