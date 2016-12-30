import Helper from 'ember-helper'

export function formatGrade([ grade ]) {
  if (!grade) return '-'

  return parseFloat(grade).toFixed(1)
}

export default Helper.helper(formatGrade)
