import React from 'react';

import {
  Button,
  Icon,
  IconButton,
  AppBar,
  Toolbar,
  Drawer,
} from '@material-ui/core';

import { makeStyles } from '@material-ui/styles';

import SettingsIcon from '@material-ui/icons/Settings';

import { scrumboardDB } from './db/db';
import BoardList from './BoardList';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    // marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const ScrumBoard = (props) => {
  const board = scrumboardDB.boards[0];
//   console.log('das ist scrumboard', board);
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary">
        <Toolbar className="flex items-center justify-between px-4 sm:px-24 h-64 sm:h-96 container">
          <Button edge="start" to="#" variant="contained">
            Boards
          </Button>
          <div className={classes.title}>BoardTitle</div>
          <IconButton color="inherit" onClick={() => {}}>
            <SettingsIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <div className={classes.root}>
        {board.lists.map((list, index) => {
          return <BoardList key={list.id} list={list} index={index} />;
        })}
      </div>
    </div>
  );
};

export default ScrumBoard;
