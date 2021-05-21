import React, { createContext, useReducer } from "react";
import { IColumnItem, IColumnItemFunction } from "../models";
import { Action } from "./actions";
import {
  ADD_COLUMN_ITEM,
  CLEAR_COLUMN_ITEMS,
  DELETE_COLUMN_ITEM,
} from "./constants";
type ApplicationContextProviderProps = { children: React.ReactNode };
type Dispatch = (action: Action) => void;

interface ApplicationState {
  dimensions: IColumnItem[];
  measures: IColumnItem[];
  data: any;
}
const initialState: ApplicationState = {
  dimensions: [],
  measures: [],
  data: null,
};

const ApplicationContext =
  createContext<{ state: ApplicationState; dispatch: Dispatch } | undefined>(
    undefined
  );

function applicationReducer(
  state: ApplicationState,
  action: Action
): ApplicationState {
  switch (action.type) {
    case ADD_COLUMN_ITEM: {
      const items =
        action.payload.function === IColumnItemFunction.dimension
          ? state.dimensions
          : state.measures;
      items.push(action.payload.item);
      const key = action.payload.function + "s";
      return { [key]: items, ...state };
    }
    case DELETE_COLUMN_ITEM: {
      let items =
        action.payload.function === IColumnItemFunction.dimension
          ? state.dimensions
          : state.measures;
      const itemIndex = items.findIndex((item) => {
        return item.name === action.payload.item.name;
      });
      items = itemIndex !== -1 ? items.splice(itemIndex, 1) : items;
      const key = action.payload.function + "s";
      return { [key]: items, ...state };
    }
    case CLEAR_COLUMN_ITEMS: {
      const key = action.payload.function + "s";
      return { [key]: [], ...state };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}
function ApplicationProvider({ children }: ApplicationContextProviderProps) {
  const [state, dispatch] = useReducer(applicationReducer, initialState);
  const value = { state, dispatch };
  return (
    <ApplicationContext.Provider value={value}>
      {children}
    </ApplicationContext.Provider>
  );
}
function useApplicationState() {
  const context = React.useContext(ApplicationContext);
  if (context === undefined) {
    throw new Error("");
  }
  return context;
}
export { ApplicationProvider, useApplicationState };
