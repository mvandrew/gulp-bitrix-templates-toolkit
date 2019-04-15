const libSass = require("../lib/components-sass");

module.exports = () => {
    mbx.gulp.task("components-sass", () => {
        const src   = [
            mbx.path.join(mbx.config.componentsPath, "/**/src/*.+(sass|scss)"),
            mbx.path.join(mbx.config.componentsPath, "/**/.default/src/*.+(sass|scss)")
        ];
        const dest = mbx.config.componentsPath;
        return libSass(src, dest);
    });
};
