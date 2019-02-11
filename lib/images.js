const gulp                  = require("gulp");
const plumber               = require('gulp-plumber');
const notify                = require('gulp-notify');
const imagemin              = require('gulp-imagemin');
const imageminPngquant      = require('imagemin-pngquant');
const cache                 = require('gulp-cache');

module.exports = (src, dest) => {

    return gulp.src( src )
        .pipe( plumber({ errorHandler: function(err) {
                notify.onError({
                    title: "Gulp error in " + err.plugin,
                    message:  err.toString()
                })(err);
            }}) )
        .pipe( cache(imagemin({
                interlaced: true,
                progressive: true,
                svgoPlugins: [{removeViewBox: false}],
                use: [imageminPngquant()]
            }))
        )
        .pipe( gulp.dest( dest ) );

};