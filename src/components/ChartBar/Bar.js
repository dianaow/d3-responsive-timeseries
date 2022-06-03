import React from "react"
import PropTypes from "prop-types"
import { accessorPropsType, callAccessor } from "../../utils/chart-utils";

const Bar = ({ data, xAccessor, yAccessor, y0Accessor, colorAccessor, width, mouseOver, ...props }) => {
  
  const barGenerator = (x, y, rx, ry, width, height) => {
    return `M${x},${y + ry}
      a${rx},${ry} 0 0 1 ${rx},${-ry}
      h${width - 2 * rx}
      a${rx},${ry} 0 0 1 ${rx},${ry}
      v${height - ry}
      h${-(width)}Z
    `;
  }
    
  return (
    <>
    { data.map((d,i) => {
      let height = callAccessor(y0Accessor, d, i) - callAccessor(yAccessor, d, i)
      let X = callAccessor(xAccessor, d, i)
      let Y = callAccessor(yAccessor, d, i)
      let event_content = {
        x: X + width/2, 
        y: Y, 
        content: d.value
      }
      return <path {...props}
        key={"bar-" + d.category + '-' + i}
        d={barGenerator(X, Y, 0, 0, width, height)}
        fill={callAccessor(colorAccessor, d, i)}
        opacity={0.8}
        onMouseOver={() => mouseOver({...event_content, show: true})}
        onMouseOut={() => mouseOver({...event_content, show: false})}
        cursor="pointer"
        pointerEvents="auto"
      />
    })}
    </>
  )
}

Bar.propTypes = {
  data: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]),
  xAccessor: accessorPropsType,
  yAccessor: accessorPropsType,
  y0Accessor: accessorPropsType,
  colorAccessor: accessorPropsType,
  width: PropTypes.number,
  mouseOver: PropTypes.func
}

Bar.defaultProps = {
  y0Accessor: 0,
  width: 6,
  mouseOver: () => {}
}

export default Bar
