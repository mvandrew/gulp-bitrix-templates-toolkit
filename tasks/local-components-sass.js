const libSass = require("../lib/components-sass");

module.exports = () => {
    mbx.gulp.task("local-components-sass", () => {
        const src   = [
            mbx.path.join(mbx.config.localComponentsPath, "/**/src/*.+(sass|scss)"),
            mbx.path.join(mbx.config.localComponentsPath, "/**/.default/src/*.+(sass|scss)")
        ];
        const dest = mbx.config.localComponentsPath;
        return libSass(src, dest);
    });
};
