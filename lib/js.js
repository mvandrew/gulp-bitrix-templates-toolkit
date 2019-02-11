const gulp                  = require("gulp");
const plumber               = require('gulp-plumber');
const notify                = require('gulp-notify');
const gulpif                = require('gulp-if');
const stripComments         = require('gulp-strip-comments'); // Удаление js комментариев
const babel                 = require('gulp-babel');
const uglify                = require('gulp-uglify');
const browserSync           = require('browser-sync');
const reload                = browserSync.reload;

const config                = require('../config');

module.exports = (src, dest) => {

    return gulp.src( src )
        .pipe( plumber({ errorHandler: function(err) {
                notify.onError({
                    title: "Gulp error in " + err.plugin,
                    message:  err.toString()
                })(err);
            }}) )
        .pipe( babel({ presets: ['@babel/env'] }) )
        .pipe( gulpif(!config.dev_mode, stripComments()) )
        .pipe( gulpif(!config.dev_mode, uglify()) )
        .pipe( gulp.dest(dest) )
        .pipe( reload({stream:true}) )
        .pipe( notify({ message: 'JavaScript (ECMAScript) task complete', onLast: true }) );

};