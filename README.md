# nsp-check-remote

Like [`nsp check`](http://npm.im/nsp), but for remote packages on npm.

## Installation:

```sh
$ npm i pdehaan/nsp-check-remote -S
```

## Usage:

```js
const { checkLatest } = require('nsp-check-remote');

checkLatest('weinre', 'summary')
  .then(({output}) => console.log(output));
```

Or, if you have this installed globally, or are accessing via npm scripts:

```sh
$ nsp-check-remote -n weinre -f summary
```

Where `-n` (or `--name`) is the name of the npm package you want to check, and `-f` (or `--formatter`) is the nsp formatter you want to use.

## DISCLAIMER:

Because the latest code published on npm may not match the latest code in GitHub (or whatever), the results may not always be 100% accurate.
Probably a better way to validate the HEAD in a repo, but whatever. #goodenough
