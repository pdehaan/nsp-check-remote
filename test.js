const { checkLatest } = require('./index');

checkLatest('weinre', 'summary')
  .then((res) => console.log(JSON.stringify(res, null, 2)));
  // .then(({output}) => console.log(output));
