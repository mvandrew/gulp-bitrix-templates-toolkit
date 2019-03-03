const libJs = require("../lib/components-js");

module.exports = mbx => {
    mbx.gulp.task("local-components-js", () => {
        const src   = [
            mbx.path.join(mbx.config.localComponentsPath, "/**/src/*.js"),
            mbx.path.join(mbx.config.localComponentsPath, "/**/.default/src/*.js")
        ];
        const dest = mbx.config.localComponentsPath;
        return libJs(mbx, src, dest);
    });
};
