const libSass = require("../lib/sass");

module.exports = mbx => {
    mbx.gulp.task("theme-sass", () => {
        const src   = mbx.path.join(mbx.config.srcPath, "sass", "/**/*.scss");
        const dest  = mbx.path.join(mbx.config.assetsPath, "css");
        return libSass(mbx, src, dest);
    });
};
