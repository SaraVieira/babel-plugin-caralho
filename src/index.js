const words = require('curse-words-common');

module.exports = function({ types: t }) {
  return {
    visitor: {
    TemplateElement(path) {
        words.map(word => {
          if (path.node.value.raw.includes(`!${word}`)) {
            path.node.value.raw = path.node.value.raw.replace(`!${word}`, "!important");
          }
        });
      },
      StringLiteral(path) {
        words.map(word => {
          if (path.node.value.includes(`!${word}`)) {
            path.node.value = path.node.value.replace(`!${word}`, "!important");
          }
        });
      }
    }
  };
}
