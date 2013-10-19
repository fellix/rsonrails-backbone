//= require_tree ./views


window.ProductApp = Backbone.View.extend({
  el: $("#app"),

  initialize: function () {
    this.collection = new Products;
  },

  render: function () {
    var list = new ProductList({ collection: this.collection });

    this.$el.append(list.render().el);

    return this;
  }
});

$(function () {
  new ProductApp().render();
})
