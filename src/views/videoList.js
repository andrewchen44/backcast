var VideoListView = Backbone.View.extend({
  
  initialize: function () {
    this.collection.on('sync', this.render, this);
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    var $list = this.$el.find('.video-list').empty();
    this.collection.forEach(function(video) {
      $list.append(new VideoListEntryView({model: video}).render());
    });
    return this.$el;
  },

  template: templateURL('src/templates/videoList.html')

});
