var VideoPlayerView = Backbone.View.extend({
  
  initialize: function() {
    this.collection.on('select', function(video) {
      this.render(video);
    }, this);
  },

  render: function(video) {
    if (this.collection.length === 0) {
      this.$el.html('<p>Please Wait</p>');
    } else {
      video = video || this.collection.at(0);
      this.$el.html(this.template(video.attributes));
    }
    return this.$el;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
