'use strict';

var nabu_assets = require('../nabu-assets.js'),
    rimraf = require('rimraf');

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
    './test/fixtures/styles.css',
    './_layouts/default.jade',
    './_layouts/post.jade',
    './_posts/2012-12-1-sample1.md',
    './_posts/2013-01-12-sample2.md',
    './test/fixtures/images/anchor-porter.jpg' ],
  files: require('../../nabu/lib/files.js'),
  site: {
    render: 'jade',
    destination: './test/fixtures/_site'
  }
};

exports['nabu'] = {
  setUp: function(done) {
    done();
  },
  'parse': function(test) {
    test.expect(2);
    
    nabu_assets(nabu, function(err, nabu){
      test.ok(nabu.site.assets, "There shold be a nabu object");
      test.equal(nabu.site.assets.length, 2, 'There should only be two assets');
      test.done();
    });
  },
  tearDown: function(done) {
    rimraf(nabu.site.destination, done);
  }
};
