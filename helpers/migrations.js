function MigrationHelper() {}

/**
 * This function seeds data provided for the supplied arrayOfInserts
 */
function seed(db, tableName, columns, arrayOfInserts) {
  var counter = 0;
  while(counter < arrayOfInserts.length) {
    db.insert(tableName, columns, arrayOfInserts[counter], function() {})
    counter++;
  }
}

/**
 * This function seeds data provided and adds on the needed timestamps to the
 * supplied arrayOfInserts
 */
function seedWithTimestamps(db, tableName, columns, arrayOfInserts) {
  var counter = 0;
  while(counter < arrayOfInserts.length) {
    arrayOfInserts[counter].push("now()"); // Adding createdAt timestamp
    arrayOfInserts[counter].push("now()"); // Adding updatedAt timestamp
    counter++;
  }

  seed(db, tableName, columns, arrayOfInserts);
}

/**
 * This function creates an array with ID indexes for the table and attribute
 * (value) as supplied.  This function is setup to be used with promises.
 */
function getAttributeIdMap(db, tableName, value) {
  return {
    then: function(callback) {
      var map = [];
      db.runSql("select id, " + value + " from " + tableName, function(err, results) {
        for(var i=0; i< results.rows.length; i++) {
          map[results.rows[i].id] = results.rows[i][value];
        }
        callback(map);
      });
    }
  }
}

MigrationHelper.prototype = {
  seed: seed,
  seedWithTimestamps: seedWithTimestamps,
  getAttributeIdMap: getAttributeIdMap
}

var migrationHelper = new MigrationHelper();
module.exports = migrationHelper;
