const plotDataFromAPI = [
  {
    name: "Product",
    values: ['17" LCD w/built-in HDTV Tuner', "256MB Memory Card"],
  },
  { name: "Units sold", values: [980, 8] },
];

const invalidPlotDataFromAPI = [
  {
    name: "Product",
    values: ['17" LCD w/built-in HDTV Tuner', "256MB Memory Card"],
  },
  { name: "Units sold", values: [] },
];
const mappedPlotDataFromAPI = [
  {
    id: "Product / Units sold",
    color: "hsl(351, 70%, 50%)",
    data: [
      {
        x: '17" LCD w/built-in HDTV Tuner',
        y: 980,
      },
      {
        x: "256MB Memory Card",
        y: 8,
      },
    ],
    legends: ["Product", "Units sold"],
  },
];

export { plotDataFromAPI, mappedPlotDataFromAPI, invalidPlotDataFromAPI };
