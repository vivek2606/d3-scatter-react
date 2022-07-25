export const AxisBottom = ({ xScale,dimensions }) =>
  xScale.ticks().map(tickValue => (
    <g>
      <line
        x1={xScale(tickValue)}
        y1={0}
        x2={xScale(tickValue)}
        y2={dimensions.boundedWidth}
        className="stroke-gray-200" />
      <text x={xScale(tickValue)} y={dimensions.boundedWidth + 20} style={{ textAnchor: 'middle' }}>{tickValue}</text>
    </g>
  ))