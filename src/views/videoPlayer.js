var VideoPlayerView = Backbone.View.extend({
  
  initialize: function() {
    this.collection.on('select', this.render, this);
  },

  render: function() {
    console.log(this.collection.op);
    this.$el.html(this.template(this.collection.shift().attributes));
    return this.$el;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
