import React from "react"
import PropTypes from "prop-types"
import * as d3 from 'd3'
import { dimensionsPropsType } from "../../utils/chart-utils";

import AxisStyled from "./AxisStyled";


const axisComponentsByDimension = {
  x: AxisHorizontal,
  y: AxisVertical,
}
const Axis = ({ dimensions, dimension, ...props }) => {
  const Component = axisComponentsByDimension[dimension]
  if (!Component) return null

  return (
    <Component
      dimensions={dimensions}
      {...props}
    />
  )
}

Axis.propTypes = {
  dimension: PropTypes.oneOf(["x", "y"]),
  dimensions: dimensionsPropsType,
  scale: PropTypes.func,
  label: PropTypes.string,
  formatTick: PropTypes.func,
}

Axis.defaultProps = {
  dimension: "x",
  scale: null,
  formatTick: d3.format(","),
  type: 'linear'
}

export default Axis


function AxisHorizontal ({ dimensions, label, formatTick, tickSize, scale, type, ...props }) {

  let ticks = 0
  if(type === 'linear'){
    const numberOfTicks = dimensions.boundedWidth < 768
          ? Math.ceil(dimensions.boundedWidth / 220)
          : Math.ceil(dimensions.boundedWidth / 200)

    ticks = scale.ticks(numberOfTicks)
  } else if (type === 'step'){

    ticks = scale.ticks(5)

  } else {
    const step = dimensions.boundedWidth < 768 ? 3 : 2

    ticks = scale.domain().filter(function(d,i){ 
        return (i%step) === 0
    })

  }

  return (
    <AxisStyled className="Axis AxisHorizontal" transform={`translate(0, ${dimensions.boundedHeight})`} {...props}>
      <line
        className="Axis__line"
        x2={dimensions.boundedWidth}
      />
      {ticks.map((tick, i) => (
        <React.Fragment key={'xaxis-' + tick}>
          <text
            className="Axis__tick"
            transform={`translate(${scale(tick)}, 25)`}
          >
            { formatTick(tick) }
          </text>
           <line
            className="Axis__tick__line"
            y2={tickSize}
            x1={scale(tick)}
            x2={scale(tick)}
          />
        </React.Fragment>
      ))}
      {label && (
        <text
          className="Axis__label"
          transform={`translate(${dimensions.boundedWidth / 2}, 60)`}
        >
          { label }
        </text>
      )}
    </AxisStyled>
  )
}

function AxisVertical ({ dimensions, label, formatTick, tickSize, scale, type, ...props }) {

  let ticks = 0
  if(type === 'linear'){
    const numberOfTicks = dimensions.boundedHeight / 50

    ticks = scale.ticks(numberOfTicks)
  } else {
    const step = dimensions.boundedHeight / 50 ? 3 : 2

    ticks = scale.domain().filter(function(d,i){ 
        return (i%step) === 0
    })
  }

  return (
    <AxisStyled className="Axis AxisVertical" {...props}>
      <line
        className="Axis__line"
        y2={dimensions.boundedHeight}
      />

      {ticks.map((tick, i) => (
        <React.Fragment key={'yaxis-' + tick}>
          <text
            className="Axis__tick"
            transform={`translate(-16, ${scale(tick)})`}
          >
            { formatTick(tick) }
          </text>
           <line
            className="Axis__tick__line"
            x2={tickSize}
            y1={scale(tick)}
            y2={scale(tick)}
          />
        </React.Fragment>
      ))}

      {label && (
        <text
          className="Axis__label"
          style={{
            transform: `translate(-56px, ${dimensions.boundedHeight / 2}px) rotate(-90deg)`
          }}
        >
          { label }
        </text>
      )}
    </AxisStyled>
  )
}