import React from 'react';
import { withRouter } from 'next/router';
import { NoSsr, Typography, Grid, Container } from '@material-ui/core';
import FormContainer from '../../core/FormContainer';
import { withSnackbar } from 'notistack';
import { TextField } from '@material-ui/core';
import { InputBase } from '@material-ui/core';
import BadgeCard from './badgeCard';

import BadgeService from './badge.service';
///start:slot:dependencies<<<
import { Button, Icon } from '@material-ui/core';
import Router from 'next/router';
///end:slot:dependencies<<<

const service = new BadgeService();
const defaultConfig = {
  service
  ///start:slot:config<<<///end:slot:config<<<
};

function navigateTo(target) {
  Router.push(target);
}

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
    ///start:slot:afterSave<<<

    this.navigateTo('/badges');
    ///end:slot:afterSave<<<
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
        <Grid className='' container direction='row' justifyContent='center' alignItems='center' item xs={12}>
          <Container maxWidth='lg'>
            <Grid container spacing={3} style={{ paddingTop: '10%', paddingLeft: '15%', paddingRight: '15%' }}>
              <Grid item xs={6} style={{ marginTop: 20 }}>
                <BadgeCard badge={baseEntity} CheckIn={this.formatDate(baseEntity.CheckIn)} />
              </Grid>
              <Grid item xs={6}>
                <Typography variant='h5' style={{ textAlign: 'center' }}>
                  Visitior Badge Form
                </Typography>
                <TextField
                  type='text'
                  label='Barcode'
                  value={baseEntity.Value || ''}
                  onChange={event => this.handleInputChange(event, 'Value')}
                  style={{ textAlign: 'left' }}
                  margin='dense'
                  disabled={this.isDisabled}
                  fullWidth
                  variant='outlined'
                />
                <TextField
                  type='text'
                  label='FirstName'
                  value={baseEntity.FirstName || ''}
                  onChange={event => this.handleInputChange(event, 'FirstName')}
                  style={{ textAlign: 'left' }}
                  margin='dense'
                  disabled={this.isDisabled}
                  fullWidth
                  variant='outlined'
                />
                <TextField
                  type='text'
                  label='LastName'
                  value={baseEntity.LastName || ''}
                  onChange={event => this.handleInputChange(event, 'LastName')}
                  style={{ textAlign: 'left' }}
                  margin='dense'
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
                  margin='dense'
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
                  margin='dense'
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
                  margin='dense'
                  disabled={this.isDisabled}
                  fullWidth
                  variant='outlined'
                />
                <Grid item />
                <Button
                  variant='contained'
                  color='default'
                  className='btn-primary'
                  onClick={event => {
                    this.save(event, {});
                  }}
                  fullWidth
                  style={{ marginTop: 10 }}
                >
                  Save
                </Button>
              </Grid>
            </Grid>
          </Container>
        </Grid>
      </NoSsr>
    );
  }
}

export default withSnackbar(withRouter(BadgeForm));
