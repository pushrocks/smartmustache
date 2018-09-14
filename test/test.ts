import { tap, expect } from '@pushrocks/tapbundle';

import * as tlt from '../dist/index';

let testTlt: tlt.Tlt;
tap.test('should create a valid instance of tlt', async () => {
  testTlt = new tlt.Tlt('some awesome {{customString}} that is {{license}} licensed');
  expect(testTlt).to.be.instanceOf(tlt.Tlt);
});
tap.test('should output a valid string with some data', async () => {
  let appliedString = testTlt.applyData({
    customString: 'horse',
    license: 'MIT'
  });
  expect(appliedString).to.equal('some awesome horse that is MIT licensed');
});

tap.start();
