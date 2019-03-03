
module.exports = mbx => {
    mbx.gulp.task("fonts", () => {
        return mbx.gulp.src(mbx.config.fontFiles)
            .pipe( mbx.plumber({ errorHandler: function(err) {
                    mbx.notify.onError({
                        title: "Gulp error in " + err.plugin,
                        message:  err.toString()
                    })(err);
                }}) )
            .pipe( mbx.gulp.dest(mbx.path.join(mbx.config.assetsPath, "fonts")) );
    });
};
