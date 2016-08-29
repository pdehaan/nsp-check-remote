const { checkLatest } = require('./index');

const packages = [
  'singlequote',
  '@flowio/lib-apidoc',
  'react-walkthrough',
  'easy-ci',
  'yenny',
  'v-js',
  'gd-cli',
  'zaphod',
  'express-fileupload',
  'jsdoc-to-assert',
  'felfire'
].map((name) => checkLatest(name, 'summary'));

Promise.all(packages)
  .then((data) => data.forEach((res) => {
    console.log('%s\n%s\n\n', res.name, res.output);
  }))
  .catch((err) => console.error(err));
