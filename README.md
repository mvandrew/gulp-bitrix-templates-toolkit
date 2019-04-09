# Gulp Tasks для сборки шаблона 1С-Битрикс
[![NPM](https://nodei.co/npm/gulp-bitrix-templates-toolkit.png)](https://nodei.co/npm/gulp-bitrix-templates-toolkit/)

[![Build Status](https://travis-ci.org/mvandrew/gulp-bitrix-templates-toolkit.svg?branch=master)](https://travis-ci.org/mvandrew/gulp-bitrix-templates-toolkit) 
![](https://img.shields.io/npm/v/gulp-bitrix-templates-toolkit.svg?label=npm%20package&style=flat)
[![Dependencies](https://img.shields.io/david/mvandrew/gulp-bitrix-templates-toolkit.svg)](https://david-dm.org/mvandrew/gulp-bitrix-templates-toolkit)

Set of configurable Gulp tasks for use in Bitrix CMS templates.

## Установка

### Установка с использованием пакетных менеджеров

**npm**: 
```
$ npm install --save-dev gulp-bitrix-templates-toolkit
```
**yarn**:
```
yarn add -D gulp-bitrix-templates-toolkit
```

## Пример gulpfile.js

Скрипт ```gulpfile.js``` следует размещать в корне шаблона оформления: ```local/templates/[Каталог темы]/gulpfile.js```.

Списки файлов для сборки фалов стилей и скриптов поставщиков приведены для примера. Их следует заменить используемыми ресурсами в конкретном проекте.

Аналогичная ситуация с файлами шрифтов, которые размещаются в каталоге ресурсов шаблона оформления. 

```javascript
const MBXTemplate = require("gulp-bitrix-templates-toolkit");
MBXTemplate.initGlobal(__dirname, "https://site.ru", true);

// Стили для включения в общий файл стилей vendor.css
//
mbx.config.vendorCssSrc = [
    mbx.path.join(mbx.config.nodePath, "normalize.css/normalize.css"),
    mbx.path.join(mbx.config.nodePath, "lightbox2/src/css/lightbox.css")
];

// Скрипты для включения в общий файл скриптов vendor.js
//
mbx.config.vendorJsSrc = [
    mbx.path.join(mbx.config.nodePath, "jquery/dist/jquery.min.js"),
    mbx.path.join(mbx.config.nodePath, "jquery-match-height/dist/jquery.matchHeight-min.js"),
    mbx.path.join(mbx.config.nodePath, "owl.carousel/dist/owl.carousel.min.js"),
    mbx.path.join(mbx.config.nodePath, "lightbox2/src/js/lightbox.js")
];

// Пути к файлам шрифтов для копирования в каталог ресурсов шаблона оформления
//
const fontsSourcePath = mbx.path.join(mbx.config.srcPath, "fonts");
mbx.config.fontFiles = [
    mbx.path.join(fontsSourcePath, "font-awesome-4/fonts",      "*.+(otf|eot|svg|ttf|woff|woff2)"),
    mbx.path.join(fontsSourcePath, "roboto/fonts",              "*.+(otf|eot|svg|ttf|woff|woff2)"),
    mbx.path.join(fontsSourcePath, "robotoslab/fonts",          "*.+(otf|eot|svg|ttf|woff|woff2)")
];

MBXTemplate.initTasks();
```

Если пакет добавлен в проект в виде репозитория или модуля, то для инициализации константы ```MBXTemplate``` следует указать:
```javascript
const MBXTemplate = require("./src/scripts");
```

## Обработка исходных файлов по-умолчанию

Набор скриптов уже включает в себя функции сборки основных файлов шаблона оформления сайта, шаблонов оформления компонент в шаблоне сайта и шаблонов оформления собственных компонент в каталоге ```local/components```.

### Файлы стилей

Обратите внимание, что обрабатываются только исходники в формате .scss.

| Назначение                         | Исходный файл | Собранный файл |
| ---------------------------------- | ------------- | -------------- |
| Стили шаблона                      | local/templates/[Каталог темы]/src/sass/*.scss | local/templates/[Каталог темы]/assets/css/[file name].css |
| Стили компонент шаблона            | local/templates/[Каталог темы]/components/[Namespace]/[Component Name]/[Template]/src/*.scss | local/templates/[Каталог темы]/components/[Namespace]/[Component Name]/[Template]/[file name].css |
| Стили шаблонов локальных компонент | local/components/[Namespace]/[Component Name]/templates/[Template]/src/*.scss | local/components/[Namespace]/[Component Name]/templates/[Template]/[file name].css |

## Клонирование репозитория в проект

Клонирование репозитория к себе в проект имеет смысл **ТОЛЬКО** при условии внесения **собственных доработок** в скрипты. Соотвествонно, предварительно нужно сделать Fork репозитория к себе в аккаунт.

Репозиторий должен быть размещён в каталоге ```local/templates/[Каталог темы]/src/scripts```.

**Клонирование репозитория**:
```
$ git clone git@github.com:mvandrew/gulp-bitrix-templates-toolkit.git local/templates/[Каталог темы]/src/scripts
```

**Добавление модулем в репозиторий проекта**:
```
$ git submodule add git@github.com:mvandrew/gulp-bitrix-templates-toolkit.git local/templates/[Каталог темы]/src/scripts
```

Кроме этого, необходимо установить для него собственные зависимости:

**npm**:
```
$ cd local/templates/[Каталог темы]/src/scripts && npm install
```

**yarn**:
```
$ cd local/templates/[Каталог темы]/src/scripts && yarn install
```