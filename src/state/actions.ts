import { IColumnItemFunction, IColumnItem } from "../models";
import {
  ADD_COLUMN_ITEM,
  CLEAR_COLUMN_ITEMS,
  DELETE_COLUMN_ITEM,
} from "./constants";
export interface Action {
  type: string;
  payload: any;
}
export function addColumnItem(
  item: IColumnItem,
  functionType: IColumnItemFunction
): Action {
  return {
    type: ADD_COLUMN_ITEM,
    payload: {
      item,
      function: functionType,
    },
  };
}
export function deleteColumnItem(
  item: IColumnItem,
  functionType: IColumnItemFunction
): Action {
  return {
    type: CLEAR_COLUMN_ITEMS,
    payload: {
      item,
      function: functionType,
    },
  };
}
export function clearItems(functionType: IColumnItemFunction): Action {
  return {
    type: DELETE_COLUMN_ITEM,
    payload: {
      function: functionType,
    },
  };
}
