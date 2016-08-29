const { checkLatest } = require('./index');
const { formatters } = require('nsp');

checkLatest('weinre', 'summary')
  .then(({output}) => console.log(output));
