WebANews.NewsRouter = Backbone.Router.extend({
    routes:{
        "":"index",
        "news/:id": "news"
    },
    index: function(){
        console.log("Estoy en el index");
    },
    news : function(id){
        console.log("Consultando la noticia: "+id);
    }
});

WebANews.application = new WebANews.NewsRouter();
Backbone.history.start();
