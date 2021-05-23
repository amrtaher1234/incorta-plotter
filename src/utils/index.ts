import { IPlotterData, INivoLineData } from "./../models";

const colors = [
  "hsl(351, 70%, 50%)",
  "hsl(262, 20%, 50%)",
  "hsl(349, 30%, 50%)",
  "hsl(287, 50%, 50%)",
];

export const mapPlotData = (plotterData: IPlotterData[]): INivoLineData[] => {
  let dimension = plotterData[0];
  let mappedData: INivoLineData[] = [];
  for (let index = 1; index < plotterData.length; index++) {
    if (dimension.values.length !== plotterData[index].values.length) {
      throw new Error(
        "Dimensions and Measures are with different value lengths"
      );
    }
    const temp: INivoLineData = {
      id: `${plotterData[index].name}`,
      color: colors[(index % plotterData.length) - 1],
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
};
