WebANews.NewsView = Backbone.View.extend({
    tagName:"article",
    className:"noticia",
    template: Handlebars.compile($("#tplNews").html()),
    render:function(){
        this.$el.append(this.template(this.model.toJSON()));
    }
});
