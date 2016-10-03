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
  var columns = [ "username", "password", "firstName", "lastName" ];
  var arrayOfInserts = [
    ['gwashington', md5('george1'), 'George', 'Washington'],
    ['jadams', md5('john2'), 'John', 'Adams'],
    ['tjefferson', md5('thomas3'), 'Thomas', 'Jefferson'],
    ['jmadison', md5('james4'), 'James', 'Madison'],
    ['jmonroe', md5('james5'), 'James', 'Monroe']
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
