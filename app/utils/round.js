const { pow, round } = Math

export default function roundDecimal(value, precision = 1) {
  let multiplier = pow(10, precision)

  return round(value * multiplier) / multiplier
}
