import { Chip, createStyles, makeStyles, Paper, Theme, Typography } from "@material-ui/core";
import React from "react";
import { IColumnItem, IColumnItemFunction } from "../../models";

export interface ColumnButtonWrapperInterface {
  columnItems: IColumnItem[];
  type: IColumnItemFunction | string;
  onClear: () => void;
  onDeleteItem: (item: IColumnItem) => void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      listStyle: 'none',
      padding: theme.spacing(0.5),
      alignItems: 'center',
      justifyContent: 'space-evenly'
    },
    paper: {
        display: 'flex',
        flexWrap: 'wrap',
        listStyle: 'none',
        padding: theme.spacing(0.5),
        marginLeft: 15,
    },
    chip: {
      margin: theme.spacing(0.5),
    },
  }),
);
export default function ColumnButtonWrapper(props: ColumnButtonWrapperInterface) {
    const { columnItems, type, onClear, onDeleteItem } = props;
    const classes = useStyles();
  
    const handleDelete = (item: IColumnItem) => () => {
    };
  
    return (
        <div className={classes.root}>
        <Typography variant="body1">{type}</Typography>
      <Paper component="ul" className={classes.paper}>
        {columnItems.map((item, index) => {
          return (
            <li key={item.name}>
              <Chip
                label={item.name}
                onDelete={handleDelete(item)}
                className={classes.chip}
              />
            </li>
          );
        })}
      </Paper>
        </div>
    );
  }
