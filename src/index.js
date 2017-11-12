const words = require('curse-words-common');

export default function({ types: t }) {
  return {
    visitor: {
      TemplateElement(path) {
        words.map(word => {
          if (path.node.value.raw.includes(`!${word}`)) {
            path.node.value.raw = path.node.value.raw.replace(
              `!${word}`,
              '!important'
            );
          }
        });
      }
    }
  };
}
