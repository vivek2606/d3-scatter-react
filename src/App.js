
import { min, scaleLinear, extent } from "d3";
import { useData } from "./useData";
import { AxisBottom } from "./AxisBottom";
import { AxisLeft } from "./AxisLeft";
import { ScatterPlot } from "./ScatterPlot";


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
          <AxisBottom xScale={xScale} dimensions={dimensions} />
          <AxisLeft yScale={yScale} dimensions={dimensions} />
          <ScatterPlot data={data} xScale={xScale} yScale={yScale} xAccessor={xAccessor} yAccessor={yAccessor} />
        </g>


      </svg>
    </div>
  )
}

export default App;