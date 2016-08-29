const { checkLatest } = require('./index');

checkLatest('weinre', 'summary')
  .then(({output}) => console.log(output));
