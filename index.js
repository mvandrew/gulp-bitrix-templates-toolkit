const { posix }             = require("path");

module.exports          = projectPath => {
    const rootPath          = projectPath;                              // Каталог проекта
    const srcPath           = posix.join(rootPath, "src");              // Каталог с исходниками
    const assetsPath        = posix.join(rootPath, "assets");           // Каталог со статическими ресурсами
    const componentsPath    = posix.join(rootPath, "components");       // Каталог шаблонов компонент
    const nodePath          = posix.join(rootPath, "node_modules");     // Каталог node модулей

    return {
        devMode:            true,               // Режим разработки по-умолчанию
        rootPath:           rootPath,           // Каталог проекта
        srcPath:            srcPath,            // Каталог с исходниками
        assetsPath:         assetsPath,         // Каталог со статическими ресурсами
        componentsPath:     componentsPath,     // Каталог шаблонов компонент
        nodePath:           nodePath,           // Каталог node модулей

        vendorCssFile:      "vendor.css",                       // Имя файла сборки CSS библиотек
        vendorCssDest:      posix.join(assetsPath, "css"),      // Расположение файла сборки CSS библиотек
        vendorCssSrc:       [],                                 // Массив подключаемых библиотек CSS

        vendorJsFile:       "vendor.js",                        // Имя файла сборки JS библиотек
        vendorJsDest:       posix.join(assetsPath, "js"),       // Расположение файла сборки JS библиотек
        vendorJsSrc:        [],                                 // Массив подключаемых библиотек JS

        browserSyncHost:    "http://localhost",
        browserSyncFiles:   [
            posix.join(rootPath, "*.php"),
            posix.join(rootPath, "**/*.php"),
            posix.join(rootPath, "**/.*/*.php"),
            posix.join(rootPath, "**/.*/**/*.php"),

            posix.join(rootPath, "*.css"),
            posix.join(assetsPath, "css/*.css"),
            posix.join(componentsPath, "**/*.css"),
            posix.join(componentsPath, "**/.*/*.css"),
            posix.join(componentsPath, "**/.*/**/*.css"),

            posix.join(assetsPath, "js/*.js"),
            posix.join(componentsPath, "**/*.js"),
            posix.join(componentsPath, "**/.*/*.js"),
            posix.join(componentsPath, "**/.*/**/*.js"),

            "!" + srcPath,
            "!" + nodePath
        ]
    };
};
