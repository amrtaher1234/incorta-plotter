import React from "react";
import { render, screen } from "@testing-library/react";
import ColumnsWrapper from ".";
import Entry from "./../../indexEntryTest";
test("renders columns wrapper", () => {
  const app = render(
    <Entry>
      <ColumnsWrapper columnItems={[]} />
    </Entry>
  );
  expect(app).not.toBeNull();
});
