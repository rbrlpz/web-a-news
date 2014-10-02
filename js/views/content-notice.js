WebANews.Views.ContentNotice = Backbone.View.extend({
template : Handlebars.compile($("#fullNew").html()),
render: function(){
this.$el.append(this.template(this.model.toJSON()));
}
});
