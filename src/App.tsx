import {
  Backdrop,
  Button,
  Container,
  createStyles,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core";
import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useQuery } from "react-query";
import "./App.css";
import ColumnButtonWrapper from "./components/ColumnButtonWrapper";
import ColumnsWrapper from "./components/ColumnsWrapper";
import Header from "./components/Header";
import ColumnsMockData from "./mocks/columns.mock";
import { IColumnItem, IColumnItemFunction } from "./models";
import { useApplicationState } from "./state";
import {
  addMeasure,
  clearMeasures,
  deleteMeasure,
  setDimension,
} from "./state/actions";
import { fetchColumns, fetchPlotData } from "./api";
import LinePlot from "./components/LinePlot";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: "#fff",
    },
    main: {
      display: "grid",
      gridTemplateColumns: "1.5fr 3.5fr",
      gridTemplateRows: "1fr",
      gridGap: 10,
      paddingTop: 20,
    },
  })
);

function App() {
  const { dispatch, state } = useApplicationState();

  const columnQuery = useQuery<IColumnItem[]>("columnsData", fetchColumns);

  const plotQuery = useQuery(
    "plotData",
    fetchPlotData.bind(null, state.dimension, state.measures),
    {
      enabled: false,
    }
  );

  const handleDimensionAddition = (item: IColumnItem) => {
    if (state.dimension === null || state.dimension === undefined) {
      dispatch(setDimension(item));
    }
  };
  const handleMeasureAddition = (item: IColumnItem) => {
    console.log(state);
    if (
      !state.measures.length ||
      state.measures.every((i) => i.name !== item.name)
    ) {
      dispatch(addMeasure(item));
    }
  };
  const canDrawAnalytics = () => {
    return !(!!state.dimension && !!state.measures.length);
  };
  const classes = useStyles();
  return (
    <div className="App">
      <Backdrop
        className={classes.backdrop}
        open={columnQuery.isFetching || plotQuery.isFetching}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Header />
      <main className={classes.main}>
        <ColumnsWrapper
          columnItems={columnQuery.data ? columnQuery.data : []}
          open={true}
        />
        <Container>
          <ColumnButtonWrapper
            type={IColumnItemFunction.dimension}
            columnItems={state.dimension ? [state.dimension] : []}
            onClear={() => dispatch(setDimension(null))}
            onDeleteItem={(_) => dispatch(setDimension(null))}
            onItemAdded={handleDimensionAddition}
          />

          <ColumnButtonWrapper
            type={IColumnItemFunction.measure}
            columnItems={state.measures}
            onClear={() => dispatch(clearMeasures())}
            onDeleteItem={(item) => dispatch(deleteMeasure(item))}
            onItemAdded={handleMeasureAddition}
          />

          <Button
            disabled={canDrawAnalytics()}
            variant="contained"
            onClick={() => plotQuery.refetch()}
            color="primary"
          >
            Draw Analytics
          </Button>
          {plotQuery.isError && (
            <Typography color="error" variant="h5">
              Error while fetching plot data: {plotQuery.error}
            </Typography>
          )}
          {plotQuery.data?.map((d, index) => {
            return <LinePlot key={index} data={d} />;
          })}
        </Container>
      </main>
    </div>
  );
}

export default App;
