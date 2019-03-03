const libJs = require("../lib/js");

module.exports = () => {
    mbx.gulp.task("theme-js", () => {
        const src   = mbx.path.join(mbx.config.srcPath, "js", "/**/*.js");
        const dest  = mbx.path.join(mbx.config.assetsPath, "js");
        return libJs(src, dest);
    });
};
