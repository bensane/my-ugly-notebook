import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr('string'),
    description: DS.attr('string'),
    pages: DS.hasMany('notebook.page',{ async: true })
}).reopenClass({
  FIXTURES: [
    {
      id: "1",
      name: "Notes",
      description: "My general notes.",
      pages: ["1", "2"]
    },
    {
      id: "2",
      name: "Grocery Lists",
      description: "Lists on lists on lists",
      pages: []
    }
  ]
});
