var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos();
    this.videos.on('sync', function() {
      if (this.videos.length > 0) {
        this.videos.at(0).select();
      }
    }, this);
    this.render();
  },


  render: function() {
    this.$el.html(this.template());
    
    new VideoListView({
      el: this.$('.list'),
      collection: this.videos
    }).render();
    
    new VideoPlayerView({
      el: this.$('.player'),
      collection: this.videos
    }).render();
    
    new SearchView({
      el: this.$('.search'),
      collection: this.videos
    }).render();
    
    return this;
  },
    

  template: templateURL('src/templates/app.html')

});
