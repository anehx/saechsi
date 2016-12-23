import Transform from 'ember-data/transform'
import moment    from 'moment'

export default Transform.extend({
  format: 'YYYY-MM-DD',

  deserialize(serialized) {
    let date = moment(serialized, this.get('format'))

    return date.isValid() ? date : null
  },

  serialize(deserialized) {
    return deserialized.format(this.get('format'))
  }
})
