var helper = require('../../helpers/migrations');
var md5 = require('md5');

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
  var columns = [ "username", "password", "firstName", "lastName", "createdAt", "updatedAt" ];
  var arrayOfInserts = [
    ['twhite', md5('twhite'), 'Trey', 'White'],
    ['jaltman', md5('jaltman'), 'Jeremy', 'Altman'],
    ['drisacher', md5('drisacher'), 'Dan', 'Risacher'],
    ['jobrien', md5('jobrien'), 'John', 'O\'Brien']
  ];

  helper.seedWithTimestamps(db, 'users', columns, arrayOfInserts);
  callback();
};

exports.down = function(db, callback) {
  db.runSql("delete from users where 1=1", callback());
};

exports._meta = {
  "version": 1
};
