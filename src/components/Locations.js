import React from 'react';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router-dom';
import AddLocation from './AddLocation';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import List from '@material-ui/core/List';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import AddCircleIcon from '@material-ui/icons/AddCircle';


const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(5, 20),
    marginTop: theme.spacing(50)
  },
  list: {
    width: '100%',
    padding: theme.spacing(5),
    marginTop: theme.spacing(5),
    overflowX: 'auto',
  },
  table: {
    width: theme.spacing(85),
  },
  extendedIcon: {
    marginRight: theme.spacing(2),
  },
  buttonSpacing: {
    margin: theme.spacing(5),
  }
}));

function Locations(props) {
  const classes = useStyles();

  return (
    <List component="nav" className={classes.list} aria-label="contacts">
      <Box align="center">
        <Button
          variant="outlined"
          size="small" className={classes.buttonSpacing}
          onClick={() => props.history.push('location/add')}
        >
          <AddCircleIcon className={classes.extendedIcon} />
          Add Location
        </Button>
        <Button
          variant="outlined"
          size="small" className={classes.buttonSpacing}
          onClick={() => props.history.push('location/join')}
        >
          <AddCircleIcon className={classes.extendedIcon} />
          Join Location
        </Button>
      </Box>
      <Typography>
        Current Location
      </Typography>
      <ListItem button>
        <ListItemIcon>
          <CheckCircleIcon />
        </ListItemIcon>
        <ListItemText primary={props.currentLocation.title} />
      </ListItem>
      <Typography>
        Available Locations
      </Typography>
      {
        props.user.locations.filter(({ title }) => title !== props.currentLocation.title).map(location => (
          <ListItem button onClick={() =>  props.chooseLocation(location)}>
            <ListItemIcon>
              <CheckCircleOutlineIcon />
            </ListItemIcon>
            <ListItemText primary={location.title} />
          </ListItem>
        ))
      }
    </List>
  )
}

export default withRouter(Locations);