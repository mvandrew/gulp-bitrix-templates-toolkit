const libSass = require("../lib/sass");

module.exports = () => {
    mbx.gulp.task("theme-sass", () => {
        const src   = mbx.path.join(mbx.config.srcPath, "sass", "/**/*.+(sass|scss)");
        const dest  = mbx.path.join(mbx.config.assetsPath, "css");
        return libSass(src, dest);
    });
};
