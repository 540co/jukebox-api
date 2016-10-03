var helper = require('../../helpers/migrations');

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
  var columns = [ "name" ];
  var arrayOfInserts = [
    ['AC/DC'],
    ['Black Sabbath'],
    ['Creedence Clearwater Revival'],
    ['Def Leppard'],
    ['Eric Clapton']
  ];

  helper.seedWithTimestamps(db, 'artists', columns, arrayOfInserts);
  callback();
};

exports.down = function(db, callback) {
  db.runSql("delete from artists where 1=1", callback());
};

exports._meta = {
  "version": 1
};
