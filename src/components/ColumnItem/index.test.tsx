import React from "react";
import { render, screen } from "@testing-library/react";
import ColumnItem from ".";
import Entry from "./../../indexEntryTest";
import { IColumnItem, IColumnItemFunction } from "../../models";
const dimensionTestProps: IColumnItem = {
  function: IColumnItemFunction.dimension,
  name: "Test",
};
const measureTestProps: IColumnItem = {
  function: IColumnItemFunction.measure,
  name: "Test",
};
test("renders column item with correct text", () => {
  render(
    <Entry>
      <ColumnItem
        function={dimensionTestProps.function}
        name={dimensionTestProps.name}
      />
    </Entry>
  );
  const element = screen.getByText(dimensionTestProps.name);
  expect(element).toBeInTheDocument();
});

test("renders correct icon for dimension column item", () => {
  render(
    <Entry>
      <ColumnItem
        function={dimensionTestProps.function}
        name={dimensionTestProps.name}
      />
    </Entry>
  );
  const element = screen.getByTestId("item-timelineicon");
  expect(element).toBeInTheDocument();
});

test("renders correct icon for measure column item", () => {
  render(
    <Entry>
      <ColumnItem
        function={measureTestProps.function}
        name={measureTestProps.name}
      />
    </Entry>
  );
  const element = screen.getByTestId("item-speedicon");
  expect(element).toBeInTheDocument();
});
