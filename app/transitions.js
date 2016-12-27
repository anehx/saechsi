export default function() {
  this.transition(
    this.fromRoute('sign.in'),
    this.toRoute('sign.up'),
    this.use('toLeft'),
    this.reverse('toRight')
  )

  this.transition(
    this.fromRoute('trends'),
    this.toRoute('timetable'),
    this.use('toLeft'),
    this.reverse('toRight')
  )

  this.transition(
    this.fromRoute('timetable'),
    this.toRoute('performance'),
    this.use('toLeft'),
    this.reverse('toRight')
  )

  this.transition(
    this.fromRoute('performance'),
    this.toRoute('settings'),
    this.use('toLeft'),
    this.reverse('toRight')
  )

  this.transition(
    this.fromRoute('settings'),
    this.toRoute('trends'),
    this.use('toLeft'),
    this.reverse('toRight')
  )
}
