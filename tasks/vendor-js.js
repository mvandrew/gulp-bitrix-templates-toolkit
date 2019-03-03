const libJsConcat = require("../lib/js-concat");

module.exports = () => {
    mbx.gulp.task("vendor-js", () => {
        return libJsConcat(mbx.config.vendorJsSrc, mbx.config.vendorJsFile, mbx.config.vendorJsDest);
    });
};
