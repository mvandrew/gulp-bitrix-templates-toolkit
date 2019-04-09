# Gulp Tasks для сборки шаблона 1С-Битрикс
[![NPM](https://nodei.co/npm/gulp-bitrix-templates-toolkit.png)](https://nodei.co/npm/gulp-bitrix-templates-toolkit/)

[![Build Status](https://travis-ci.org/mvandrew/gulp-bitrix-templates-toolkit.svg?branch=master)](https://travis-ci.org/mvandrew/gulp-bitrix-templates-toolkit) 
![](https://img.shields.io/npm/v/gulp-bitrix-templates-toolkit.svg?label=npm%20package&style=flat)
[![Dependencies](https://img.shields.io/david/mvandrew/gulp-bitrix-templates-toolkit.svg)](https://david-dm.org/mvandrew/gulp-bitrix-templates-toolkit)

Set of configurable Gulp tasks for use in Bitrix templates.

В стадии разработки.

Under development.

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

## Как обрабатываются файлы

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