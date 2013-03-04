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
  _files: [ './index.html.jade',
    './sample.md',
    './styles.css',
    './_layouts/default.jade',
    './_layouts/post.jade',
    './_posts/2012-12-1-sample1.md',
    './_posts/2013-01-12-sample2.md',
    './images/anchor-porter.jpg' ],
  files: require('../../nabu/lib/files.js'),
  site: {
    renderer: 'jade'
  }
};

exports['nabu'] = {
  setUp: function(done) {
    done();
  },
  'process': function(test) {
    test.expect(2);
    
    nabu_assets.process(nabu, function(err, nabu){
      test.ok(nabu.site.assets, "There shold be a nabu object");
      test.equal(nabu.site.assets.length, 2, 'There should only be two assets');
      test.done();
    });
  },
  tearDown: function(done) {
    done();
  }
};
