import { tap, expect } from '@pushrocks/tapbundle';

import * as tlt from '../ts/index';

let testMustache: tlt.SmartMustache;
tap.test('should create a valid instance of tlt', async () => {
  testMustache = new tlt.SmartMustache(
    'some awesome {{customString}} that is {{license}} licensed'
  );
  expect(testMustache).to.be.instanceOf(tlt.SmartMustache);
});
tap.test('should output a valid string with some data', async () => {
  let appliedString = testMustache.applyData({
    customString: 'horse',
    license: 'MIT',
  });
  expect(appliedString).to.equal('some awesome horse that is MIT licensed');
});

tap.start();
