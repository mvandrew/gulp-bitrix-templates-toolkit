module.exports = scriptPath => {
    return [
        mbx.path.join(scriptPath, "tasks", "fonts.js"),
        mbx.path.join(scriptPath, "tasks", "vendor-js.js"),
        mbx.path.join(scriptPath, "tasks", "vendor-css.js"),
        mbx.path.join(scriptPath, "tasks", "theme-js.js"),
        mbx.path.join(scriptPath, "tasks", "theme-sass.js"),
        mbx.path.join(scriptPath, "tasks", "browser-sync.js"),
        mbx.path.join(scriptPath, "tasks", "watch.js")
    ];
};