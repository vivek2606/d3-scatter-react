
import { min, scaleLinear, extent } from "d3";
import { useData } from "./useData";


// Define Accessor Functions
const xAccessor = d => d.dewPoint;
const yAccessor = d => d.humidity;

// Defining Chart Dimensions
const width = min([
  window.innerWidth * 0.9,
  window.innerHeight * 0.9,
])
const dimensions = {
  width: width,
  height: width,
  margin: {
    top: 10,
    bottom: 50,
    right: 10,
    left: 50,
  }
}
dimensions.boundedHeight = dimensions.height - dimensions.margin.top - dimensions.margin.bottom;
dimensions.boundedWidth = dimensions.width - dimensions.margin.left - dimensions.margin.right;

const App = () => {
  const data = useData();

  if (!data) {
    return <pre>Loading...</pre>
  }
  const xScale = scaleLinear().domain(extent(data, xAccessor)).range([0, dimensions.boundedWidth]).nice()
  const yScale = scaleLinear().domain(extent(data, yAccessor)).range([dimensions.boundedHeight, 0]).nice()

  return (
    <div>
      <h1 className="text-center text-3xl font-extrabold p-4">Scatterplot Using D3 & React</h1>
      <svg width={dimensions.width} height={dimensions.height}>
        <g transform={`translate(${dimensions.margin.left},${dimensions.margin.top})`}>
          {xScale.ticks().map(tickValue => (
            <g>
              <line
                x1={xScale(tickValue)}
                y1={0}
                x2={xScale(tickValue)}
                y2={dimensions.boundedWidth}
                className="stroke-gray-200" />
              <text x={xScale(tickValue)} y={dimensions.boundedWidth + 20} style={{ textAnchor: 'middle' }}>{tickValue}</text>
            </g>
          ))}
          {yScale.ticks().filter((e, i) => i % 2 - 1).map(tickValue => (
            <g>
              <line
                x1={0}
                y1={yScale(tickValue)}
                x2={dimensions.boundedHeight}
                y2={yScale(tickValue)}
                className="stroke-gray-200" />
              <text y={yScale(tickValue)} x={-30} dy="0.2em">{tickValue}</text>
            </g>
          ))}
          {data.map(d =>
            <g>
              <circle cx={xScale(xAccessor(d))} cy={yScale(yAccessor(d))} r={5} className="fill-teal-700" />
              <title>{`(${xAccessor(d)},${yAccessor(d)})`}</title>
            </g>

          )}

        </g>


      </svg>
    </div>
  )
}

export default App;