const libImages = require("../lib/components-images");

module.exports = mbx => {
    mbx.gulp.task("components-images", () => {
        const src   = [
            mbx.path.join(mbx.config.componentsPath, "/**/src/images/**/*.+(jpeg|jpg|png)"),
            mbx.path.join(mbx.config.componentsPath, "/**/.default/src/images/**/*.+(jpeg|jpg|png)")
        ];
        const dest = mbx.config.componentsPath;
        return libImages(mbx, src, dest);
    });
};
