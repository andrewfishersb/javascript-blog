import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  content: DS.attr(),
  user: DS.attr(),
  category: DS.attr(),
  tag: DS.attr(),
  time: DS.attr()
});
