import 'typings-test'
import * as should from 'should'

import * as tlt from '../dist/index'

describe('tlt', function() {
    let testTlt: tlt.Tlt
    it('should create a valid instance of tlt', function() {
        testTlt = new tlt.Tlt('some awesome {{customString}}')
        should(testTlt).be.instanceOf(tlt.Tlt)
    })
    it('should output a valid string with some data', function(){
        let appliedString = testTlt.applyData({customString: 'horse'})
        should(appliedString).equal('some awesome horse')
    })
})
