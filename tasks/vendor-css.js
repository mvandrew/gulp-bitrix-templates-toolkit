const libCssConcat = require("../lib/css-concat");

module.exports = () => {
    mbx.gulp.task("vendor-css", () => {
        return libCssConcat(mbx.config.vendorCssSrc, mbx.config.vendorCssFile, mbx.config.vendorCssDest);
    });
};
