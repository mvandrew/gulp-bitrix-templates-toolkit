
const filterPath = require("../lib/filter-path");

module.exports = () => {
    mbx.gulp.task("watch", () => {
        mbx.gulp.watch(filterPath(mbx.path.join(mbx.config.srcPath, "sass", "/**/*.scss")), mbx.gulp.series("theme-sass"));
    });
};
