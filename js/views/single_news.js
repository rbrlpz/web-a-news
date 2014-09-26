WebANews.Views.SingleNews = Backbone.View.extend({
    template: Handlebars.compile($("#single-news").html()),
    render:function(){
        this.$el.append(this.template(this.model.toJSON()));
    },
});
