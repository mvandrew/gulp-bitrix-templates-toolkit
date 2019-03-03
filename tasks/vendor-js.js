const libJsConcat = require("../lib/js-concat");

module.exports = mbx => {
    mbx.gulp.task("vendor-js", () => {
        return libJsConcat(mbx, mbx.config.vendorJsSrc, mbx.config.vendorJsFile, mbx.config.vendorJsDest);
    });
};
