import React, { useState, useEffect } from "react";
import {
  makeStyles,
  useTheme,
  Theme,
  createStyles,
} from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { IColumnItem, IColumnItemFunction } from "../../models";
import { Typography } from "@material-ui/core";
import ColumnItem from "../ColumnItem";
import { useApplicationState } from "../../state";

export interface ColumnsDrawerProps {
  open: boolean;
  columnItems: IColumnItem[];
}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "column"
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    hide: {
      display: "none",
    },
    drawer: {
      top: "unset",
      flexShrink: 0,
    },
    drawerHeader: {
      display: "flex",
      padding: theme.spacing(0, 1),
      ...theme.mixins.toolbar,
    },
  })
);

export default function ColumnsWrapper(props: ColumnsDrawerProps) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(props.open);
  const [dimensions, setDimensions] = useState([] as IColumnItem[]);
  const [measures, setMeasures] = useState([] as IColumnItem[]);
  useEffect(() => {
    setDimensions(
      props.columnItems.filter(
        (item) => item.function === IColumnItemFunction.dimension
      )
    );
    setMeasures(
      props.columnItems.filter(
        (item) => item.function === IColumnItemFunction.measure
      )
    );
  }, [props.columnItems]);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <div className={classes.drawer}>
        <div className={classes.drawerHeader}>
         Columns
        </div>
        <Divider />
        <Typography variant="h6">Dimensions</Typography>
        <List>
          {dimensions?.map((item, index) => (
            <ColumnItem function={item.function} name={item.name} key={index} />
          ))}
        </List>
        <Divider />
        <Typography variant="h6">Measures</Typography>
        <List>
          {measures?.map((item, index) => (
            <ColumnItem function={item.function} name={item.name} key={index} />
          ))}
        </List>
      </div>
    </div>
  );
}
