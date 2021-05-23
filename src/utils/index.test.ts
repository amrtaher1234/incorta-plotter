import { mapPlotData } from "./index";
import {
  mappedPlotDataFromAPI,
  plotDataFromAPI,
  invalidPlotDataFromAPI,
} from "./../mocks/plot.mock";

test("maps data correctly", () => {
  expect(mapPlotData(plotDataFromAPI)).toBe(mappedPlotDataFromAPI);
});

test("mapping throws error if provided data is invalid", () => {
  expect(mapPlotData(invalidPlotDataFromAPI)).toThrowError();
});
