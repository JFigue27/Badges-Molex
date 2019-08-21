import App from '../components/App';
import BadgeCard from '../components/Badge/badgeCard';
import { Grid } from '@material-ui/core';

export default () => (
  <App>
    <Grid container direction='row' justify='center' alignContent='center'>
      <Grid item style={{ marginTop: '10%' }}>
        <BadgeCard />
      </Grid>
    </Grid>
  </App>
);
