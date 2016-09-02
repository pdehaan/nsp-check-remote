const nsp = require('nsp');
const packageJson = require('fetch-nice-package');
const sortJson = require('sort-json');
const stripcolorcodes = require('stripcolorcodes');

// Unwanted keys to delete from package.json.
const PACKAGE_JSON_KEYS_TO_REMOVE = ['lastPublisher', 'owners', 'readme', 'stars', 'versions'];

function cleanPackage(package) {
  PACKAGE_JSON_KEYS_TO_REMOVE.forEach((key) => delete package[key]);

  // Return the repo HTTPS URL, if available.
  if (package.repository) {
    package.repository = package.repository.https_url;
  }

  // Set some default values.
  package.dependencies = package.dependencies || {};
  package.devDependencies = package.devDependencies || {};
  package.keywords = package.keywords || [];

  return sortJson(package);
}

exports.checkLatest = (name, formatter = 'default') => packageJson(name)
  .then((package) => new Promise((resolve) => {
    nsp.check({package}, (err, data) => {
      const fmt = nsp.getFormatter(formatter);
      const output = fmt(err, data);

      resolve({
        data,
        err,
        name,
        // Strip any nsp/chalk color codes from the output.
        output: stripcolorcodes(output),
        package: cleanPackage(package)
      });
    });
  }));
