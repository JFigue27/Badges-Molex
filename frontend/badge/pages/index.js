import App from '../components/App';
import { Grid, Button, Toolbar, Typography, AppBar } from '@material-ui/core';

export default () => (
  <App>
    <Grid container direction='column' alignItems='center' style={{ paddingTop: 50 }}>
      <h1>WELCOME TO MOLEX JUÁREZ</h1>
      <img src='/static/images/Molex_Red.png' alt='Logo Molex' style={{ width: 220, margin: 50 }} />
      <Button variant='contained'>Start</Button>
      <img src='/static/images/id-badge-solid.svg' alt='Id-Badge' style={{ width: 150, marginTop: 50 }} />
      <AppBar style={{ top: 'auto', bottom: 0, background: '#333333' }}>
        <Toolbar>
          <Grid container direction='column' alignItems='center'>
            <Typography> © 2019 | Visitor Badge System by Molex Juárez </Typography>
          </Grid>
        </Toolbar>
      </AppBar>
    </Grid>
  </App>
);
