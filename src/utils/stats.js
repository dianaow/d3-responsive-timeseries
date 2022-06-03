import * as d3 from "d3"

export function getStats(data, categories){

  const {heart, blood_pulse} = data
  const dataNew = [...heart, ...blood_pulse]

  let stats = []
  for (const [key, value] of Object.entries(categories)) {
    const tmp = dataNew.filter(el=>el.category === key)
    const max_value = d3.max(tmp.map(el=>el.value))
    const mean_value = d3.mean(tmp.map(el=>el.value))
    stats.push({
      category : key,
      label: value,
      maximum: Math.round(max_value * 100)/100,
      average :  Math.round(mean_value * 100)/100,
    })
  }

  return stats
}
