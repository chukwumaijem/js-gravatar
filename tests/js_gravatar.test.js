import jsGravatar, { buildQueryStringFromOptions, validateOptions } from '../lib/js-gravatar';
import { Types, Errors } from '../lib/types';

describe('JS Gravatar', function () {
  describe('Throws an error', function () {
    it('for missing email and md5hash', function () {
      expect(() => validateOptions({ defaultImage: '404' })).toThrow(Errors.MISSING_ARGUMENT_ERROR('email or md5Hash'));
    });

    it('for invalid size options.', function () {
      expect(() => validateOptions({ email: 'user@email.com', size: 0 })).toThrow(Errors.IMAGE_SIZE_ERROR);
      expect(() => validateOptions({ email: 'user@email.com', size: 2049 })).toThrow(Errors.IMAGE_SIZE_ERROR);
    });

    it('for unexpected default image.', function () {
      expect(() => validateOptions({ email: 'user@email.com', defaultImage: 'not-available' })).toThrow(
        Errors.DEFAULT_IMAGE_ERROR,
      );
    });
  });

  describe('Correctly generates url query string', function() {
    const size = 200;
    const defaultImage = '404';

    it('when only one property is supplied.', function () {
      expect(buildQueryStringFromOptions({ size })).toBe(`?s=${size}`);
      expect(buildQueryStringFromOptions({ defaultImage })).toBe(`?d=${defaultImage}`);
    });

    it('when both size and defaultImage are supplied.', function () {
      expect(buildQueryStringFromOptions({ defaultImage, size })).toBe(`?s=${size}&d=${defaultImage}`);
    });

    it('when no property is available.', function () {
      expect(buildQueryStringFromOptions({})).toBe('');
    });
  });

  describe('Correctly generates urls with or without protocol specified', function() {
    const email = 'test@test.com';
    const size = 200;
    const defaultImage = '404';

    it('when no protocol is supplied.', function () {
      expect(jsGravatar({ email, size, defaultImage })).toBe(`http://www.gravatar.com/avatar/b642b4217b34b1e8d3bd915fc65c4452?s=${size}&d=${defaultImage}`);
    });

    it('when "https:" protocol is supplied.', function () {
      expect(jsGravatar({ email, size, defaultImage, protocol: 'https:' })).toBe(`https://www.gravatar.com/avatar/b642b4217b34b1e8d3bd915fc65c4452?s=${size}&d=${defaultImage}`);
    });

    it('when "purple:" protocol is supplied.', function () {
      expect(jsGravatar({ email, size, defaultImage, protocol: 'purple:' })).toBe(`http://www.gravatar.com/avatar/b642b4217b34b1e8d3bd915fc65c4452?s=${size}&d=${defaultImage}`);
    });
  });
});
