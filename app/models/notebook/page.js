import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr('string'),
    content: DS.attr('string'),
    notebook: DS.belongsTo('notebook', { async: true }),
    pagePreview: function pagePreview(){
      var preview = this.get('content')+'';
      preview = preview.length > 35 ? preview.substring(0, 35) : preview
      preview += '...'
      return preview
    }.property('content')
}).reopenClass({
  FIXTURES:[
    {
      id: "1",
      name: 'MY first Page',
      content: "dsalj f;laskd jf;lasdkj fjj hasfl kjshad fkl.",
      notebook: "1"
    },
    {
      id: "2",
      name: 'MY 2nd Page',
      content: "dsalj f;laskd jf;lasdkj fjj hasfl kjshad fkl.",
      notebook: "1"
    }
  ]
});
