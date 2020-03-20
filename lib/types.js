const Types = {
  MISSING_ARGUMENT_ERROR: (arg) => `${arg} is required but was not provided.`,
  INVALID_ARGUMENT_TYPE: (arg, type) => `${arg} is expected to be of type ${type}, but received ${typeof arg}`,
  BASE_URL: '//www.gravatar.com/avatar',
  GRAVATAR_DEFAULTS: ['404', 'mp', 'identicon', 'monsterid', 'wavatar', 'retro', 'robohash', 'blank'],
};

export default Types;
