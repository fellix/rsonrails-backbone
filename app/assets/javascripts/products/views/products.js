window.ProductList = Backbone.View.extend({
  className: "span12",

  events: {
    "click #new-product": "newProduct"
  },

  initialize: function () {
    this.collection.on("add", this.addItem, this);
    this.collection.fetch();
  },

  render: function () {
    this.$el.html('<div class="span12"><a href="#" id="new-product" class="btn btn-large btn-primary">Adicionar produto</a></div>');
    return this;
  },

  addItem: function (product) {
    var item = new ProductItem({ model: product });

    this.$el.append(item.render().el);
  },

  newProduct: function (evt) {
    evt.preventDefault();

    var product = new Product;
    product.on("sync", function (model) {
      this.collection.add(model);
    }, this);

    var form = new ProductForm({ model: product });
    form.show();
  }
});

window.ProductItem = Backbone.View.extend({
  className: "well span2",
  template: JST["templates/product_item"],

  events: {
    "click .more-info": "showDetails"
  },

  initialize: function () {
    this.model.on("change", this.render, this);
  },

  render: function () {
    this.$el.html(this.template(this.model.toJSON()));

    return this;
  },

  showDetails: function () {
    var detail = new ProductDetail({ model: this.model });
    detail.show();
  }
});
