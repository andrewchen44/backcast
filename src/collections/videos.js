var Videos = Backbone.Collection.extend({

  model: Video,
  
  url: 'https://www.googleapis.com/youtube/v3/search',

  initialize: function () {
    this.search();
  },
  
  search: function(searchString) {
    this.fetch({
      data: {
        q: searchString,
        maxResults: 5,
        type: 'video',
        videoEmbeddable: true,
        part: 'snippet',
        key: window.YOUTUBE_API_KEY,
      },
      // success: function(model, response, options) {
      //   console.log(model);
      //   if (model.length > 0) {
      //     model.at(0).select();
      //     console.log(model.at(0));
      //   }
      // }
    });
    
    
    
    
  },
  
  parse: function(data) {
    return data.items;
  },
  

});
