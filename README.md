# JS Gravatar

[![npm package](https://img.shields.io/npm/v/js-gravatar.svg?style=flat-square)](https://www.npmjs.org/package/js-gravatar) ![](https://github.com/chukwumaijem/js-gravatar/workflows/Run%20Test/badge.svg) ![](https://github.com/chukwumaijem/js-gravatar/workflows/Publish%20To%20NPM/badge.svg)

[Demo](https://codepen.io/chukwumaijem/pen/KKdXYbr)

## Vanilla JS

Copy dist/js-gravatar.js into your library folder
Load it into your HTML script

```html
<script type="text/javascript" src="path/to/js-gravatar.js"></script>
```

You can use the [UNPKG](https://unpkg.com) link `https://unpkg.com/js-gravatar@1.0.1/dist/js-gravatar.js`. Remember to update the package number to the most recent.

Call the method with its options.

```js
JsGravatar({ element, numberOfDice: 2, callback });
```

## With npm (and CommonJS builder)

Install with npm.

```sh
npm install --save js-gravatar
```

Install with yarn.

```sh
yarn add js-gravatar
```

import the library

ES5

```js
const JsGravatar = require('js-gravatar');
```

ES6

```js
import JsGravatar from 'js-gravatar';
```

Call the method

```js
JsGravatar({ email: 'user@email.com', size: 10, defaultImage: 'identicon' });
JsGravatar({ email: 'user@email.com', defaultImage: 'monsterid' });
```

## Parameter Definitions

- `email`: Email address of the user to generate gravatar for - string
- `md5Hash`: Optional: MD5 hash of the email above. If email is provided, md5hash will be ignored. If neither email nor md5hash is provided, the library will throw en error - string
- `size`: Optional: The size of the image to be displayed. Should be from 1 to 2048 - number
- `defaultImage`: What image should be used if email does not have a gravatar. See options below - string

Defaultimage Options - ['404', 'mp', 'identicon', 'monsterid', 'wavatar', 'retro', 'robohash', 'blank']

## License

MIT License
