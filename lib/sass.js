
module.exports = (mbx, src, dest) => {

    return mbx.gulp.src( src )
        .pipe( mbx.plumber({ errorHandler: function(err) {
                mbx.notify.onError({
                    title: "Gulp error in " + err.plugin,
                    message:  err.toString()
                })(err);
            }}) )
        .pipe( mbx.gulpif( mbx.config.devMode, mbx.sourcemaps.init()) )
        .pipe( mbx.sass() )
        .pipe( mbx.autoprefixer(
            ['last 2 versions'],
            { cascade: false }
        ) )
        .pipe( mbx.gcmq() )
        .pipe( mbx.gulpif( !mbx.config.devMode, mbx.stripCssComments({preserve: false})) )
        .pipe( mbx.gulpif( !mbx.config.devMode, mbx.cssnano()) )
        .pipe( mbx.gulpif( mbx.config.devMode, mbx.sourcemaps.write()) )
        .pipe( mbx.replace(/content\s*:\s*("|')[^\\"']+("|')/g, data => {
            const contentVal    = data.match(/("|')[^\\"']+("|')/i);
            let rawVal          = contentVal[0].match(/[^\\"']+/i);
            rawVal              = escape(rawVal).toLowerCase().replace(/%u/g, "\\");
            return "content: \"" + rawVal + "\";";
        }) )
        .pipe( mbx.gulp.dest( dest ) )
        .pipe( mbx.browserSync.reload({stream: true}) )
        .pipe( mbx.notify({ message: 'Styles task complete', onLast: true }) );

};
