window.Product = Backbone.Model.extend({
  urlRoot: "/products"
});

window.Products = Backbone.Collection.extend({
  model: Product,
  url: "/products"
});
