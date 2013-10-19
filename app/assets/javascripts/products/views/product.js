window.ProductDetail = Backbone.View.extend({
  className: "modal fade",
  template: JST["templates/product_detail"],

  show: function () {
    this.$el.html(this.template(this.model.toJSON()));

    this.$el.modal('show');

    return this;
  }
});
