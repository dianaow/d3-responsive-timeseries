import PropTypes from 'prop-types'

export const accessorPropsType = (
  PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.number,
  ])
)

export const callAccessor = (accessor, d, i) => (
  typeof accessor === "function" ? accessor(d, i) : accessor
)

export const dimensionsPropsType = (
  PropTypes.shape({
    height: PropTypes.number,
    width: PropTypes.number,
    marginTop: PropTypes.number,
    marginRight: PropTypes.number,
    marginBottom: PropTypes.number,
    marginLeft: PropTypes.number,
  })
)

export const combineChartDimensions = (dimensions) => {
  return {
    ...dimensions,
    boundedHeight: Math.max(dimensions.height - dimensions.marginTop - dimensions.marginBottom, 0),
    boundedWidth: Math.max(dimensions.width - dimensions.marginLeft - dimensions.marginRight, 0),
  }
}
