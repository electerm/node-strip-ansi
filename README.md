# node-strip-ansi

[![Build Status](https://img.shields.io/endpoint.svg?url=https%3A%2F%2Factions-badge.atrox.dev%2Fatrox%2Fsync-dotenv%2Fbadge)](https://github.com/@electerm/strip-ansi/actions)
[![Coverage Status](https://coveralls.io/repos/github/@electerm/strip-ansi/badge.svg?branch=release)](https://coveralls.io/github/@electerm/strip-ansi?branch=release)

A port for [strip-ansi](https://github.com/chalk/strip-ansi) to work with nodejs env, so user can use `require` to use it

## Use

```bash
npm i @electerm/strip-ansi
```

```js
const stripAnsi = require('strip-ansi').default;

stripAnsi('\u001B[4mUnicorn\u001B[0m');
//=> 'Unicorn'

stripAnsi('\u001B]8;;https://github.com\u0007Click\u001B]8;;\u0007');
//=> 'Click'
```

## License

MIT
