
module.exports = mbx => {
    mbx.gulp.task("browser-sync", () => {
        return mbx.browserSync.init(mbx.config.browserSyncFiles, {
            proxy: {
                target: mbx.config.browserSyncHost
            },
            injectChanges: true
        });
    });
};
