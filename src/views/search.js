var ENTER_KEY = 13;

var SearchView = Backbone.View.extend({

  events: {
    'click button': 'handleClick',
    'keydown': 'handleKeydown'
  },
  
  handleClick: function(e) {
    this.collection.search(this.$('.form-control').val());
  },
  
  handleKeydown: function(e) {
    var code = e.keyCode || e.which;
    if (code === ENTER_KEY) {
      this.collection.search(this.$('.form-control').val());
    }
  },

  render: function() {
    this.$el.html(this.template());
    return this.$el;
  },

  template: templateURL('src/templates/search.html')

});
