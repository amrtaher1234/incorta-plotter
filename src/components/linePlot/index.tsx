import  React, {useState} from 'react'
import { ResponsiveLine } from '@nivo/line'
const d = [
    {
        "id": "japan",
        "color": "hsl(351, 70%, 50%)",
        "data": [
            {
                "x": "plane",
                "y": 140
            },
            {
                "x": "helicopter",
                "y": 135
            },
            {
                "x": "boat",
                "y": 200
            },
            {
                "x": "train",
                "y": 295
            },
            {
                "x": "subway",
                "y": 95
            },
            {
                "x": "bus",
                "y": 176
            },
            {
                "x": "car",
                "y": 57
            },
            {
                "x": "moto",
                "y": 250
            },
            {
                "x": "bicycle",
                "y": 265
            },
            {
                "x": "horse",
                "y": 87
            },
            {
                "x": "skateboard",
                "y": 217
            },
            {
                "x": "others",
                "y": 86
            }
        ]
    },
    {
        "id": "france",
        "color": "hsl(262, 70%, 50%)",
        "data": [
            {
                "x": "plane",
                "y": 179
            },
            {
                "x": "helicopter",
                "y": 202
            },
            {
                "x": "boat",
                "y": 102
            },
            {
                "x": "train",
                "y": 56
            },
            {
                "x": "subway",
                "y": 80
            },
            {
                "x": "bus",
                "y": 250
            },
            {
                "x": "car",
                "y": 41
            },
            {
                "x": "moto",
                "y": 128
            },
            {
                "x": "bicycle",
                "y": 250
            },
            {
                "x": "horse",
                "y": 31
            },
            {
                "x": "skateboard",
                "y": 265
            },
            {
                "x": "others",
                "y": 5
            }
        ]
    },
    {
        "id": "us",
        "color": "hsl(349, 70%, 50%)",
        "data": [
            {
                "x": "plane",
                "y": 119
            },
            {
                "x": "helicopter",
                "y": 73
            },
            {
                "x": "boat",
                "y": 77
            },
            {
                "x": "train",
                "y": 300
            },
            {
                "x": "subway",
                "y": 49
            },
            {
                "x": "bus",
                "y": 85
            },
            {
                "x": "car",
                "y": 25
            },
            {
                "x": "moto",
                "y": 56
            },
            {
                "x": "bicycle",
                "y": 92
            },
            {
                "x": "horse",
                "y": 154
            },
            {
                "x": "skateboard",
                "y": 269
            },
            {
                "x": "others",
                "y": 237
            }
        ]
    },
    {
        "id": "germany",
        "color": "hsl(355, 70%, 50%)",
        "data": [
            {
                "x": "plane",
                "y": 174
            },
            {
                "x": "helicopter",
                "y": 47
            },
            {
                "x": "boat",
                "y": 116
            },
            {
                "x": "train",
                "y": 190
            },
            {
                "x": "subway",
                "y": 52
            },
            {
                "x": "bus",
                "y": 262
            },
            {
                "x": "car",
                "y": 61
            },
            {
                "x": "moto",
                "y": 298
            },
            {
                "x": "bicycle",
                "y": 295
            },
            {
                "x": "horse",
                "y": 273
            },
            {
                "x": "skateboard",
                "y": 186
            },
            {
                "x": "others",
                "y": 21
            }
        ]
    },
    {
        "id": "norway",
        "color": "hsl(287, 70%, 50%)",
        "data": [
            {
                "x": "plane",
                "y": 221
            },
            {
                "x": "helicopter",
                "y": 291
            },
            {
                "x": "boat",
                "y": 86
            },
            {
                "x": "train",
                "y": 244
            },
            {
                "x": "subway",
                "y": 112
            },
            {
                "x": "bus",
                "y": 108
            },
            {
                "x": "car",
                "y": 109
            },
            {
                "x": "moto",
                "y": 147
            },
            {
                "x": "bicycle",
                "y": 192
            },
            {
                "x": "horse",
                "y": 222
            },
            {
                "x": "skateboard",
                "y": 10
            },
            {
                "x": "others",
                "y": 59
            }
        ]
    }
]
const LinePlot = () => {
    const [data, setData] = useState(d);
    const test = () => {
        const newData = data.slice(0, 2);
        setData(newData);
    }
    return (
        <div
            style={{
                height: 400,
            }}
        >
            <button onClick={test}>Test something weirdddd xF</button>
            <ResponsiveLine
                data={data}
                margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
                xScale={{ type: 'point' }}
                yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
                yFormat=" >-.2f"
                axisTop={null}
                axisRight={null}
                axisBottom={{
                    orient: 'bottom',
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'transportation',
                    legendOffset: 36,
                    legendPosition: 'middle'
                } as any}
                axisLeft={{
                    orient: 'left',
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'count',
                    legendOffset: -40,
                    legendPosition: 'middle'
                } as any}
                pointSize={10}
                pointColor={{ theme: 'background' }}
                pointBorderWidth={2}
                pointBorderColor={{ from: 'serieColor' }}
                pointLabelYOffset={-12}
                useMesh={true}
                legends={[
                    {
                        anchor: 'bottom-right',
                        direction: 'column',
                        justify: false,
                        translateX: 100,
                        translateY: 0,
                        itemsSpacing: 0,
                        itemDirection: 'left-to-right',
                        itemWidth: 80,
                        itemHeight: 20,
                        itemOpacity: 0.75,
                        symbolSize: 12,
                        symbolShape: 'circle',
                        symbolBorderColor: 'rgba(0, 0, 0, .5)',
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemBackground: 'rgba(0, 0, 0, .03)',
                                    itemOpacity: 1
                                }
                            }
                        ]
                    }
                ]}
            />
        </div>
    )
}

export default LinePlot;