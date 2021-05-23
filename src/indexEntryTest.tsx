import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { ApplicationProvider } from "./state";
import { QueryClient, QueryClientProvider } from "react-query";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      retry: false,
      staleTime: Infinity,
    },
  },
});
export default function (props: any) {
  const children: React.ReactNode = props.children as React.ReactNode;
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <DndProvider backend={HTML5Backend}>
          <ApplicationProvider>{children}</ApplicationProvider>
        </DndProvider>
      </QueryClientProvider>
    </>
  );
}
