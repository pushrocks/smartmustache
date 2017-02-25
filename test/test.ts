import 'typings-test'
import { expect } from 'smartchai'

import * as tlt from '../dist/index'

describe('tlt', function () {
  let testTlt: tlt.Tlt
  it('should create a valid instance of tlt', function () {
    testTlt = new tlt.Tlt('some awesome {{customString}}')
    expect(testTlt).to.be.instanceOf(tlt.Tlt)
  })
  it('should output a valid string with some data', function () {
    let appliedString = testTlt.applyData({ customString: 'horse' })
    expect(appliedString).to.equal('some awesome horse')
  })
})
