import Helper from 'ember-helper'

export const BREAKPOINTS = {
  neutral: { min: 0.0, max: 0.0 },
  bad:     { min: 1.0, max: 3.9 },
  ok:      { min: 4.0, max: 4.9 },
  good:    { min: 5.0, max: 6.0 }
}

export function gradeState([ grade ]) {
  return Object.keys(BREAKPOINTS).find(breakpoint => {
    let cond = BREAKPOINTS[breakpoint]

    return grade >= cond.min && grade <= cond.max
  })
}

export default Helper.helper(gradeState)
