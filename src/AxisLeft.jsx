export const AxisLeft = ({ yScale, dimensions }) =>
  yScale.ticks().filter((e, i) => i % 2 - 1).map(tickValue => (
    <g>
      <line
        x1={0}
        y1={yScale(tickValue)}
        x2={dimensions.boundedHeight}
        y2={yScale(tickValue)}
        className="stroke-gray-200" />
      <text y={yScale(tickValue)} x={-30} dy="0.2em">{tickValue}</text>
    </g>
  ))