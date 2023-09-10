import React from 'react';
import { withRouter } from 'next/router';
import router from 'next/router';
import { NoSsr, Typography, Grid, Card } from '@material-ui/core';
import FormContainer from '../../core/FormContainer';
import { withSnackbar } from 'notistack';

import BadgeService from './badge.service';
import PrintBadge from './printBadge';
///start:slot:dependencies<<<
// import QRCode from 'react-qr-code';
import QRCode from 'qrcode.react';

///end:slot:dependencies<<<

const service = new BadgeService();
const defaultConfig = {
  service,
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
    // this.load();

    ///start:slot:didMount<<<
    if (this.props.router.query.id) {
      this.load(this.props.router.query.id);
    } else {
      let template = this.props.router.query || {};
      template.Status = 'New';
      this.load(template);
    }
    ///end:slot:didMount<<<
  }

  AFTER_LOAD = (entity) => {
    console.log('AFTER_LOAD', entity);
    ///start:slot:afterLoad<<<
    this.setState({
      printBadge: entity,
    });
    ///end:slot:afterLoad<<<
  };

  AFTER_CREATE = (instance) => {
    console.log('AFTER_CREATE', instance);

    ///start:slot:afterCreate<<<///end:slot:afterCreate<<<
  };

  AFTER_CREATE_AND_CHECKOUT = (entity) => {
    console.log('AFTER_CREATE_AND_CHECKOUT', entity);
    ///start:slot:afterCreateCheckout<<<///end:slot:afterCreateCheckout<<<
  };

  AFTER_SAVE = (entity) => {
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

  ///end:slot:js<<<

  render() {
    const { dialog, badge } = this.props;
    if (dialog) dialog.onOk = this.onDialogOk;
    const { isLoading, baseEntity, printBadge } = this.state;

    console.log(printBadge);

    if (badge) {
      return (
        <NoSsr>
          <Grid container direction="row" alignItems="center">
            <Card style={{ width: 400, textAlign: 'center' }}>
              <div className="Badge__header">
                {/* <img
                  src="/static/images/logo-bedel.png"
                  alt="Bedel Logo"
                  style={{
                    width: 140,
                    height: 40,
                    backgroundColor: 'white',
                    borderRadius: 5,
                    padding: 2,
                  }}
                /> */}
                <Typography
                  variant="h5"
                  style={{ color: 'white', fontWeight: '700' }}
                >
                  COMPANY NAME
                </Typography>
              </div>
              <div className="Badge__section-name">
                {/* <Gravatar className='Badge__avatar' email={this.props.email} alt='Avatar' /> */}
                <div className="QRCodeBadge">
                  <QRCode value={`${badge.Id}`} size={60} />
                </div>

                <h1 className="app-header-primary">
                  {(badge && badge.FirstName) || 'First Name'} <br />{' '}
                  {(badge && badge.LastName) || 'Last Name'}
                </h1>
              </div>
              <Typography variant="h6">
                Valid Thru: {this.formatDate(badge && badge.CheckIn)}
              </Typography>
              <div className="Badge__section-info">
                <h3>{(badge && badge.Company) || 'Company'}</h3>

                <div>
                  <span style={{ fontWeight: 'bold' }}>Visiting:</span>{' '}
                  {(badge && badge.Visiting) || 'Company Employee'}
                </div>
              </div>
              <div className="Badge__footer">Company Juárez</div>
            </Card>
          </Grid>
        </NoSsr>
      );
    } else {
      return (
        <PrintBadge
          dataBadge={printBadge}
          CheckIn={this.formatDate(printBadge && printBadge.CheckIn)}
        />
      );
    }
  }
}

export default withSnackbar(withRouter(BadgeForm));
