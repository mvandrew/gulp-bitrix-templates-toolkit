const path                  = require("path");

/**
 * Config init
 *
 * @param projectPath
 * @returns {{localComponentsPath: string, vendorCssFile: string, vendorJsFile: string, srcPath: string, vendorCssSrc: Array, nodePath: string, rootPath: *, vendorCssDest: string, componentsPath: string, assetsPath: string, devMode: boolean, vendorJsSrc: Array, browserSyncFiles: any[], vendorJsDest: string, browserSyncHost: string, fontFiles: Array}}
 */
const config                = (projectPath, siteUrl) => {
    const rootPath              = projectPath;                              // Каталог проекта
    const srcPath               = path.join(rootPath, "src");              // Каталог с исходниками
    const assetsPath            = path.join(rootPath, "assets");           // Каталог со статическими ресурсами
    const componentsPath        = path.join(rootPath, "components");       // Каталог шаблонов компонент
    const localComponentsPath   = path.join(rootPath, "../../components");  // Каталог локальных компонент (!!! не опечатка - для выхода из каталога темы)
    const nodePath              = path.join(rootPath, "node_modules");     // Каталог node модулей

    return {
        devMode:                true,                                       // Режим разработки по-умолчанию
        rootPath:               rootPath,                                   // Каталог проекта
        srcPath:                srcPath,                                    // Каталог с исходниками
        assetsPath:             assetsPath,                                 // Каталог со статическими ресурсами
        componentsPath:         componentsPath,                             // Каталог шаблонов компонент
        localComponentsPath:    localComponentsPath,                        // Каталог локальных компонент
        nodePath:               nodePath,                                   // Каталог node модулей

        vendorCssFile:      "vendor.css",                                   // Имя файла сборки CSS библиотек
        vendorCssDest:      path.join(assetsPath, "css"),                  // Расположение файла сборки CSS библиотек
        vendorCssSrc:       [],                                             // Массив подключаемых библиотек CSS

        vendorJsFile:       "vendor.js",                                    // Имя файла сборки JS библиотек
        vendorJsDest:       path.join(assetsPath, "js"),                   // Расположение файла сборки JS библиотек
        vendorJsSrc:        [],                                             // Массив подключаемых библиотек JS

        browserSyncHost:    typeof siteUrl == "undefined" ? "http://localhost" : siteUrl,
        browserSyncFiles:   [
            path.join(rootPath, "*.php"),
            path.join(rootPath, "**/*.php"),
            path.join(rootPath, "**/.*/*.php"),
            path.join(rootPath, "**/.*/**/*.php"),

            path.join(rootPath, "*.css"),
            // path.join(assetsPath, "css/*.css"),
            // path.join(componentsPath, "**/*.css"),
            // path.join(componentsPath, "**/.*/*.css"),
            // path.join(componentsPath, "**/.*/**/*.css"),
            //
            // path.join(assetsPath, "js/*.js"),
            // path.join(componentsPath, "**/*.js"),
            // path.join(componentsPath, "**/.*/*.js"),
            // path.join(componentsPath, "**/.*/**/*.js"),

            "!" + srcPath,
            "!" + nodePath
        ],

        fontFiles: [] // Массив источников файлов шрифтов для переноса в каталог ресурсов темы оформления
    };
};

const rq = (module_name, projectPath, useProjectPath) => {
    return require(useProjectPath === true ? path.join(projectPath, "node_modules", module_name) : module_name);
};

const initGlobal = (projectPath, siteUrl, useProjectPath) => {

    global.mbx = {
        config:                     config(projectPath, siteUrl),

        gulp:                       rq("gulp", projectPath, useProjectPath),
        path:                       rq("path", projectPath, useProjectPath),
        sass:                       rq("gulp-sass", projectPath, useProjectPath),
        sourcemaps:                 rq("gulp-sourcemaps", projectPath, useProjectPath),
        cssnano:                    rq("gulp-cssnano", projectPath, useProjectPath),
        autoprefixer:               rq("gulp-autoprefixer", projectPath, useProjectPath),
        plumber:                    rq('gulp-plumber', projectPath, useProjectPath),
        stripCssComments:           rq('gulp-strip-css-comments', projectPath, useProjectPath),
        notify:                     rq('gulp-notify', projectPath, useProjectPath),
        gcmq:                       rq('gulp-group-css-media-queries', projectPath, useProjectPath),
        gulpif:                     rq('gulp-if', projectPath, useProjectPath),
        replace:                    rq('gulp-string-replace', projectPath, useProjectPath),
        concat:                     rq("gulp-concat", projectPath, useProjectPath),
        stripComments:              rq('gulp-strip-comments', projectPath, useProjectPath),
        babel:                      rq('gulp-babel', projectPath, useProjectPath),
        uglify:                     rq('gulp-uglify', projectPath, useProjectPath),
        browserSync:                rq('browser-sync', projectPath, useProjectPath).create(),
        rename:                     rq('gulp-rename', projectPath, useProjectPath),
        imagemin:                   rq('gulp-imagemin', projectPath, useProjectPath),
        imageminPngquant:           rq('imagemin-pngquant', projectPath, useProjectPath),
        cache:                      rq('gulp-cache', projectPath, useProjectPath),
        merge:                      rq('merge-stream', projectPath, useProjectPath),
        imageResize:                rq('gulp-image-resize', projectPath, useProjectPath),
        spritesmith:                rq('gulp.spritesmith', projectPath, useProjectPath),
        buffer:                     rq('vinyl-buffer', projectPath, useProjectPath),
        bundle:                     rq("gulp-bundle-assets", projectPath, useProjectPath)
    };
};
module.exports.initGlobal = initGlobal;

// Установка режима разработки
//
const setDevMode = async () => {
    mbx.config.devMode = true;
};

// Установка production режима
//
const setProdMode = async () => {
    mbx.config.devMode = false;
};

const initTasks = () => {
    const scriptTasks = require("./tasks");
    scriptTasks.forEach( taskName => {
        require(path.join(__dirname, "tasks", taskName))();
    });

    mbx.gulp.task("assets", mbx.gulp.series(
        "fonts",

        "local-components-js",
        "local-components-sass",

        "vendor-js",
        "vendor-css",

        "theme-img",
        "theme-js",
        "theme-sass",

        "components-images",
        "components-js",
        "components-sass"
    ));

    // Сборка для разработки
    //
    mbx.gulp.task("dev", mbx.gulp.series(
        setDevMode,
        "assets"
    ));

    // Сборка для production
    //
    mbx.gulp.task("prod", mbx.gulp.series(
        setProdMode,
        "assets"
    ));

    // Задание по-умолчанию
    //
    mbx.gulp.task("default",
        mbx.gulp.series(
            "dev",
            mbx.gulp.parallel("watch", "browser-sync")
        )
    );

};
module.exports.initTasks = initTasks;
