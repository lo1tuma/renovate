const semver = require('./semver');
const pep440 = require('./pep440');
const nodever = require('./nodever');

const schemes = {
  semver,
  pep440,
  nodever,
};

module.exports = function getVersionScheme(versionScheme) {
  if (!versionScheme) {
    logger.debug('Missing versionScheme');
    return semver;
  }
  const scheme = schemes[versionScheme];
  if (!scheme) {
    logger.warn({ versionScheme }, 'Unknown version scheme');
    return semver;
  }
  return scheme;
};