
const filterPath = require("../lib/filter-path");

module.exports = () => {
    mbx.gulp.task("watch", () => {

        mbx.gulp.watch(filterPath(mbx.path.join(mbx.config.srcPath, "sass", "/**/*.scss")), mbx.gulp.series("theme-sass"));
        mbx.gulp.watch(filterPath(mbx.path.join(mbx.config.srcPath, "js", "/**/*.js")), mbx.gulp.series("theme-js"));


        mbx.gulp.watch(
            [
                filterPath(mbx.path.join(mbx.config.componentsPath, "/**/src/*.scss")),
                filterPath(mbx.path.join(mbx.config.componentsPath, "/**/.default/src/*.scss"))
            ],
            mbx.gulp.series("components-sass")
        );

        mbx.gulp.watch(
            [
                filterPath(mbx.path.join(mbx.config.componentsPath, "/**/src/*.js")),
                filterPath(mbx.path.join(mbx.config.componentsPath, "/**/.default/src/*.js"))
            ],
            mbx.gulp.series("components-js")
        );


        mbx.gulp.watch(
            [
                filterPath(mbx.path.join(mbx.config.localComponentsPath, "/**/src/*.scss")),
                filterPath(mbx.path.join(mbx.config.localComponentsPath, "/**/.default/src/*.scss"))
            ],
            mbx.gulp.series("local-components-sass")
        );

        mbx.gulp.watch(
            [
                filterPath(mbx.path.join(mbx.config.localComponentsPath, "/**/src/*.js")),
                filterPath(mbx.path.join(mbx.config.localComponentsPath, "/**/.default/src/*.js"))
            ],
            mbx.gulp.series("local-components-js")
        );
    });
};
