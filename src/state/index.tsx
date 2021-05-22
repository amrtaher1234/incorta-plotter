import React, { createContext, useReducer } from "react";
import { IColumnItem } from "../models";
import { Action } from "./actions";
import {
  ADD_MEASURE,
  CLEAR_MEASURES,
  DELETE_MEASURE,
  SET_DIMENSION,
} from "./constants";
type ApplicationContextProviderProps = { children: React.ReactNode };
type Dispatch = (action: Action) => void;

interface ApplicationState {
  dimension: IColumnItem | any;
  measures: IColumnItem[];
  data: any;
}
const initialState: ApplicationState = {
  dimension: null,
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
    case SET_DIMENSION: {
      if (state.dimension && action.payload.item !== null) {
        return state;
      }
      return {
        ...state,
        dimension: action.payload.item,
      };
    }
    case ADD_MEASURE: {
      const items = state.measures;

      if (!!items.some((item) => item.name === action.payload.item.name)) {
        return state;
      }
      return {
        ...state,
        measures: [...items, action.payload.item],
      };
    }
    case DELETE_MEASURE: {
      let items = state.measures;
      const itemIndex = items.findIndex((item) => {
        return item.name === action.payload.item.name;
      });
      if (itemIndex !== -1) {
        items.splice(itemIndex, 1);
      }
      return { ...state, measures: items };
    }
    case CLEAR_MEASURES: {
      return {
        ...state,
        measures: [],
      };
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
