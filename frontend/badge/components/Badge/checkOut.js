import React from 'react';
import { withRouter } from 'next/router';
import { NoSsr, Typography, Grid } from '@material-ui/core';
import FormContainer from '../../core/FormContainer';
import { withSnackbar } from 'notistack';
import { InputBase } from '@material-ui/core';

import BadgeService from './badge.service';
///start:slot:dependencies<<<
import { TextField } from '@material-ui/core';
///end:slot:dependencies<<<

const service = new BadgeService();
const defaultConfig = {
  service
  ///start:slot:config<<<///end:slot:config<<<
};

class BadgeForm extends FormContainer {
  constructor(props, config) {
    Object.assign(defaultConfig, config);
    super(props, defaultConfig);
    ///start:slot:ctor<<<///end:slot:ctor<<<
  }

  componentDidMount() {
    console.log('Form did mount');
    this.load();

    ///start:slot:didMount<<<///end:slot:didMount<<<
  }

  AFTER_LOAD = entity => {
    console.log('AFTER_LOAD', entity);
    ///start:slot:afterLoad<<<///end:slot:afterLoad<<<
  };

  AFTER_CREATE = instance => {
    console.log('AFTER_CREATE', instance);

    ///start:slot:afterCreate<<<///end:slot:afterCreate<<<
  };

  AFTER_CREATE_AND_CHECKOUT = entity => {
    console.log('AFTER_CREATE_AND_CHECKOUT', entity);
    ///start:slot:afterCreateCheckout<<<///end:slot:afterCreateCheckout<<<
  };

  AFTER_SAVE = entity => {
    console.log('AFTER_SAVE', entity);
    const { dialog } = this.props;
    if (dialog) dialog.close('ok');
    ///start:slot:afterSave<<<///end:slot:afterSave<<<
  };

  BEFORE_CHECKIN = () => {
    console.log('BEFORE_CHECKIN');
    ///start:slot:beforeCheckin<<<///end:slot:beforeCheckin<<<
  };

  ///start:slot:js<<<

  onDialogOk = async event => {
    event.preventDefault();
    const { dialog } = this.props;
    await this.service.Post('CheckOut/' + this.state.baseEntity.Value).then(() => {
      this.success('Thanks for Visiting !');
      dialog.close();
    });
  };
  ///end:slot:js<<<

  render() {
    const { dialog } = this.props;
    if (dialog) dialog.onOk = this.onDialogOk;

    const { isLoading, baseEntity } = this.state;

    return (
      <NoSsr>
        <form onSubmit={dialog.onOk}>
          <TextField
            type='text'
            label='Barcode'
            value={baseEntity.Value || ''}
            onChange={event => this.handleInputChange(event, 'Value')}
            style={{ textAlign: 'left' }}
            margin='dense'
            disabled={this.isDisabled}
            fullWidth
            autoFocus
          />
        </form>
      </NoSsr>
    );
  }
}

export default withSnackbar(withRouter(BadgeForm));
