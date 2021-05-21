import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import React from 'react';
import { IColumnItem, IColumnItemFunction } from '../../models';
import SpeedIcon from '@material-ui/icons/Speed';
import TimelineIcon from '@material-ui/icons/Timeline';

export default function ColumnItem(props: IColumnItem ) {

    return (
        <>
        <ListItem button>
        <ListItemIcon>{props.function === IColumnItemFunction.dimension ? <TimelineIcon /> : <SpeedIcon />}</ListItemIcon>
              <ListItemText primary={props.name} />
        </ListItem>
        </>
    )
}