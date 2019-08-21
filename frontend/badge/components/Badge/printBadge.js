import React from 'react';
import { Grid, Card, Typography, Button } from '@material-ui/core';

const PrintBadge = props => {
  const { dataBadge, CheckIn } = props;

  return (
    <Grid container direction='column' alignItems='center'>
      <Card style={{ width: 400, textAlign: 'center' }}>
        <div className='Badge__header'>
          <img src='/static/images/Molex_White.png' alt='Logo Molex' />
        </div>
        <div className='Badge__section-name'>
          {/* <Gravatar className='Badge__avatar' email={this.props.email} alt='Avatar' /> */}
          <h1>
            {(dataBadge && dataBadge.FirstName) || 'First Name'} <br /> {(dataBadge && dataBadge.LastName) || 'Last Name'}
          </h1>
        </div>
        <Typography variant='h6'>Valid To: {CheckIn && CheckIn}</Typography>
        <div className='Badge__section-info'>
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
      >
        Print
      </Button>
    </Grid>
  );
};

export default PrintBadge;
