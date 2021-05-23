import { mapPlotData } from "./index";
import {
  mappedPlotDataFromAPI,
  plotDataFromAPI,
  invalidPlotDataFromAPI,
} from "./../mocks/plot.mock";

test("maps data correctly", () => {
  expect(mapPlotData(plotDataFromAPI)).toEqual(mappedPlotDataFromAPI);
});

test("mapping throws error if provided data is invalid", () => {
  expect(() => mapPlotData(invalidPlotDataFromAPI)).toThrowError(
    "Dimensions and Measures are with different value lengths"
  );
});
