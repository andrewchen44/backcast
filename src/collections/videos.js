var Videos = Backbone.Collection.extend({

  model: Video,

  initialize: function (values) {
    this.set(values);
  }
});
