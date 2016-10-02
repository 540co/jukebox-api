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
  db.createTable('songs', {
    id: {
      type: 'int',
      unsigned: true,
      primaryKey: true,
      notNull: true,
      autoIncrement: true
    },
    title: {type: "string", notNull: true},
    album_id: {
      type: 'int',
      unsigned: true,
      notNull: true,
      foreignKey: {
        name: "songs_album_id_fk",
        table: "albums",
        mapping: "id",
        rules: {
          onDelete: "NO ACTION"
        }
      }
    },
    duration: 'string',
    createdAt: {type: 'timestamp', notNull: true},
    updatedAt: {type: 'timestamp', notNull: true}
  });
  callback();
};

exports.down = function(db, callback) {
  db.dropTable('songs');
  callback();
};

exports._meta = {
  "version": 1
};
