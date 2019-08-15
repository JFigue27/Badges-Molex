import React from 'react';
import { Card, Typography, Grid, AppBar, Toolbar, CardContent, InputBase } from '@material-ui/core';
const BadgeCard = props => {
  const badge = props.badge;
  const CheckIn = props.CheckIn;

  return (
    <Grid container direction='row' alignItems='center'>
      <Card style={{ width: 400, textAlign: 'center' }}>
        <div className='Badge__header'>
          <img src='/static/images/Molex_White.png' alt='Logo Molex' />
        </div>
        <div className='Badge__section-name'>
          {/* <Gravatar className='Badge__avatar' email={this.props.email} alt='Avatar' /> */}
          <h1>
            {badge.FirstName || 'First Name'} <br /> {badge.LastName || 'Last Name'}
          </h1>
        </div>
        <Typography variant='h6'>Valid To: {CheckIn && CheckIn}</Typography>
        <div className='Badge__section-info'>
          <h3>{badge.Company || 'Company'}</h3>

          <div>
            <span style={{ fontWeight: 'bold' }}>Visiting:</span> {badge.Visiting || 'Molex Employee'}
          </div>
        </div>
        <div className='Badge__footer'>Molex Juárez México</div>
      </Card>
    </Grid>
  );
};

export default BadgeCard;
