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
  var columns = [ "name", "createdAt", "updatedAt" ];
  var arrayOfInserts = [
    ['AC/DC'],
    ['Black Sabbath'],
    ['Creedence Clearwater Revival'],
    ['Def Leppard'],
    ['Eric Clapton']
  ];

  var counter = 0;
  while(counter < arrayOfInserts.length) {
    arrayOfInserts[counter].push("now()"); // Adding createdAt timestamp
    arrayOfInserts[counter].push("now()"); // Adding createdAt timestamp
    db.insert('artists', columns, arrayOfInserts[counter], function() {})
    counter++;
  }

  callback();
};

exports.down = function(db, callback) {
  // TODO
  callback();
};

exports._meta = {
  "version": 1
};
