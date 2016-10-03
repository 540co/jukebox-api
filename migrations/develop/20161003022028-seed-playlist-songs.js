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
  var columns = [ "playlist_id", "song_id" ];

  helper.getAttributeIdMap(db, 'playlists', 'name').then(function(playlistMap) {
    helper.getAttributeIdMap(db, 'songs', 'title').then(function(songMap) {
        var arrayOfInserts = [
          [playlistMap.indexOf('GW\'s Mix'), songMap.indexOf('Wicked World')],
          [playlistMap.indexOf('GW\'s Mix'), songMap.indexOf('The Night Time Is the Right Time')],
          [playlistMap.indexOf('GW\'s Mix'), songMap.indexOf('Put the Finger on You')],
          [playlistMap.indexOf('GW\'s Mix'), songMap.indexOf('Born in Time')],
          [playlistMap.indexOf('GW\'s Mix'), songMap.indexOf('Motherless Child')],
          [playlistMap.indexOf('GW\'s Mix'), songMap.indexOf('Reconsider Baby')],
          [playlistMap.indexOf('GW\'s Mix'), songMap.indexOf('No Alibis')],
          [playlistMap.indexOf('GW\'s Mix'), songMap.indexOf('Pretending')],
          [playlistMap.indexOf('GW\'s Mix'), songMap.indexOf('Gods of War')],
          [playlistMap.indexOf('John\'s Favorites'), songMap.indexOf('Pour Some Sugar on Me')],
          [playlistMap.indexOf('John\'s Favorites'), songMap.indexOf('Women')],
          [playlistMap.indexOf('John\'s Favorites'), songMap.indexOf('You Were There')],
          [playlistMap.indexOf('John\'s Favorites'), songMap.indexOf('Bad Boy Boogie')],
          [playlistMap.indexOf('John\'s Favorites'), songMap.indexOf('Spellbound')],
          [playlistMap.indexOf('John\'s Favorites'), songMap.indexOf('Up Around the Bend')],
          [playlistMap.indexOf('John\'s Favorites'), songMap.indexOf('Sinister Purpose')],
          [playlistMap.indexOf('For Those About to Rock'), songMap.indexOf('I Heard It Through the Grapevine')],
          [playlistMap.indexOf('For Those About to Rock'), songMap.indexOf('The Night Time Is the Right Time')],
          [playlistMap.indexOf('For Those About to Rock'), songMap.indexOf('Chameleon')],
          [playlistMap.indexOf('For Those About to Rock'), songMap.indexOf('Snowballed')],
          [playlistMap.indexOf('For Those About to Rock'), songMap.indexOf('Needs His Woman')],
          [playlistMap.indexOf('For Those About to Rock'), songMap.indexOf('Someday After a While')],
          [playlistMap.indexOf('For Those About to Rock'), songMap.indexOf('How Long Blues')],
          [playlistMap.indexOf('For Those About to Rock'), songMap.indexOf('Hysteria')],
          [playlistMap.indexOf('For Those About to Rock'), songMap.indexOf('Stagefright')],
          [playlistMap.indexOf('For Those About to Rock'), songMap.indexOf('Photograph')],
          [playlistMap.indexOf('For Those About to Rock'), songMap.indexOf('My Father\'s Eyes')],
          [playlistMap.indexOf('For Those About to Rock'), songMap.indexOf('Bad Love')],
          [playlistMap.indexOf('For Those About to Rock'), songMap.indexOf('Excitable')],
          [playlistMap.indexOf('For Those About to Rock'), songMap.indexOf('Old Love')],
          [playlistMap.indexOf('Jefferson\'s Jams'), songMap.indexOf('Spellbound')],
          [playlistMap.indexOf('Jefferson\'s Jams'), songMap.indexOf('My Father\'s Eyes')],
          [playlistMap.indexOf('Jefferson\'s Jams'), songMap.indexOf('Bad Boy Boogie')],
          [playlistMap.indexOf('Jefferson\'s Jams'), songMap.indexOf('It Hurts Me Too')],
          [playlistMap.indexOf('Jefferson\'s Jams'), songMap.indexOf('Hound Dog')],
          [playlistMap.indexOf('1776'), songMap.indexOf('Dog Eat Dog')],
          [playlistMap.indexOf('1776'), songMap.indexOf('Hysteria')],
          [playlistMap.indexOf('1776'), songMap.indexOf('Animal')],
          [playlistMap.indexOf('1776'), songMap.indexOf('Rock of Ages')],
          [playlistMap.indexOf('1776'), songMap.indexOf('Hound Dog')],
          [playlistMap.indexOf('1776'), songMap.indexOf('Die Hard the Hunter')],
          [playlistMap.indexOf('1776'), songMap.indexOf('Ooby Dooby')],
          [playlistMap.indexOf('1776'), songMap.indexOf('Running on Faith')],
          [playlistMap.indexOf('Pump it up'), songMap.indexOf('The Night Time Is the Right Time')],
          [playlistMap.indexOf('Pump it up'), songMap.indexOf('Love Bites')],
          [playlistMap.indexOf('Pump it up'), songMap.indexOf('It\'s Just a Thought')],
          [playlistMap.indexOf('Pump it up'), songMap.indexOf('Run Riot')],
          [playlistMap.indexOf('James\' Best of the Best'), songMap.indexOf('Hoochie Coochie Man')],
          [playlistMap.indexOf('James\' Best of the Best'), songMap.indexOf('River of Tears')],
          [playlistMap.indexOf('James\' Best of the Best'), songMap.indexOf('Pilgrim')],
          [playlistMap.indexOf('James\' Best of the Best'), songMap.indexOf('Circus')],
          [playlistMap.indexOf('James\' Best of the Best'), songMap.indexOf('Inside of Me')],
          [playlistMap.indexOf('James\' Best of the Best'), songMap.indexOf('Dog Eat Dog')],
          [playlistMap.indexOf('James\' Best of the Best'), songMap.indexOf('Bad Boy Boogie')],
          [playlistMap.indexOf('James\' Best of the Best'), songMap.indexOf('Standin\' Round Crying')],
          [playlistMap.indexOf('James\' Best of the Best'), songMap.indexOf('Before You Accuse Me')],
          [playlistMap.indexOf('James\' Best of the Best'), songMap.indexOf('Billy\'s Got a Gun')],
          [playlistMap.indexOf('James\' Best of the Best'), songMap.indexOf('Have You Ever Seen the Rain?')],
          [playlistMap.indexOf('Workout Mix'), songMap.indexOf('Old Love')],
          [playlistMap.indexOf('Workout Mix'), songMap.indexOf('Molina')],
          [playlistMap.indexOf('Workout Mix'), songMap.indexOf('C.O.D.')],
          [playlistMap.indexOf('Workout Mix'), songMap.indexOf('Green River')],
          [playlistMap.indexOf('Workout Mix'), songMap.indexOf('Ooby Dooby')],
          [playlistMap.indexOf('Workout Mix'), songMap.indexOf('Cross-Tie Walker')],
          [playlistMap.indexOf('Workout Mix'), songMap.indexOf('Gods of War')],
          [playlistMap.indexOf('Workout Mix'), songMap.indexOf('Excitable')],
          [playlistMap.indexOf('White House Rock'), songMap.indexOf('Dog Eat Dog')],
          [playlistMap.indexOf('White House Rock'), songMap.indexOf('Sinister Purpose')],
          [playlistMap.indexOf('White House Rock'), songMap.indexOf('Pilgrim')],
          [playlistMap.indexOf('White House Rock'), songMap.indexOf('Green River')],
          [playlistMap.indexOf('White House Rock'), songMap.indexOf('Molina')],
          [playlistMap.indexOf('White House Rock'), songMap.indexOf('Have You Ever Seen the Rain?')],
          [playlistMap.indexOf('White House Rock'), songMap.indexOf('Run So Far')],
          [playlistMap.indexOf('White House Rock'), songMap.indexOf('Sick and Tired')],
          [playlistMap.indexOf('White House Rock'), songMap.indexOf('Wicked World')],
          [playlistMap.indexOf('White House Rock'), songMap.indexOf('Hysteria')],
          [playlistMap.indexOf('White House Rock'), songMap.indexOf('Billy\'s Got a Gun')],
        ];
        helper.seed(db, 'playlist_songs', columns, arrayOfInserts);
        callback();
    });
  });
};

exports.down = function(db, callback) {
  db.runSql("delete from playlist_songs where 1=1", callback());
};

exports._meta = {
  "version": 1
};
