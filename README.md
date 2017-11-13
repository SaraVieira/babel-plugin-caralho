# babel-plugin-caralho

Babel plugin for writing curse words instead of important because reasons

<a target='_blank' rel='nofollow' href='https://app.codesponsor.io/link/TcwA1EShekGpPzRyQvGn9ysQ/SaraVieira/babel-plugin-caralho'>
  <img alt='Sponsor' width='888' height='68' src='https://app.codesponsor.io/embed/TcwA1EShekGpPzRyQvGn9ysQ/SaraVieira/babel-plugin-caralho.svg' />
</a>

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

### Portuguese
* caralho (fuck)
* foda-se (fuck)
* merda (shit)
* desculpa (sorry)
* putaqpariu (fuck this)
* desisto (I quit)
* bardamerda (This rally does not have a translation)

### Brazilian
* filhodaputa (son of a bitch)
* demonio (demon)
* satanas (satan)
* desgraça (disgrace)
* paunocu (stick in the ass)
* feijoada (This rally does not have a translation)

### English
* fuckthis
* fuck
* sorry
* shit
* please

### German
* scheisse (fuck)
* scheiße (crap)
* verdammt (damned)
* kacke (shit)

### Persian (These google translation may be wrong)
* jakesh (Pussy)
* daus (Sickle)
* antar (Ether)
* pofuz (Poufos)
* lanati (Damn)
* lamasab (Lomost)

### Konkani (Google cannot translate PR anyone ?)
* chont
* fodo
* fodri
* zov

### Hindi (Googles translations are horrible PR anyone ?)
* lund
* lavda
* choot

### Russian
* блять (fuck)
* сука (bitch)
* тварь (creature)
* работай (work)
* чезахуйня (chezahuyna?)
* гандон (Gondon?)
* скемнебывает (It happens to everyone)
* упс (oops)
* ебанина (fucker)
* какаятоебанина (a kind of banana)

### Spanish
* joder (fuck)
* mierda (shit)
* perdona (sorry)
* porfavor (please)

### French
* merde (shit)
* putain (fuck)
* saloperie (fucking thing)
* couillon (fucker)
* con (twat)
* foutu (fucked)
* trouduc (asshole)
* enfoiré (untranslatable, lit. "covered in shit")
* bordel (used like fuck, lit. "bordello")
* chier (to shit)
* abruti (dulled by work)
* crève (die)
* enflure (untranslatable, lit. "swollen inflamation")
* pardon (sorry)
* stp (please)

### Serbian
* sranje (shit)
* govno (shit)
* jebiga (fuck)
* jebeno (fucking thing)
* picka (cunt)
* sisica (means small boob, but context is pussy)
* kurac (dick)
* cmar (asshole)
* izvini (sorry)
* ups (ooops)
* upickumaterinu ("u picku materinu" in mother pussy)
* mrsupickumaterinu ("mars u picku materinu" go to your mother's pussy)
* stakojikurac ("sta koji kurac" what the fuck)
* jebemmumisa ("jebem mu misa" I fuck his mouse)
* jebotebog ("jebo te bog" god fuck you)
* jebotipasmater ("jebo ti pas mater" dog fucks your mother)
* jebotikonjmater ("jebo ti konj mater" horse fucks your mother)
* jebotikonjkrvavimkurcemmater ("jebo ti konj krvavim kurcem mater" horse fucks your mother with bloody dick)
* jebemtisvestosezakvakuuhvati ("jebem ti sve sto se za kvaku uhvati" i fuck your everyone who used your door knob)

### Italian
* cazzo
* fanculo
* merda

And all of this will become important after babel does his thing.

## I want to add words !

Awesome ! You can create a PR here: 
[https://github.com/SaraVieira/curse-words](https://github.com/SaraVieira/curse-words) and these tests and the ones in [https://github.com/SaraVieira/postcss-caralho](https://github.com/SaraVieira/postcss-caralho) will be generated automatically 🎉


## License

Use as you please to confuse people and enjoy (MIT)
