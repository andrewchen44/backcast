var Video = Backbone.Model.extend({

  initialize: function(video) {
    // override youtube's complex id field
    this.set('title', video.snippet.title);
    this.set('description', video.snippet.description);
    this.set('imageURL', video.snippet.thumbnails.default.url);
    this.set('id', video.id.videoId);
  },

  select: function() {
    this.trigger('select', this);
  }

});
