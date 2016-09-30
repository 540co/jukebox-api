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
  db.createTable('Playlist', {
    id: {
      type: 'int',
      unsigned: true,
      primaryKey: true,
      notNull: true,
      autoIncrement: true
    },
    href: {type: 'string', notNull: true},
    name: {type: 'string', notNull: true},
    user_id: {
      type: 'int',
      unsigned: true,
      notNull: true,
      foreignKey: {
        name: 'playlist_user_id_fk',
        table: 'User',
        mapping: 'id',
        rules: {
          onDelete: "NO ACTION"
        }
      }
    },
    createdAt: {type: 'timestamp', notNull: true},
    updatedAt: {type: 'timestamp', notNull: true}
  });

  db.createTable('PlaylistSong', {
    playlist_id: {
      type: 'int',
      unsigned: true,
      primaryKey: true,
      notNull: true,
      foreignKey: {
        name: 'PlaylistSong_playlist_id_fk',
        table: 'Playlist',
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
        name: 'PlaylistSong_song_id_fk',
        table: 'Song',
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
  db.dropTable('PlaylistSong')
  db.dropTable('Playlist');
  callback();
};

exports._meta = {
  "version": 1
};
