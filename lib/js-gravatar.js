import md5 from 'md5';
import { Types, Errors } from './types';

export function validateOptions(options) {
  const { email, md5Hash, size, defaultImage, protocol } = options;
  if (!email && !md5Hash) throw new Error(Errors.MISSING_ARGUMENT_ERROR('email or md5Hash'));

  if (size && Number.isNaN(Number(size))) throw new Error(Errors.INVALID_ARGUMENT_TYPE(size, 'number'));

  if (size > 2048 || size < 1) throw new Error(Errors.IMAGE_SIZE_ERROR);
  
  if (defaultImage && !Types.GRAVATAR_DEFAULTS.includes(defaultImage)) throw new Error(Errors.DEFAULT_IMAGE_ERROR);

  if (protocol && typeof protocol !== 'string') throw new Error(Errors.INVALID_ARGUMENT_TYPE(protocol, 'string'));
}

function getMd5Hash(options) {
  const { email, md5Hash } = options;
  if (md5Hash) return md5Hash;

  return md5(email.trim().toLowerCase());
}

export function buildQueryStringFromOptions(options) {
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

  return `${Types.BASE_URL(options.protocol)}/${emailHash}${queryString}`;
}

export default jsGravatar;
