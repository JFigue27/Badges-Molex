import React from 'react';
import { Card, Typography, Grid, AppBar, Toolbar, CardContent } from '@material-ui/core';

const BadgeCard = props => {
  console.log(props);
  const badge = props.badge;

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
        <div className='Badge__section-info'>
          <h3>{badge.Company || 'Company'}</h3>

          <div>
            <span className='font-weight-bold'>Visiting:</span> {badge.Visiting || 'Visiting'}
          </div>
        </div>
        <div className='Badge__footer'>Molex Juárez México</div>
      </Card>
    </Grid>
  );
};

export default BadgeCard;
