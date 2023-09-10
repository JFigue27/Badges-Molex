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
  service,
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

  AFTER_LOAD = (baseList) => {
    console.log('AFTER_LOAD');
    ///start:slot:afterLoad<<<///end:slot:afterLoad<<<
  };

  AFTER_CREATE = (instance) => {
    console.log('AFTER_CREATE', instance);
    this.openDialog(instance);

    ///start:slot:afterCreate<<<///end:slot:afterCreate<<<
  };

  AFTER_CREATE_AND_CHECKOUT = (entity) => {
    console.log('AFTER_CREATE_AND_CHECKOUT', entity);
    ///start:slot:afterCreateCheckout<<<///end:slot:afterCreateCheckout<<<
  };

  AFTER_REMOVE = () => {
    console.log('AFTER_REMOVE');
    ///start:slot:afterRemove<<<///end:slot:afterRemove<<<
  };

  ON_OPEN_ITEM = (item) => {
    console.log('ON_OPEN_ITEM', item);
    this.openDialog(item);

    ///start:slot:onOpenItem<<<///end:slot:onOpenItem<<<
  };

  openDialogCheckOut = (item) => {
    this.setState({
      checkout: item,
    });
  };

  closeDialogCheckOut = (feedback) => {
    if (feedback == 'ok') {
      this.refresh();
    }
    this.setState({
      checkout: false,
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
        {/* <Typography
          variant="h4"
          className="app-header-primary"
          gutterBottom
          style={{ textAlign: 'center', marginTop: 50 }}
        >
          WELCOME TO THE COMPANY
        </Typography> */}
        <img
          src="/static/images/logo-bedel.png"
          alt="Logo Bedel"
          style={{ width: 240, margin: 50 }}
        />
        <Button
          variant="contained"
          size="large"
          className="app-btn-1"
          onClick={() => navigateTo('/badge-new')}
        >
          <Icon style={{ paddingRight: 35 }}>person_add</Icon> New Visitor Badge
        </Button>
        <img
          src="/static/images/id-badge-solid.svg"
          alt="Id-Badge"
          style={{ width: 150, margin: 40 }}
        />
        <Button
          variant="contained"
          size="large"
          color="default"
          onClick={(event) => {
            this.openDialogCheckOut(event, {});
          }}
          className="app-btn-2"
        >
          <Icon>how_to_reg</Icon> Check Out
        </Button>
        {/* <Button variant='outlined' onClick={() => navigateTo('/badges')} style={{ marginTop: '3%' }}>
          Visitor Badge History
        </Button> */}
        <Grid
          container
          direction="row"
          style={{ textAlign: 'center', marginTop: 50 }}
          xs={12}
        >
          <Grid item xs={6}>
            <img src="/static/images/oea.png" alt="oea" className="oeaImg" />
          </Grid>
          <Grid item xs={6}>
            <img
              src="/static/images/ctpat.png"
              alt="ctpat"
              className="ctparImg"
            />
          </Grid>
        </Grid>
        {!!this.state.checkout && (
          <Dialog
            open={!!this.state.checkout}
            onClose={this.closeDialogCheckOut}
            draggable
            title="CheckOut"
          >
            {(dialog) => {
              return (
                !isLoading && (
                  <CheckOut dialog={dialog} data={this.state.checkout} />
                )
              );
            }}
          </Dialog>
        )}
        <AppBar style={{ top: 'auto', bottom: 0, background: '#333333' }}>
          <Toolbar>
            <Grid container direction="column" alignItems="center">
              <Typography> © 2023 | Visitor Badge System by Bedel </Typography>
            </Grid>
          </Toolbar>
        </AppBar>
      </NoSsr>
    );
  }
}

export default withSnackbar(withRouter(BadgesList));
