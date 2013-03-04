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

// Note to self
// Pull any folder and it's content that doesn't start with _
// Any file, that doesn't start with _

exports.process = function(nabu, next) {
  // Get rid of any path starting with underscore
  var assets = nabu.files.find(nabu._files, function(file){ 
    return (file.indexOf('./_') !== 0); 
  });

  // Also get rid of any non-underscored rendereable files
  assets = nabu.files.find(assets, function(file){
    return (['.'+nabu.site.renderer, '.md', '.markdown'].indexOf(path.extname(file)) === -1); 
  });
  
  // // Add assets to site
  nabu.site.assets = assets;
  
  next(null, nabu);
};


/**
 * Copy over all static assets to destination folder
 */
var nabu = {};
exports.copyAssets = function() {
  this.site.assets.forEach(function(file) {
    var target = nabu.utils.targetPath(nabu, file);
    mkdirp.sync(path.dirname(target));
    fs.createReadStream(file).pipe(fs.createWriteStream(target));
  });
};