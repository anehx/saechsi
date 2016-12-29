import Helper from 'ember-helper'

export function formatGrade([ grade ]) {
  return parseFloat(grade).toFixed(1)
}

export default Helper.helper(formatGrade)
