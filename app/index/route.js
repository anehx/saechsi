import Route from 'ember-route'

export default Route.extend({
  model() {
    return {
      labels: [ 'Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli' ],
      datasets: [
        {
          label: 'Math',
          fill: false,
          data: [ 5, 6, 5.5, 5, 4.5, 6 ]
        },
        {
          label: 'Physik',
          fill: false,
          data: [ 4, 4, 4.5, 5, 5, 5 ]
        },
        {
          label: 'Deutsch',
          fill: false,
          data: [ 3, 4, 4.5, 5, 4.5, 5 ]
        },
      ]
    }
  }
})
