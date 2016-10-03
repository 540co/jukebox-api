var helper = require('../../helpers/migrations')

'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db, callback) {
  var columns = [ "name", "user_id" ];

  helper.getAttributeIdMap(db, 'users', 'username').then(function(userMap) {
    var arrayOfInserts = [
      ['GW\'s Mix', userMap.indexOf('gwashington')],
      ['John\'s Favorites', userMap.indexOf('jadams')],
      ['For Those About to Rock', userMap.indexOf('jadams')],
      ['Jefferson\'s Jams', userMap.indexOf('tjefferson')],
      ['1776', userMap.indexOf('tjefferson')],
      ['Pump it up', userMap.indexOf('tjefferson')],
      ['James\' Best of the Best', userMap.indexOf('jmadison')],
      ['Workout Mix', userMap.indexOf('jmadison')],
      ['White House Rock', userMap.indexOf('jmonroe')]
    ];

    helper.seedWithTimestamps(db, 'playlists', columns, arrayOfInserts);
    callback();
  })
};

exports.down = function(db, callback) {
  db.runSql("delete from playlists where 1=1", callback());
};

exports._meta = {
  "version": 1
};
