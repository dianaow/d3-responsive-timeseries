import React from "react";
import PropTypes from "prop-types"

import StatPanel from "./StatPanel"

import { getStats } from "../../utils/stats"
import { combineChartDimensions } from "../../utils/chart-utils"
import { withContext } from "./Provider";

const ChartWithPanel = (Component) => {

  const Chart = ({dims, ...props}) => {

    const dimensions = combineChartDimensions({width: dims ? dims.width : 0, height: dims ? dims.height-60 : 0, marginLeft: 80, marginTop: 80, marginRight: 30, marginBottom: 30})

    const { data, id, metrics } = props
    const stats = getStats(data, metrics.categories)
    
    return (  
      <div className={id}> 
        <div style={{display: 'flex'}}>
        { (dimensions.boundedWidth >= 600 && metrics.position === 'top') && <StatPanel data={stats} metrics={metrics} direction="right"/> } 
        </div>
        <div style={{position: 'relative'}}> 
          { dims && <Component  {...props}
            data={data}
            dimensions={dimensions}
          /> }
        </div>
         <div style={{display: 'flex', flexDirection: dimensions.boundedWidth < 600 ? 'column' : 'row'}}>
          { (dimensions.boundedWidth >= 600 && metrics.position === 'bottom') && <StatPanel data={stats} metrics={metrics} direction="right"/> }
          { (dimensions.boundedWidth < 600) && <StatPanel data={stats} metrics={metrics} direction="left"/> }
        </div>
      </div>
    )
  }

  return withContext(Chart)

}

ChartWithPanel.propTypes = {
  Component: PropTypes.element
}

export default ChartWithPanel