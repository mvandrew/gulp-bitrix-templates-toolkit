
module.exports = (src, filename,  dest) => {

    return mbx.gulp.src(src)
        .pipe(mbx.plumber({
            errorHandler: function (err) {
                mbx.notify.onError({
                    title: "Gulp error in " + err.plugin,
                    message: err.toString()
                })(err);
            }
        }))
        .pipe(mbx.gulpif(!mbx.config.devMode, mbx.stripCssComments({preserve: false})))
        .pipe(mbx.concat(filename))
        .pipe(mbx.gulpif(!mbx.config.devMode, mbx.cssnano()))
        .pipe(mbx.gulp.dest(dest));

};
