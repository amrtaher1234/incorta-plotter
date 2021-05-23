import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import Entry from "./indexEntryTest";
test("renders App", () => {
  const app = render(
    <Entry>
      <App />
    </Entry>
  );
  expect(app).not.toBeNull();
});
