'use strict';

var jstk = require('../lib/index.js');
var expect = require('expect.js');

describe('helper', function() {
  it('should have a bind method', function() {
    expect(jstk.bind).to.be.a(Function);
  });

  it('should bind jstk methods to lodash', function() {
    var _ = jstk.bind(require('lodash'));
    expect(_.isObjectStrict).to.be.a(Function);
    expect(_.applyCtor).to.be.a(Function);
    expect(_.callCtor).to.be.a(Function);
    expect(_.toInt).to.be.a(Function);
    expect(_.matcher).to.be.a(Function);
    expect(_.getProperty).to.be.a(Function);
    expect(_.callMethod).to.be.a(Function);
    expect(_.repeat).to.be.a(Function);
    expect(_.recursiveMapValues).to.be.a(Function);
  });
});
