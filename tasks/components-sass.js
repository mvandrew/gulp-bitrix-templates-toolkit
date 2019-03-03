const libSass = require("../lib/components-sass");

module.exports = mbx => {
    mbx.gulp.task("components-sass", () => {
        const src   = [
            mbx.path.join(mbx.config.componentsPath, "/**/src/*.scss"),
            mbx.path.join(mbx.config.componentsPath, "/**/.default/src/*.scss")
        ];
        const dest = mbx.config.componentsPath;
        return libSass(mbx, src, dest);
    });
};
