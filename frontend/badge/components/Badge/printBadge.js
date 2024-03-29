import React from 'react';
import { Grid, Card, Typography, Button, Icon } from '@material-ui/core';
import QRCode from 'qrcode.react';
import Router from 'next/router';

const PrintBadge = (props) => {
  const { dataBadge, CheckIn } = props;
  function navigateTo(target) {
    Router.push(target);
  }
  return (
    <Grid container direction="column" alignItems="center">
      <Card
        style={{ width: 400, textAlign: 'center' }}
        className="app-printCard"
      >
        <div className="Badge__header printBadgeHead">
          {/* <img src='/static/images/Molex_White.png' alt='Logo Company' /> */}
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
            <QRCode value={`${dataBadge && dataBadge.Id}`} size={50} />
          </div>
          <h1 className="app-header-primary">
            {(dataBadge && dataBadge.FirstName) || 'First Name'} <br />{' '}
            {(dataBadge && dataBadge.LastName) || 'Last Name'}
          </h1>
        </div>
        <Typography variant="h6">Valid Thru: {CheckIn && CheckIn}</Typography>
        <div className="Badge__section-info printSectionInfo">
          <h3>{(dataBadge && dataBadge.Company) || 'Company'}</h3>

          <div>
            <span style={{ fontWeight: 'bold' }}>Visiting:</span>{' '}
            {(dataBadge && dataBadge.Visiting) || 'Company Employee'}
          </div>
        </div>
        <div className="Badge__footer">Company Juárez</div>
      </Card>
      <Button
        fullWidth
        variant="content"
        style={{ marginTop: '5%' }}
        onClick={() => {
          window.print();
        }}
        className="printButton btn-primary"
      >
        <Icon style={{ marginRight: 15 }}>print</Icon>
        Print
      </Button>
      <Button
        fullWidth
        variant="content"
        style={{ marginTop: '5%', border: '2px solid' }}
        onClick={() => navigateTo('/')}
        className="printButton"
      >
        <Icon style={{ marginRight: 15 }}>home</Icon>
        HOME
      </Button>
    </Grid>
  );
};

export default PrintBadge;
