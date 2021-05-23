import {
  Chip,
  createStyles,
  makeStyles,
  Paper,
  Theme,
  Typography,
} from "@material-ui/core";
import React from "react";
import { useDrop } from "react-dnd";
import SpeedIcon from "@material-ui/icons/Speed";
import TimelineIcon from "@material-ui/icons/Timeline";
import { IColumnItem, IColumnItemFunction } from "../../models";

export interface ColumnButtonWrapperInterface {
  columnItems: IColumnItem[];
  type: IColumnItemFunction;
  onClear: () => void;
  onDeleteItem: (item: IColumnItem) => void;
  onItemAdded: (item: IColumnItem) => void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "grid",
      listStyle: "none",
      padding: theme.spacing(0.5),
      gridTemplateColumns: "1fr 5fr",
      alignItems: "center",
    },
    paper: {
      display: "flex",
      flexWrap: "wrap",
      listStyle: "none",
      padding: theme.spacing(0.5),
      marginLeft: 15,
      alignItems: "center",
      minHeight: 55,
    },
    buttonText: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-evenly",
    },
    chip: {
      margin: theme.spacing(0.5),
    },
  })
);
export default function AddedColumnItemsWrapper(
  props: ColumnButtonWrapperInterface
) {
  const { columnItems, type, onClear, onDeleteItem, onItemAdded } = props;
  const classes = useStyles();
  const getButtonText = () => {
    if (type === IColumnItemFunction.measure) {
      return (
        <>
          <SpeedIcon /> {type}{" "}
        </>
      );
    }
    return (
      <>
        <TimelineIcon /> {type}{" "}
      </>
    );
  };
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: props.type,
    drop: (data: any) => {
      const columnItem = data.column as IColumnItem;
      onItemAdded(columnItem);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  const handleDelete = (item: IColumnItem) => () => {
    onDeleteItem(item);
  };

  return (
    <div className={classes.root}>
      <Typography className={classes.buttonText} variant="body1">
        {getButtonText()}
      </Typography>
      <Paper ref={drop} component="ul" className={classes.paper}>
        {columnItems.map((item, index) => {
          return (
            <>
              <li key={`${item.name}-${index}-${type}`}>
                <Chip
                  label={item.name}
                  onDelete={handleDelete(item)}
                  className={classes.chip}
                />
              </li>
            </>
          );
        })}
        {columnItems && !!columnItems.length && (
          <li>
            <Chip
              label="Clear"
              clickable
              color="primary"
              onClick={() => onClear()}
            />
          </li>
        )}
      </Paper>
    </div>
  );
}
