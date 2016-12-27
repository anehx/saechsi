import Component from 'ember-component'
import computed  from 'ember-computed-decorators'

const SxIconComponent = Component.extend({
  tagName: 'i',

  icon: null,

  @computed('icon')
  iconName(icon) {
    return `ion-${icon}`
  },

  classNames: [ 'icon' ],
  classNameBindings: [ 'iconName' ]
})

SxIconComponent.reopenClass({
  positionalParams: [ 'icon' ]
})

export default SxIconComponent
