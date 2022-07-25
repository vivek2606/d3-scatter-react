export const ScatterPlot = ({ data, xScale, yScale, xAccessor,yAccessor }) =>
  data.map(d =>
    <g>
      <circle cx={xScale(xAccessor(d))} cy={yScale(yAccessor(d))} r={5} className="fill-teal-700" />
      <title>{`(${xAccessor(d)},${yAccessor(d)})`}</title>
    </g>

  )
