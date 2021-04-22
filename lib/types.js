export const Types = {
  BASE_URL: (suppliedProtocol) => {
    const protocol = suppliedProtocol || window.location.protocol;
    const gravatar_url = '//www.gravatar.com/avatar';
    if (protocol !== 'https:') {
      return `http:${gravatar_url}`;
    }
    return `https:${gravatar_url}`;
  },
  GRAVATAR_DEFAULTS: ['404', 'mp', 'identicon', 'monsterid', 'wavatar', 'retro', 'robohash', 'blank'],
};

export const Errors = {
  MISSING_ARGUMENT_ERROR: (arg) => `${arg} is required but was not provided.`,
  INVALID_ARGUMENT_TYPE: (arg, type) => `${arg} is expected to be of type ${type}, but received ${typeof arg}`,
  DEFAULT_IMAGE_ERROR: `defaultImage can only be oneOf: ${Types.GRAVATAR_DEFAULTS.join(',')}`,
  IMAGE_SIZE_ERROR: 'Size should not be greater than 2048 or less than 1.',
};
