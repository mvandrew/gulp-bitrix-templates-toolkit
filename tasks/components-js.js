const libJs = require("../lib/components-js");

module.exports = () => {
    mbx.gulp.task("components-js", () => {
        const src   = [
            mbx.path.join(mbx.config.componentsPath, "/**/src/*.js"),
            mbx.path.join(mbx.config.componentsPath, "/**/.default/src/*.js")
        ];
        const dest = mbx.config.componentsPath;
        return libJs(src, dest);
    });
};
