const nsp = require('nsp');
const packageJson = require('package-json');

exports.checkLatest = (name, formatter = 'default') => packageJson(name, 'latest')
    .then((package) => new Promise((resolve) => {
      nsp.check({package}, (err, data) => {
        const fmt = nsp.getFormatter(formatter);
        const output = fmt(err, data);
        resolve({err, data, output, name, package});
      });
    }));
