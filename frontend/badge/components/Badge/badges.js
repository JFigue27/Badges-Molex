import React from 'react';
import { withRouter } from 'next/router';
import { withSnackbar } from 'notistack';
import { NoSsr, Typography, Grid } from '@material-ui/core';
import SearchBox from '../../widgets/Searchbox';
import Pagination from 'react-js-pagination';
import ListContainer from '../../core/ListContainer';
import { Table } from '@material-ui/core';
import { TableHead } from '@material-ui/core';
import { TableBody } from '@material-ui/core';
import { TableRow } from '@material-ui/core';
import { TableCell } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { Icon } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { InputBase } from '@material-ui/core';
import { KeyboardDateTimePicker } from '@material-ui/pickers';
import Dialog from '../../widgets/Dialog';
import Badge from './badge.js';
import CheckOut from './checkOut.js';
import { AppBar, Toolbar } from '@material-ui/core';

import BadgeService from './badge.service';
///start:slot:dependencies<<<
import Loader from '../Loader';
///end:slot:dependencies<<<

const service = new BadgeService();
const defaultConfig = {
  service
  ///start:slot:config<<<///end:slot:config<<<
};

class BadgesList extends ListContainer {
  constructor(props, config) {
    Object.assign(defaultConfig, config);
    super(props, defaultConfig);
    ///start:slot:ctor<<<///end:slot:ctor<<<
  }

  componentDidMount() {
    console.log('List did mount');
    this.load();

    ///start:slot:didMount<<<///end:slot:didMount<<<
  }

  AFTER_LOAD = baseList => {
    console.log('AFTER_LOAD');
    ///start:slot:afterLoad<<<///end:slot:afterLoad<<<
  };

  AFTER_CREATE = instance => {
    console.log('AFTER_CREATE', instance);

    this.openDialog(instance);

    ///start:slot:afterCreate<<<
    ///end:slot:afterCreate<<<
  };

  AFTER_CREATE_AND_CHECKOUT = entity => {
    console.log('AFTER_CREATE_AND_CHECKOUT', entity);
    ///start:slot:afterCreateCheckout<<<///end:slot:afterCreateCheckout<<<
  };

  AFTER_REMOVE = () => {
    console.log('AFTER_REMOVE');
    ///start:slot:afterRemove<<<
    this.refresh();
    ///end:slot:afterRemove<<<
  };

  ON_OPEN_ITEM = item => {
    console.log('ON_OPEN_ITEM', item);

    this.openDialog(item);

    ///start:slot:onOpenItem<<<
    ///end:slot:onOpenItem<<<
  };

  openDialog = item => {
    this.setState({
      badge: item
    });
  };

  closeDialog = feedback => {
    if (feedback == 'ok') {
      this.refresh();
    }
    this.setState({
      badge: false
    });
  };
  openDialogCheckOut = item => {
    this.setState({
      checkout: item
    });
  };

  closeDialogCheckOut = feedback => {
    if (feedback == 'ok') {
      this.refresh();
    }
    this.setState({
      checkout: false
    });
    this.refresh();
  };
  ///start:slot:js<<<///end:slot:js<<<

  render() {
    const { isLoading, baseEntity, baseList, filterOptions } = this.state;

    if (isLoading) {
      return <Loader />;
    }

    return (
      <NoSsr>
        <Grid className='container-fluid' container direction='column' item xs={12} style={{ padding: 20 }}>
          <Typography variant='h6' className='h6' gutterBottom>
            Badges
          </Typography>
          <Grid container direction='row'>
            <Grid item xs />
            <Pagination
              activePage={filterOptions.page}
              itemsCountPerPage={filterOptions.limit}
              totalItemsCount={filterOptions.itemsCount}
              pageRangeDisplayed={5}
              onChange={newPage => {
                this.pageChanged(newPage);
              }}
            />
          </Grid>
          <Table className='' size='small'>
            <TableHead>
              <TableRow>
                <TableCell />
                <TableCell>Barcode</TableCell>
                <TableCell>FirstName</TableCell>
                <TableCell>LastName</TableCell>
                <TableCell>Company</TableCell>
                <TableCell>Citizenship</TableCell>
                <TableCell>Visiting</TableCell>
                <TableCell>CheckIn</TableCell>
                <TableCell>CheckOut</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {baseList &&
                baseList.map(item => (
                  <TableRow key={item.Id}>
                    <TableCell>
                      <Grid container direction='row' className='row' justify='center' alignItems='flex-end' spacing={2}>
                        <Grid item xs={12} sm>
                          <Button
                            variant='contained'
                            color='default'
                            className=''
                            onClick={event => {
                              this.openItem(event, item);
                            }}
                            size='small'
                          >
                            <Icon>edit</Icon>Open
                          </Button>
                        </Grid>
                        <Grid item xs={12} sm>
                          <Button
                            variant='contained'
                            color='default'
                            className='md-warn md-hue-1'
                            onClick={event => {
                              this.removeItem(event, item);
                            }}
                            size='small'
                          >
                            <Icon>delete</Icon>Remove
                          </Button>
                        </Grid>
                      </Grid>
                    </TableCell>
                    <TableCell>
                      <InputBase
                        type='text'
                        className=''
                        autoComplete='off'
                        disabled={this.isDisabled}
                        readOnly={true}
                        onChange={event => this.handleInputChange(event, 'Value')}
                        value={item.Value || ''}
                        fullWidth
                      />
                    </TableCell>
                    <TableCell>
                      <InputBase
                        type='text'
                        className=''
                        autoComplete='off'
                        disabled={this.isDisabled}
                        readOnly={true}
                        onChange={event => this.handleInputChange(event, 'FirstName')}
                        value={item.FirstName || ''}
                        fullWidth
                      />
                    </TableCell>
                    <TableCell>
                      <InputBase
                        type='text'
                        className=''
                        autoComplete='off'
                        disabled={this.isDisabled}
                        readOnly={true}
                        onChange={event => this.handleInputChange(event, 'LastName')}
                        value={item.LastName || ''}
                        fullWidth
                      />
                    </TableCell>
                    <TableCell>
                      <InputBase
                        type='text'
                        className=''
                        autoComplete='off'
                        disabled={this.isDisabled}
                        readOnly={true}
                        onChange={event => this.handleInputChange(event, 'Company')}
                        value={item.Company || ''}
                        fullWidth
                      />
                    </TableCell>
                    <TableCell>
                      <InputBase
                        type='text'
                        className=''
                        autoComplete='off'
                        disabled={this.isDisabled}
                        readOnly={true}
                        onChange={event => this.handleInputChange(event, 'Citizenship')}
                        value={item.Citizenship || ''}
                        fullWidth
                      />
                    </TableCell>
                    <TableCell>
                      <InputBase
                        type='text'
                        className=''
                        autoComplete='off'
                        disabled={this.isDisabled}
                        readOnly={true}
                        onChange={event => this.handleInputChange(event, 'Visiting')}
                        value={item.Visiting || ''}
                        fullWidth
                      />
                    </TableCell>
                    <TableCell>{this.formatDate(item.CheckIn)}</TableCell>
                    <TableCell>{this.formatDate(item.CheckOut)}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </Grid>
        <Dialog open={!!this.state.badge} onClose={this.closeDialog} draggable title='Visitor Badge' okLabel='Save' maxWidth='md'>
          {dialog => {
            return !isLoading && <Badge dialog={dialog} data={this.state.badge} />;
          }}
        </Dialog>
        <Dialog open={!!this.state.checkout} onClose={this.closeDialogCheckOut} draggable title='CheckOut' okLabel='Save'>
          {dialog => {
            return !isLoading && <CheckOut dialog={dialog} data={this.state.checkout} />;
          }}
        </Dialog>
        <AppBar position='fixed' style={{ top: 'auto', bottom: 0, background: '#333333' }}>
          <Toolbar variant='dense'>
            <SearchBox bindFilterInput={this.bindFilterInput} value={filterOptions.filterGeneral} />
            <Grid item xs={12} sm />
            <Button
              variant='contained'
              color='default'
              className=''
              onClick={event => {
                this.openDialogCheckOut(event, {});
              }}
              size='small'
            >
              <Icon>edit</Icon>CheckOut
            </Button>
            <Button
              variant='contained'
              color='default'
              className=''
              onClick={event => {
                this.createInstance(event, {});
              }}
            >
              <Icon>add_circle</Icon>New
            </Button>
          </Toolbar>
        </AppBar>
      </NoSsr>
    );
  }
}

export default withSnackbar(withRouter(BadgesList));
