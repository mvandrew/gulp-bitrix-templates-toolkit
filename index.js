//const path                  = require("path");

/**
 * Config init
 *
 * @param projectPath
 * @returns {{localComponentsPath: string, vendorCssFile: string, vendorJsFile: string, srcPath: string, vendorCssSrc: Array, nodePath: string, rootPath: *, vendorCssDest: string, componentsPath: string, assetsPath: string, devMode: boolean, vendorJsSrc: Array, browserSyncFiles: any[], vendorJsDest: string, browserSyncHost: string, fontFiles: Array}}
 */
// const config                = projectPath => {
//     const rootPath              = projectPath;                              // Каталог проекта
//     const srcPath               = path.join(rootPath, "src");              // Каталог с исходниками
//     const assetsPath            = path.join(rootPath, "assets");           // Каталог со статическими ресурсами
//     const componentsPath        = path.join(rootPath, "components");       // Каталог шаблонов компонент
//     const localComponentsPath   = path.join(rootPath, "../../components");  // Каталог локальных компонент (!!! не опечатка - для выхода из каталога темы)
//     const nodePath              = path.join(rootPath, "node_modules");     // Каталог node модулей
//
//     return {
//         devMode:                true,                                       // Режим разработки по-умолчанию
//         rootPath:               rootPath,                                   // Каталог проекта
//         srcPath:                srcPath,                                    // Каталог с исходниками
//         assetsPath:             assetsPath,                                 // Каталог со статическими ресурсами
//         componentsPath:         componentsPath,                             // Каталог шаблонов компонент
//         localComponentsPath:    localComponentsPath,                        // Каталог локальных компонент
//         nodePath:               nodePath,                                   // Каталог node модулей
//
//         vendorCssFile:      "vendor.css",                                   // Имя файла сборки CSS библиотек
//         vendorCssDest:      path.join(assetsPath, "css"),                  // Расположение файла сборки CSS библиотек
//         vendorCssSrc:       [],                                             // Массив подключаемых библиотек CSS
//
//         vendorJsFile:       "vendor.js",                                    // Имя файла сборки JS библиотек
//         vendorJsDest:       path.join(assetsPath, "js"),                   // Расположение файла сборки JS библиотек
//         vendorJsSrc:        [],                                             // Массив подключаемых библиотек JS
//
//         browserSyncHost:    "http://localhost",
//         browserSyncFiles:   [
//             path.join(rootPath, "*.php"),
//             path.join(rootPath, "**/*.php"),
//             path.join(rootPath, "**/.*/*.php"),
//             path.join(rootPath, "**/.*/**/*.php"),
//
//             path.join(rootPath, "*.css"),
//             // path.join(assetsPath, "css/*.css"),
//             // path.join(componentsPath, "**/*.css"),
//             // path.join(componentsPath, "**/.*/*.css"),
//             // path.join(componentsPath, "**/.*/**/*.css"),
//             //
//             // path.join(assetsPath, "js/*.js"),
//             // path.join(componentsPath, "**/*.js"),
//             // path.join(componentsPath, "**/.*/*.js"),
//             // path.join(componentsPath, "**/.*/**/*.js"),
//
//             "!" + srcPath,
//             "!" + nodePath
//         ],
//
//         fontFiles: [] // Массив источников файлов шрифтов для переноса в каталог ресурсов темы оформления
//     };
// };

class MBXTemplate {

    constructor(projectPath, siteUrl) {
        this.projectPath = projectPath;

        this.gulp = require("gulp");
        this.path = require("path");
        this.sass = require("gulp-sass");
        this.sourcemaps = require("gulp-sourcemaps");
        this.cssnano = require("gulp-cssnano");
        this.autoprefixer = require("gulp-autoprefixer");
        this.plumber = require('gulp-plumber');
        this.stripCssComments = require('gulp-strip-css-comments');
        this.notify = require('gulp-notify');
        this.gcmq = require('gulp-group-css-media-queries');
        this.gulpif = require('gulp-if');
        this.replace = require('gulp-string-replace');
        this.concat = require("gulp-concat");
        this.stripComments = require('gulp-strip-comments');
        this.babel = require('gulp-babel');
        this.uglify = require('gulp-uglify');
        this.browserSync = require('browser-sync').create();
        this.rename = require('gulp-rename');
        this.imagemin = require('gulp-imagemin');
        this.imageminPngquant = require('imagemin-pngquant');
        this.cache = require('gulp-cache');
        this.merge = require('merge-stream');
        this.imageResize = require('gulp-image-resize');
        this.spritesmith = require('gulp.spritesmith');
        this.buffer = require('vinyl-buffer');
        this.bundle = require('gulp-bundle-assets');

        this.config = this.initConfig();
        this.config.browserSyncHost = siteUrl;
    }

    /**
     * Init the default configuration.
     *
     * @returns {{localComponentsPath: string, vendorCssFile: string, vendorJsFile: string, srcPath: string, vendorCssSrc: Array, nodePath: string, rootPath: *, vendorCssDest: string, componentsPath: string, assetsPath: string, devMode: boolean, vendorJsSrc: Array, browserSyncFiles: any[], vendorJsDest: string, browserSyncHost: string, fontFiles: Array}}
     */
    initConfig() {
        const rootPath              = this.projectPath;                              // Project folder (Каталог проекта)
        const srcPath               = this.path.join(rootPath, "src");              // Каталог с исходниками
        const assetsPath            = this.path.join(rootPath, "assets");           // Каталог со статическими ресурсами
        const componentsPath        = this.path.join(rootPath, "components");       // Каталог шаблонов компонент
        const localComponentsPath   = this.path.join(rootPath, "../../components");  // Каталог локальных компонент (!!! не опечатка - для выхода из каталога темы)
        const nodePath              = this.path.join(rootPath, "node_modules");     // Каталог node модулей

        return {
            devMode:                true,                                       // Режим разработки по-умолчанию
            rootPath:               rootPath,                                   // Каталог проекта
            srcPath:                srcPath,                                    // Каталог с исходниками
            assetsPath:             assetsPath,                                 // Каталог со статическими ресурсами
            componentsPath:         componentsPath,                             // Каталог шаблонов компонент
            localComponentsPath:    localComponentsPath,                        // Каталог локальных компонент
            nodePath:               nodePath,                                   // Каталог node модулей

            vendorCssFile:      "vendor.css",                                   // Имя файла сборки CSS библиотек
            vendorCssDest:      this.path.join(assetsPath, "css"),                  // Расположение файла сборки CSS библиотек
            vendorCssSrc:       [],                                             // Массив подключаемых библиотек CSS

            vendorJsFile:       "vendor.js",                                    // Имя файла сборки JS библиотек
            vendorJsDest:       this.path.join(assetsPath, "js"),                   // Расположение файла сборки JS библиотек
            vendorJsSrc:        [],                                             // Массив подключаемых библиотек JS

            browserSyncHost:    "http://localhost",
            browserSyncFiles:   [
                this.path.join(rootPath, "*.php"),
                this.path.join(rootPath, "**/*.php"),
                this.path.join(rootPath, "**/.*/*.php"),
                this.path.join(rootPath, "**/.*/**/*.php"),

                this.path.join(rootPath, "*.css"),

                "!" + srcPath,
                "!" + nodePath
            ],

            fontFiles: [] // Массив источников файлов шрифтов для переноса в каталог ресурсов темы оформления
        };
    }

    initTasks() {
        const tasksList = require("./tasks");
        tasksList.forEach( taskName => {
            require(this.path.join(__dirname, "tasks", taskName))(this);
        });

        this.gulp.task("dev", this.gulp.series(
            //this.setDevMode,
            this.compileAssets
        ));
    }

    compileAssets() {
        this.gulp.series(
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
        );
    }

    async setDevMode() {
        this.config.devMode = true;
    }

    async setProdMode() {
        this.config.devMode = false;
    }

}

module.exports = MBXTemplate;
