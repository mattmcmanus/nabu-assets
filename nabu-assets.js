/**
 * nabu-assets
 * https://github.com/mattmcmanus/nabu
 *
 * Copyright (c) 2013 Matt McManus
 * Licensed under the MIT license.
 */

'use strict';

var fs = require('fs'),
    path = require('path'),
    mkdirp = require('mkdirp');

/**
 * Copy over all static assets to destination folder
 */
function copyAssets(nabu) {
  nabu.site.assets.forEach(function(file) {
    var target = nabu.files.targetPath(nabu, file);
    mkdirp.sync(path.dirname(target));
    fs.createReadStream(file).pipe(fs.createWriteStream(target));
  });
}

function parse(nabu, next) {
  // Get rid of any path starting with underscore
  var assets = nabu.files.find(nabu._files, function(file){ 
    return (file.indexOf('./_') !== 0); 
  });

  // Also get rid of any non-underscored rendereable files
  assets = nabu.files.find(assets, function(file){
    return (file.indexOf(nabu.site.render) === -1 && !nabu.files.isMarkdownFile(file));
  });
  
  // // Add assets to site
  nabu.site.assets = assets;

  copyAssets(nabu);
  
  next(null, nabu);
}

exports = module.exports = parse;