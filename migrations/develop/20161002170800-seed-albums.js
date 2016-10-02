var helper = require('../../helpers/migrations');

'use strict';

var dbm;
var type;
var seed;
var Promise;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
  Promise = options.Promise;
};

exports.up = function(db, callback) {
  var columns = [ "artist_id", "title", "coverArt", "releasedAt", "createdAt", "updatedAt" ];

  helper.getAttributeIdMap(db, 'artists', 'name').then(function(artistMap) {
    var arrayOfInserts = [
      [artistMap.indexOf('AC/DC'), 'For Those About To Rock We Salute You', 'https://ia800500.us.archive.org/2/items/mbid-6282e607-18b3-39c2-822b-b8d7bc00c343/mbid-6282e607-18b3-39c2-822b-b8d7bc00c343-1132379641_thumb500.jpg', '1981-11-23'],
      [artistMap.indexOf('AC/DC'), 'Let There Be Rock', 'https://ia800801.us.archive.org/28/items/mbid-ecdc0365-2b46-4997-88d0-5534b1aeaa25/mbid-ecdc0365-2b46-4997-88d0-5534b1aeaa25-1280535503_thumb500.jpg', '1977-06-23'],
      [artistMap.indexOf('Black Sabbath'), 'Black Sabbath', 'https://ia801707.us.archive.org/34/items/mbid-6b52eae0-6de5-4b9f-b8d5-60632e84967c/mbid-6b52eae0-6de5-4b9f-b8d5-60632e84967c-4326623489_thumb500.jpg', '1970-02-13'],
      [artistMap.indexOf('Creedence Clearwater Revival'), 'Green River', 'https://ia601308.us.archive.org/21/items/mbid-1d2d896d-336e-4b85-8573-5b655857e7ad/mbid-1d2d896d-336e-4b85-8573-5b655857e7ad-11741262821_thumb500.jpg', '1969-08-03'],
      [artistMap.indexOf('Creedence Clearwater Revival'), 'Cosmo\'s Factory', 'https://ia800301.us.archive.org/30/items/mbid-57b35ec9-77ed-4f5a-bad4-8f5992932563/mbid-57b35ec9-77ed-4f5a-bad4-8f5992932563-1829441384_thumb500.jpg', '1970-07-16'],
      [artistMap.indexOf('Creedence Clearwater Revival'), 'Pendulum', 'https://ia801701.us.archive.org/12/items/mbid-abd1e9d3-cc05-4d3a-973f-480a76032a50/mbid-abd1e9d3-cc05-4d3a-973f-480a76032a50-3550492779_thumb500.jpg', '1970-12-07'],
      [artistMap.indexOf('Def Leppard'), 'Pyromania', 'https://ia600809.us.archive.org/35/items/mbid-0d62b39a-4986-489c-93e7-8702fcb99d6b/mbid-0d62b39a-4986-489c-93e7-8702fcb99d6b-1281413948_thumb500.jpg', '1983-01-20'],
      [artistMap.indexOf('Def Leppard'), 'Hysteria', 'https://ia801701.us.archive.org/13/items/mbid-b086901c-61f2-4e08-8291-3414cbd39f91/mbid-b086901c-61f2-4e08-8291-3414cbd39f91-3974441689_thumb500.jpg', '1987-08-03'],
      [artistMap.indexOf('Eric Clapton'), 'Journeyman', 'https://ia902304.us.archive.org/2/items/mbid-55767db4-d426-3988-bf4c-5121964cac1d/mbid-55767db4-d426-3988-bf4c-5121964cac1d-8414673474_thumb500.jpg', '1989-11-07'],
      [artistMap.indexOf('Eric Clapton'), 'From the Cradle', 'https://ia802307.us.archive.org/29/items/mbid-9534f534-33de-3003-86b1-e3979ea82cc3/mbid-9534f534-33de-3003-86b1-e3979ea82cc3-8414865687_thumb500.jpg', '1994-09-13'],
      [artistMap.indexOf('Eric Clapton'), 'Pilgrim', 'https://ia801708.us.archive.org/0/items/mbid-16abb198-ab78-38ee-affa-b2df377dfff4/mbid-16abb198-ab78-38ee-affa-b2df377dfff4-4078905136_thumb500.jpg', '1998-03-10']
    ];

    helper.seedWithTimestamps(db, 'albums', columns, arrayOfInserts);
    callback();
  });
};

exports.down = function(db) {
  return null;
};

exports._meta = {
  "version": 1
};

function inserts() {

}
