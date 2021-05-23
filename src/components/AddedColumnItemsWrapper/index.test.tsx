import React from "react";
import { render, screen } from "@testing-library/react";
import AddedColumnsItemsWrapper from ".";
import Entry from "./../../indexEntryTest";
import { IColumnItemFunction } from "../../models";
test("renders columns wrapper", () => {
  const app = render(
    <Entry>
      <AddedColumnsItemsWrapper
        type={IColumnItemFunction.dimension}
        columnItems={[]}
        onClear={() => {}}
        onDeleteItem={() => {}}
        onItemAdded={() => {}}
      />
    </Entry>
  );
  expect(app).not.toBeNull();
});
