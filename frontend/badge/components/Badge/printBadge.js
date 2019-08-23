import React from 'react';
import { Grid, Card, Typography, Button } from '@material-ui/core';
import QRCode from 'qrcode.react';

const PrintBadge = props => {
  const { dataBadge, CheckIn } = props;

  return (
    <Grid container direction='column' alignItems='center'>
      <Card style={{ width: 400, textAlign: 'center' }} className='app-printCard'>
        <div className='Badge__header printBadgeHead'>
          <img src='/static/images/Molex_White.png' alt='Logo Molex' />
        </div>
        <div className='Badge__section-name'>
          {/* <Gravatar className='Badge__avatar' email={this.props.email} alt='Avatar' /> */}
          <div className='QRCodeBadge'>
            <QRCode value={`${dataBadge && dataBadge.Id}`} size={50} />
          </div>
          <h1>
            {(dataBadge && dataBadge.FirstName) || 'First Name'} <br /> {(dataBadge && dataBadge.LastName) || 'Last Name'}
          </h1>
        </div>
        <Typography variant='h6'>Valid Thru: {CheckIn && CheckIn}</Typography>
        <div className='Badge__section-info printSectionInfo'>
          <h3>{(dataBadge && dataBadge.Company) || 'Company'}</h3>

          <div>
            <span style={{ fontWeight: 'bold' }}>Visiting:</span> {(dataBadge && dataBadge.Visiting) || 'Molex Employee'}
          </div>
        </div>
        <div className='Badge__footer'>Molex Juárez México</div>
      </Card>
      <Button
        fullWidth
        variant='content'
        style={{ marginTop: '5%' }}
        onClick={() => {
          window.print();
        }}
        className='printButton'
      >
        Print
      </Button>
    </Grid>
  );
};

export default PrintBadge;
