/*
 *closures
 *mixins
 * */
module.exports = function(grunt){
    grunt.initConfig({
        pkg : grunt.file.readJSON("package.json"),
        /*
        * Configuramos todos los modulos que usará grunt con
        * el siguiente formato:
        * modulo:{ //configuracion },
        * modulo:{ //configuracion }
        * */
       concat:{
        dist : {
            src : ['js/**/*.js'],
            dest: 'js/<%= pkg.name %>.js',
            separator : ";"
        }
       },
       uglify:{
        options : {
            banner : "/*! <%=pkg.name %> - <%=pkg.version %>"+
                "  <%=grunt.template.today('dd-mm-yyyy') %> */\n"
        },
        dist:{
            files:{
                "js/<%=pkg.name %>.min.js" : ["<%=concat.dist.dest %>"]
            }
        }
       },
        stylus:{
            compile:{
                files:{
                    "css/<%=pkg.name %>.css": ["css/*.styl"]
                }
            }
        }

    });

    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-stylus")
    grunt.registerTask("default",["concat","uglify","stylus"]);
}
