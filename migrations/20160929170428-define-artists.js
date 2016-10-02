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
  db.createTable('artists', {
    id: {
      type: 'int',
      unsigned: true,
      primaryKey: true,
      notNull: true,
      autoIncrement: true
    },
    href: {type: 'string', notNull: true},
    name: {type: 'string', notNull: true},
    createdAt: {type: 'timestamp', notNull: true},
    updatedAt: {type: 'timestamp', notNull: true}
  });
  callback();
};

exports.down = function(db, callback) {
  db.dropTable('artists');
  callback();
};

exports._meta = {
  "version": 1
};
