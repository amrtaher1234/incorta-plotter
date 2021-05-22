import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import React from "react";
import { IColumnItem, IColumnItemFunction } from "../../models";
import SpeedIcon from "@material-ui/icons/Speed";
import TimelineIcon from "@material-ui/icons/Timeline";
import { useDrag } from "react-dnd";

export default function ColumnItem(props: IColumnItem) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: props.function,
    item: { column: props },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
    previewOptions: {
      anchorX: 1,
      captureDraggingState: true,
    },
  }));
  return (
    <>
      <ListItem style={{ margin: 20 }} ref={drag} button>
        <ListItemIcon>
          {props.function === IColumnItemFunction.dimension ? (
            <TimelineIcon />
          ) : (
            <SpeedIcon />
          )}
        </ListItemIcon>
        <ListItemText primary={props.name} />
      </ListItem>
    </>
  );
}
