const libCssConcat = require("../lib/css-concat");

module.exports = mbx => {
    mbx.gulp.task("vendor-css", () => {
        return libCssConcat(mbx, mbx.config.vendorCssSrc, mbx.config.vendorCssFile, mbx.config.vendorCssDest);
    });
};
