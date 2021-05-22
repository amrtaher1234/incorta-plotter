import { IColumnItem } from "../models";
import { mapPlotData } from "../utils";
const fetchPlotData = (dimension: IColumnItem, measures: IColumnItem[]) => {
  const body = {
    measures: measures.map((m) => m.name),
    dimension: dimension.name,
  };
  return fetch("https://plotter-task.herokuapp.com/data", {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(body),
  })
    .then((res) => res.json())
    .then(mapPlotData);
};

const fetchColumns = () => {
  return fetch("https://plotter-task.herokuapp.com/columns").then((res) =>
    res.json()
  );
};

export { fetchColumns, fetchPlotData };
