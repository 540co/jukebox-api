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
  db.createTable('playlists', {
    id: {
      type: 'int',
      unsigned: true,
      primaryKey: true,
      notNull: true,
      autoIncrement: true
    },
    name: {type: 'string', notNull: true},
    user_id: {
      type: 'int',
      unsigned: true,
      notNull: true,
      foreignKey: {
        name: 'playlists_user_id_fk',
        table: 'users',
        mapping: 'id',
        rules: {
          onDelete: "NO ACTION"
        }
      }
    },
    createdAt: {type: 'timestamp', notNull: true},
    updatedAt: {type: 'timestamp', notNull: true}
  });

  db.createTable('playlist_songs', {
    playlist_id: {
      type: 'int',
      unsigned: true,
      primaryKey: true,
      notNull: true,
      foreignKey: {
        name: 'playlist_songs_playlist_id_fk',
        table: 'playlists',
        mapping: 'id',
        rules: {
          onDelete: "NO ACTION"
        }
      }
    },
    song_id: {
      type: 'int',
      unsigned: true,
      primaryKey: true,
      notNull: true,
      foreignKey: {
        name: 'playlist_songs_song_id_fk',
        table: 'songs',
        mapping: 'id',
        rules: {
          onDelete: "NO ACTION"
        }
      }
    }
  });

  callback();
};

exports.down = function(db, callback) {
  db.dropTable('playlist_songs')
  db.dropTable('playlists');
  callback();
};

exports._meta = {
  "version": 1
};
