
module.exports = (src, dest) => {

    return mbx.gulp.src( src )
        .pipe( mbx.plumber({ errorHandler: function(err) {
                mbx.notify.onError({
                    title: "Gulp error in " + err.plugin,
                    message:  err.toString()
                })(err);
            }}) )
        .pipe( mbx.cache(mbx.imagemin({
                interlaced: true,
                progressive: true,
                svgoPlugins: [{removeViewBox: false}],
                use: [mbx.imageminPngquant()]
            }))
        )
        .pipe( mbx.rename( file => {
            file.dirname = file.dirname.replace(/src\/images$/, "images");
        }) )
        .pipe( mbx.gulp.dest( dest ) );

};
