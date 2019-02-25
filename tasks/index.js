module.exports = scriptPath => {
    return [
        mbx.path.join(scriptPath, "tasks", "fonts.js"),

        mbx.path.join(scriptPath, "tasks", "vendor-js.js"),
        mbx.path.join(scriptPath, "tasks", "vendor-css.js"),

        mbx.path.join(scriptPath, "tasks", "theme-img.js"),
        mbx.path.join(scriptPath, "tasks", "theme-js.js"),
        mbx.path.join(scriptPath, "tasks", "theme-sass.js"),

        mbx.path.join(scriptPath, "tasks", "components-images.js"),
        mbx.path.join(scriptPath, "tasks", "components-js.js"),
        mbx.path.join(scriptPath, "tasks", "components-sass.js"),

        mbx.path.join(scriptPath, "tasks", "local-components-js.js"),
        mbx.path.join(scriptPath, "tasks", "local-components-sass.js"),

        mbx.path.join(scriptPath, "tasks", "browser-sync.js"),
        mbx.path.join(scriptPath, "tasks", "watch.js")
    ];
};