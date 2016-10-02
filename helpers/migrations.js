function MigrationHelper() {}

/**
 * This function seeds data provided and adds on the needed timestamps to the
 * supplied arrayOfInserts
 */
function seedWithTimestamps(db, tableName, columns, arrayOfInserts) {
  var counter = 0;
  while(counter < arrayOfInserts.length) {
    arrayOfInserts[counter].push("now()"); // Adding createdAt timestamp
    arrayOfInserts[counter].push("now()"); // Adding updatedAt timestamp
    db.insert(tableName, columns, arrayOfInserts[counter], function() {})
    counter++;
  }
}

/**
 *
 */
function getAttributeIdMap(db, tableName, value) {
  return {
    then: function(callback) {
      var map = [];
      db.runSql("select id, " + value + " from " + tableName, function(err, results) {
        for(var i=0; i< results.rows.length; i++) {
          map[results.rows[i].id] = results.rows[i].name;
        }
        callback(map);
      });
    }
  }
}

MigrationHelper.prototype = {
  seedWithTimestamps: seedWithTimestamps,
  getAttributeIdMap: getAttributeIdMap
}

var migrationHelper = new MigrationHelper();
module.exports = migrationHelper;
