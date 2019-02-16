const path                  = require("path");

module.exports              = projectPath => {
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

        browserSyncHost:    "http://localhost",
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
