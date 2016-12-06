export default function() {
  this.transition(
    this.fromRoute('login'),
    this.toRoute('register'),
    this.use('toLeft'),
    this.reverse('toRight')
  )

  this.transition(
    this.fromRoute('lectures.index'),
    this.use('toLeft'),
    this.reverse('toRight')
  )

  this.transition(
    this.fromRoute('schools.index'),
    this.use('toLeft'),
    this.reverse('toRight')
  )

  this.transition(
    this.fromRoute('semesters.index'),
    this.use('toLeft'),
    this.reverse('toRight')
  )

  this.transition(
    this.fromRoute('grades.index'),
    this.use('toLeft'),
    this.reverse('toRight')
  )
}
