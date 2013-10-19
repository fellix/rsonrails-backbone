window.ProductForm = Backbone.View.extend({
  className: "modal fade",
  template: JST["templates/product_form"],

  events: {
    "click #commit": "commit"
  },

  initialize: function () {},

  show: function () {
    this.$el.html(this.template());

    this.$el.modal('show');

    return this;
  },

  commit: function (evt) {
    evt.preventDefault();
    var view = this;

    this.clearErrors();

    this.model.save({
      name:          this.$el.find("#name").val(),
      description:   this.$el.find("#description").val(),
      contact_email: this.$el.find("#contact_email").val()
    }, {
      success: function (model, response, options) {
        view.close();
      },
      error: function (model, xhr, options) {
        var feedback = JSON.parse(xhr.responseText);
        _.each(feedback.errors, function (errors, field) {
          var errorField = view.$el.find('#'+field);
          errorField.parents("div.control-group").addClass("error");
          errorField.parents("div.controls").append("<span class='help-inline'>" + errors.join("\n") + "</span>");
        });
      }
    })
  },

  clearErrors: function () {
    this.$el.find("div.error span.help-inline").remove();
    this.$el.find("div.error").removeClass("error");
  },

  close: function () {
    this.$el.modal('hide');
  }
});
