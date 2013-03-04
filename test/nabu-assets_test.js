'use strict';

var nabu_assets = require('../nabu-assets.js');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

var nabu = {
  site: {}
};

exports['nabu'] = {
  setUp: function(done) {
    done();
  },
  'process': function(test) {
    test.expect(1);
    
    nabu_assets.process(nabu, function(err, nabu){
      test.ok(nabu.site.assets, "There shold be a nabu object");
      // test.ok((nabu.site.length > 0), "There shold be at least 1 page");
      test.done();
    });
    
  },
  // 'generate': function(test) {
  //   test.expect(3);
  //   // tests here
  //   nabu.generate();
  //   test.ok(fs.existsSync('_site'), "_site dir exists");
  //   test.ok(fs.existsSync('_site/index.html'), "The homepage exists");
  //   test.ok(fs.existsSync('_site/images/anchor-porter.jpg'), "The image exists");
  //   test.done();
  // },
  tearDown: function(done) {
    done();
  }
};
