
module.exports = value => {
   return "./" + mbx.path.relative(mbx.config.rootPath, value).replace(/\\/g, '/');
};
