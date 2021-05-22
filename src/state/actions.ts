import { IColumnItemFunction, IColumnItem } from "../models";
import {
  CLEAR_MEASURES,
  DELETE_MEASURE,
  SET_DIMENSION,
  ADD_MEASURE,
} from "./constants";
export interface Action {
  type: string;
  payload: any;
}
export function deleteMeasure(item: IColumnItem): Action {
  return {
    type: DELETE_MEASURE,
    payload: {
      item,
    },
  };
}
export function clearMeasures(): Action {
  return {
    type: CLEAR_MEASURES,
    payload: {},
  };
}
export function setDimension(item: IColumnItem | any) {
  return {
    type: SET_DIMENSION,
    payload: {
      item,
    },
  };
}
export function addMeasure(item: IColumnItem) {
  return {
    type: ADD_MEASURE,
    payload: {
      item,
    },
  };
}
