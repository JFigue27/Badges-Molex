import React from 'react';
import { withRouter } from 'next/router';
import { NoSsr, Typography, Grid } from '@material-ui/core';
import FormContainer from '../../core/FormContainer';
import { withSnackbar } from 'notistack';

import BadgeService from './badge.service';

const service = new BadgeService();
const defaultConfig = {
  service
};

class BadgeForm extends FormContainer {
  constructor(props, config) {
    Object.assign(defaultConfig, config);
    super(props, defaultConfig);
  }

  componentDidMount() {
    console.log('Form did mount');
    this.load();
  }

  AFTER_LOAD = entity => {
    console.log('AFTER_LOAD', entity);
  };

  AFTER_CREATE = instance => {
    console.log('AFTER_CREATE', instance);
  };

  AFTER_CREATE_AND_CHECKOUT = entity => {
    console.log('AFTER_CREATE_AND_CHECKOUT', entity);
  };

  AFTER_SAVE = entity => {
    console.log('AFTER_SAVE', entity);
    const { dialog } = this.props;
    if (dialog) dialog.close('ok');
  };

  BEFORE_CHECKIN = () => {
    console.log('BEFORE_CHECKIN');
  };

  render() {
    const { dialog } = this.props;
    if (dialog) dialog.onOk = this.onDialogOk;

    const { isLoading, baseEntity } = this.state;

    return (
      <NoSsr>
        <Grid className='' container direction='column' item xs={12}>
          <value className='Value as Barcode' />
          <firstname className='FirstName' />
          <lastname className='LastName' />
          <company className='Company' />
          <citizenship className='Citizenship' />
          <visiting className='Visiting' />
          <checkin className='CheckIn' />
          <checkout className='CheckOut' />
        </Grid>
      </NoSsr>
    );
  }
}

export default withSnackbar(withRouter(BadgeForm));
