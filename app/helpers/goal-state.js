import Helper       from 'ember-helper'
import roundDecimal from 'saechsi/utils/round'

export function goalState([ goal, score ]) {
  let diff = roundDecimal(score - goal)

  if (diff >= 0) {
    return 'reached'
  }
  else if (diff >= -0.2) {
    return 'close'
  }

  return 'not-reached'
}

export default Helper.helper(goalState)
