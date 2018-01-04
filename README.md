# babel-plugin-caralho

Babel plugin for writing curse words instead of important because reasons



## Example

The example is in styled-components but it also works with [Glamor](https://github.com/threepointone/glamor) as seen [here](https://astexplorer.net/#/gist/6225cf36044cc4b94fc93017d7ec2090/latest) and [Emotion](https://github.com/emotion-js/emotion) as seen [here](https://astexplorer.net/#/gist/a1d088dd71fcaec5cab193f25b4433a6/3ea1da764aec36d0597ae5fd90d20fc0ec1abe74) because it just looks for strings.


**In**

```js
import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip !fuck;
`;

render(
  <Wrapper>
    <Title>Hello World, this is my styled component!</Title>
  </Wrapper>
);
```

**Out**

```js
import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip !important;
`;

render(
  <Wrapper>
    <Title>Hello World, this is my styled component!</Title>
  </Wrapper>
);
```

## Installation

```sh
$ npm install babel-plugin-caralho --save-dev
or
$ yarn add babel-plugin-caralho --dev
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "plugins": ["caralho"]
}
```

### Via CLI

```sh
$ babel --plugins caralho script.js
```

### Via Node API

```javascript
require("babel-core").transform("code", {
  plugins: ["caralho"]
});
```

## Words

Instead of `!fuck`, you can also choose from [many more](https://github.com/SaraVieira/curse-words) options in different languages and all of them will become `!important` after Babel does his/her thing.

## I want to add words !

Awesome ! You can create a PR here:
[https://github.com/SaraVieira/curse-words](https://github.com/SaraVieira/curse-words) and these tests and the ones in [https://github.com/SaraVieira/postcss-caralho](https://github.com/SaraVieira/postcss-caralho) will be generated automatically 🎉


## License

Use as you please to confuse people and enjoy (MIT)
