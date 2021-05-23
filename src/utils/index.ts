import { IPlotterData, INivoLineData } from "./../models";

const colors = [
  "hsl(351, 70%, 50%)",
  "hsl(262, 70%, 50%)",
  "hsl(349, 70%, 50%)",
  "hsl(287, 70%, 50%)",
];

export const mapPlotData = (plotterData: IPlotterData[]): INivoLineData[] => {
  try {
    let dimension = plotterData[0];
    let mappedData: INivoLineData[] = [];
    for (let index = 1; index < plotterData.length; index++) {
      const temp: INivoLineData = {
        id: `${dimension.name} / ${plotterData[index].name}`,
        color: colors[index % plotterData.length],
        data: [] as any[],
        legends: [],
      };
      dimension.values.forEach((v: string | number, i: number) => {
        temp.data.push({
          x: String(v),
          y: Number(Number(plotterData[index].values[i]).toFixed(0)),
        });
      });
      temp.legends[0] = dimension.name;
      temp.legends[1] = plotterData[index].name;
      mappedData.push(temp);
    }
    return mappedData;
  } catch (err) {
    throw new Error(err);
  }
};
