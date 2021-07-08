import {
  Backdrop,
  Button,
  Checkbox,
  Container,
  createStyles,
  FormControlLabel,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core";
import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useQuery } from "react-query";
import "./App.css";
import AddedColumnItemsWrapper from "./components/AddedColumnItemsWrapper";
import ColumnsWrapper from "./components/ColumnsWrapper";
import Header from "./components/Header";
import { IColumnItem, IColumnItemFunction } from "./models";
import { useApplicationState } from "./state";
import {
  addMeasure,
  clearMeasures,
  deleteMeasure,
  setDimension,
} from "./state/actions";
import { fetchColumns, fetchPlotData } from "./api";
import LinePlots from "./components/LinePlots";

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
  const [multiplePlots, setMultiplePlots] = React.useState(false);
  const columnQuery = useQuery<IColumnItem[]>("columnsData", fetchColumns);

  const plotQuery = useQuery(
    "plotData",
    fetchPlotData(state.dimension, state.measures),
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
        />
        <Container>
          <AddedColumnItemsWrapper
            type={IColumnItemFunction.dimension}
            columnItems={state.dimension ? [state.dimension] : []}
            onClear={() => dispatch(setDimension(null))}
            onDeleteItem={(_) => dispatch(setDimension(null))}
            onItemAdded={handleDimensionAddition}
          />

          <AddedColumnItemsWrapper
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
          <FormControlLabel
            style={{ margin: 10 }}
            control={
              <Checkbox
                checked={multiplePlots}
                onChange={(v) => {
                  setMultiplePlots(!multiplePlots);
                }}
                name="checkedB"
                color="primary"
              />
            }
            label="Multiple Plots"
          />

          {plotQuery.isError && (
            <Typography color="error" variant="h5">
              Error while fetching plot data: {plotQuery.error}
            </Typography>
          )}
          {!multiplePlots && plotQuery.data && (
            <LinePlots data={plotQuery.data} />
          )}
          {multiplePlots &&
            plotQuery.data?.map((d, index) => {
              return <LinePlots key={index} data={[d]} />;
            })}
        </Container>
      </main>
    </div>
  );
}

export default App;
