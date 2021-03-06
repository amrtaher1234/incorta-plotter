import React from "react";
import { ResponsiveLine } from "@nivo/line";
import { INivoLineData } from "../../models";

export interface LinePlotsProps {
  data: INivoLineData[];
}
const LinePlots = (props: LinePlotsProps) => {
  return (
    <>
      <div
        style={{
          height: 600,
          minWidth: 600,
        }}
      >
        <ResponsiveLine
          lineWidth={3}
          colors={props.data.map((d) => d.color)}
          data={props.data}
          margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
          xScale={{ type: "point" }}
          yScale={
            {
              type: props.data.length > 1 ? "log" : "linear",
              base: 5,
              min: "auto",
              max: "auto",
              stacked: true,
              reverse: false,
            } as any
          }
          yFormat=" >-.2f"
          axisTop={null}
          axisRight={null}
          axisBottom={
            {
              orient: "bottom",
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legendOffset: 36,
              legend: props.data[0].legends[0],
              legendPosition: "middle",
            } as any
          }
          axisLeft={
            {
              orient: "left",
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legendOffset: -40,
              legendPosition: "middle",
              legend: props.data.length > 1 ? "" : props.data[0].legends[1],
            } as any
          }
          pointSize={10}
          pointColor={{ theme: "background" }}
          pointBorderWidth={2}
          pointBorderColor={{ from: "serieColor" }}
          pointLabelYOffset={-12}
          useMesh={true}
          legends={[
            {
              anchor: "bottom-right",
              direction: "column",
              justify: false,
              translateX: 100,
              translateY: 0,
              itemsSpacing: 0,
              itemDirection: "left-to-right",
              itemWidth: 80,
              itemHeight: 20,
              itemOpacity: 0.75,
              symbolSize: 12,
              symbolShape: "circle",
              symbolBorderColor: "rgba(0, 0, 0, .5)",
              effects: [
                {
                  on: "hover",
                  style: {
                    itemBackground: "rgba(0, 0, 0, .03)",
                    itemOpacity: 1,
                  },
                },
              ],
            },
          ]}
        />
      </div>
    </>
  );
};

export default LinePlots;
