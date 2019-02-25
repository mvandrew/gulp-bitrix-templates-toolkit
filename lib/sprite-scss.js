
module.exports = (src, imgDest, scssDest, spriteName, width, height, imgPath, spritePrefix) => {
    const imgName = mbx.path.join(imgPath, spriteName + ".png");
    const cssName = "_" + spriteName + ".scss";

    const spriteData = mbx.gulp.src(src)
        .pipe( mbx.plumber({ errorHandler: function(err) {
                mbx.notify.onError({
                    title: "Gulp error in " + err.plugin,
                    message:  err.toString()
                })(err);
            }}) )
        .pipe( mbx.imageResize({
            width: width,
            height: height,
            crop: true,
            upscale: true,
            imageMagick: true
        }))
        .pipe( mbx.spritesmith({
            imgName: imgName,
            cssName: cssName,
            cssFormat: "scss",
            algorithm: "binary-tree",
            cssVarMap: sprite => {
                sprite.name = spritePrefix + "-" + sprite.name
            }
        }));

    const imgStream = spriteData.img
        .pipe( mbx.plumber({ errorHandler: function(err) {
                mbx.notify.onError({
                    title: "Gulp error in " + err.plugin,
                    message:  err.toString()
                })(err);
            }}) )
        .pipe( mbx.buffer() )
        .pipe( mbx.cache( mbx.imagemin({
                interlaced: true,
                progressive: true,
                svgoPlugins: [{removeViewBox: false}],
                use: [mbx.imageminPngquant()]
            }))
        )
        .pipe( mbx.gulp.dest(imgDest) );

    const cssStream = spriteData.css
        .pipe( mbx.gulp.dest(scssDest) );

    return mbx.merge(imgStream, cssStream)
        .pipe( mbx.notify({
            message: "Sprite task completed: " + spriteName,
            onLast: true
        }));
};
