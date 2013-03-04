/*
 * nabu-assets
 * https://github.com/mattmcmanus/nabu
 *
 * Copyright (c) 2013 Matt McManus
 * Licensed under the MIT license.
 */

'use strict';

var fs = require('fs'),
    path = require('path'),
    mkdirp = require('mkdirp'),
    mime = require('mime');

// Note to self
// Pull any folder and it's content that doesn't start with _
// Any file, that doesn't start with _

exports.process = function(nabu, next) {
  console.log("ASSets");

  // var assets = nabu.utils.findFiles(nabu.files, function(file){
  //   return (mime.lookup(file).split('/')[0] !== 'text'); 
  // });
  
  // // Update file list
  // nabu.files = nabu.utils.removePaths(nabu.files, assets);
  
  // // Add assets to site
  nabu.site.assets = {};
  
  next(null, nabu);
};


/**
 * Copy over all static assets to destination folder
 */
var nabu = {};
nabu.copyAssets = function() {
  this.site.assets.forEach(function(file) {
    var target = nabu.utils.targetPath(nabu, file);
    mkdirp.sync(path.dirname(target));
    fs.createReadStream(file).pipe(fs.createWriteStream(target));
  });
};