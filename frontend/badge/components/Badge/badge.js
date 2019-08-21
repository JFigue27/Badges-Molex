import React from 'react';
import { withRouter } from 'next/router';
import { NoSsr, Typography, Grid } from '@material-ui/core';
import FormContainer from '../../core/FormContainer';
import { withSnackbar } from 'notistack';
import { TextField } from '@material-ui/core';
import { InputBase } from '@material-ui/core';
import { KeyboardDateTimePicker } from '@material-ui/pickers';

import BadgeService from './badge.service';
///start:slot:dependencies<<<
import BadgeCard from './badgeCard';
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
    this.load(this.props.data.Id);

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

  ///start:slot:js<<<///end:slot:js<<<

  render() {
    const { dialog } = this.props;
    if (dialog) dialog.onOk = this.onDialogOk;

    const { isLoading, baseEntity } = this.state;

    return (
      <NoSsr>
        <Grid className='' container direction='row' alignItems='center' item xs={12} style={{ padding: 20 }}>
          <Grid item xs={6}>
            <BadgeCard badge={baseEntity} />
          </Grid>
          <Grid item xs={6}>
            <Typography variant='h5' style={{ textAlign: 'center' }}>
              Badge Form
            </Typography>
            <TextField
              type='text'
              label='Barcode'
              value={baseEntity.Value || ''}
              onChange={event => this.handleInputChange(event, 'Value')}
              style={{ textAlign: 'left' }}
              margin='normal'
              disabled={this.isDisabled}
              fullWidth
              variant='outlined'
            />
            <TextField
              type='text'
              label='First Name'
              value={baseEntity.FirstName || ''}
              onChange={event => this.handleInputChange(event, 'FirstName')}
              style={{ textAlign: 'left' }}
              margin='normal'
              disabled={this.isDisabled}
              fullWidth
              variant='outlined'
            />
            <TextField
              type='text'
              label='Last  Name'
              value={baseEntity.LastName || ''}
              onChange={event => this.handleInputChange(event, 'LastName')}
              style={{ textAlign: 'left' }}
              margin='normal'
              disabled={this.isDisabled}
              fullWidth
              variant='outlined'
            />
            <TextField
              type='text'
              label='Company'
              value={baseEntity.Company || ''}
              onChange={event => this.handleInputChange(event, 'Company')}
              style={{ textAlign: 'left' }}
              margin='normal'
              disabled={this.isDisabled}
              fullWidth
              variant='outlined'
            />
            <TextField
              type='text'
              label='Citizenship'
              value={baseEntity.Citizenship || ''}
              onChange={event => this.handleInputChange(event, 'Citizenship')}
              style={{ textAlign: 'left' }}
              margin='normal'
              disabled={this.isDisabled}
              fullWidth
              variant='outlined'
            />
            <TextField
              type='text'
              label='Visiting'
              value={baseEntity.Visiting || ''}
              onChange={event => this.handleInputChange(event, 'Visiting')}
              style={{ textAlign: 'left' }}
              margin='normal'
              disabled={this.isDisabled}
              fullWidth
              variant='outlined'
            />
            {/* <KeyboardDateTimePicker
              clearable
              label='CheckIn'
              value={baseEntity.ConvertedCheckIn}
              onChange={date => this.handleDateChange(date, 'ConvertedCheckIn')}
              format='MMM/DD/YYYY HH:mm'
            />
            <KeyboardDateTimePicker
              clearable
              label='CheckOut'
              value={baseEntity.ConvertedCheckOut}
              onChange={date => this.handleDateChange(date, 'ConvertedCheckOut')}
              format='MMM/DD/YYYY HH:mm'
            /> */}
          </Grid>
        </Grid>
      </NoSsr>
    );
  }
}

export default withSnackbar(withRouter(BadgeForm));
