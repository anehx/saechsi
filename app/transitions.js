export default function(){
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
    this.fromRoute('lectures.edit'),
    this.toRoute('lectures.delete'),
    this.use('toLeft'),
    this.reverse('toRight')
  )
}
