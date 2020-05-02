import md5 from 'md5';
import Types from './types';

function validateOptions(options) {
  const { email, md5Hash, size, defaultImage } = options;
  if (!email && !md5Hash)
    throw new Error(Types.MISSING_ARGUMENT_ERROR('email or md5Hash'));

  if (size && Number.isNaN(Number(size)))
    throw new Error(Types.INVALID_ARGUMENT_TYPE(size, 'number'));

  if (size && (size > 2048 || size < 1))
    throw new Error('size should not be greater than 2048 or less than 1');

  if (defaultImage && !Types.GRAVATAR_DEFAULTS.includes(defaultImage))
    throw new Error(`defaultImage can only be oneOf: ${Types.GRAVATAR_DEFAULTS.join(',')}`);
}

function getMd5Hash(options) {
  const { email, md5Hash } = options;
  if (md5Hash) return md5Hash;

  return md5(email.trim().toLowerCase());
}

function buildQueryStringFromOptions(options) {
  const { size, defaultImage } = options;
  let queryString = '?';
  if (size) queryString += `s=${size}&`;
  if (defaultImage) queryString += `d=${defaultImage}&`;

  if (queryString.endsWith('&') || queryString.endsWith('?')) {
    return queryString.substr(0, queryString.length - 1);
  }
  return queryString;
}

function jsGravatar(options) {
  validateOptions(options);
  const emailHash = getMd5Hash(options);
  const queryString = buildQueryStringFromOptions(options);

  return `${Types.BASE_URL}/${emailHash}${queryString}`;
}

export default jsGravatar;
