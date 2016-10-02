var helper = require('../../helpers/migrations');

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
  var columns = [ "title", "album_id", "duration", "createdAt", "updatedAt" ];

  helper.getAttributeIdMap(db, 'albums', 'title').then(function(albumMap) {
    var arrayOfInserts = [
      ['For Those About to Rock (We Salute You)', albumMap.indexOf('For Those About To Rock We Salute You'), '5:44'],
      ['Put the Finger on You', albumMap.indexOf('For Those About To Rock We Salute You'), '3:25'],
      ['Let\'s Get It Up', albumMap.indexOf('For Those About To Rock We Salute You'), '3:54'],
      ['Inject the Venom', albumMap.indexOf('For Those About To Rock We Salute You'), '3:30'],
      ['Snowballed', albumMap.indexOf('For Those About To Rock We Salute You'), '3:23'],
      ['Evil Walks', albumMap.indexOf('For Those About To Rock We Salute You'), '4:23'],
      ['C.O.D.', albumMap.indexOf('For Those About To Rock We Salute You'), '3:19'],
      ['Breaking the Rules', albumMap.indexOf('For Those About To Rock We Salute You'), '4:23'],
      ['Night of the Long Knives', albumMap.indexOf('For Those About To Rock We Salute You'), '3:25'],
      ['Spellbound', albumMap.indexOf('For Those About To Rock We Salute You'), '4:30'],
      ['Go Down', albumMap.indexOf('Let There Be Rock'), '5:33'],
      ['Dog Eat Dog', albumMap.indexOf('Let There Be Rock'), '3:35'],
      ['Let There Be Rock', albumMap.indexOf('Let There Be Rock'), '6:07'],
      ['Bad Boy Boogie', albumMap.indexOf('Let There Be Rock'), '4:28'],
      ['Overdose', albumMap.indexOf('Let There Be Rock'), '6:09'],
      ['Crabsody in Blue', albumMap.indexOf('Let There Be Rock'), '4:45'],
      ['Hell Ain\'t a Bad Place to Be', albumMap.indexOf('Let There Be Rock'), '4:15'],
      ['Whole Lotta Rosie', albumMap.indexOf('Let There Be Rock'), '5:22'],
      ['Black Sabbath', albumMap.indexOf('Black Sabbath'), '6:20'],
      ['The Wizard', albumMap.indexOf('Black Sabbath'), '4:22'],
      ['Wasp/Behind the Wall of Sleep/Bassically/N.I.B.', albumMap.indexOf('Black Sabbath'), '9:44'],
      ['Wicked World', albumMap.indexOf('Black Sabbath'), '4:47'],
      ['A Bit of Finger/Sleeping Village/Warning', albumMap.indexOf('Black Sabbath'), '14:15'],
      ['Green River', albumMap.indexOf('Green River'), '2:36'],
      ['Commotion', albumMap.indexOf('Green River'), '2:44'],
      ['Tombstone Shadow', albumMap.indexOf('Green River'), '3:39'],
      ['Wrote a Song for Everyone', albumMap.indexOf('Green River'), '4:57'],
      ['Bad Moon Rising', albumMap.indexOf('Green River'), '2:21'],
      ['Lodi', albumMap.indexOf('Green River'), '3:13'],
      ['Cross-Tie Walker', albumMap.indexOf('Green River'), '3:20'],
      ['Sinister Purpose', albumMap.indexOf('Green River'), '3:23'],
      ['The Night Time Is the Right Time', albumMap.indexOf('Green River'), '3:09'],
      ['Ramble Tamble', albumMap.indexOf('Cosmo\'s Factory'), '7:09'],
      ['Before You Accuse Me', albumMap.indexOf('Cosmo\'s Factory'), '3:24'],
      ['Travelin\' Band', albumMap.indexOf('Cosmo\'s Factory'), '2:07'],
      ['Ooby Dooby', albumMap.indexOf('Cosmo\'s Factory'), '2:05'],
      ['Lookin\' Out My Back Door', albumMap.indexOf('Cosmo\'s Factory'), '2:31'],
      ['Run Through the Jungle', albumMap.indexOf('Cosmo\'s Factory'), '3:09'],
      ['Up Around the Bend', albumMap.indexOf('Cosmo\'s Factory'), '2:40'],
      ['My Baby Left Me', albumMap.indexOf('Cosmo\'s Factory'), '2:17'],
      ['Who\'ll Stop the Rain', albumMap.indexOf('Cosmo\'s Factory'), '2:28'],
      ['I Heard It Through the Grapevine', albumMap.indexOf('Cosmo\'s Factory'), '11:05'],
      ['Long as I Can See the Light', albumMap.indexOf('Cosmo\'s Factory'), '3:33'],
      ['Pagan Baby', albumMap.indexOf('Pendulum'), '6:25'],
      ['Sailor\'s Lament', albumMap.indexOf('Pendulum'), '3:47'],
      ['Chameleon', albumMap.indexOf('Pendulum'), '3:05'],
      ['Have You Ever Seen the Rain?', albumMap.indexOf('Pendulum'), '2:39'],
      ['(Wish I Could) Hideaway', albumMap.indexOf('Pendulum'), '3:53'],
      ['Born to Move', albumMap.indexOf('Pendulum'), '5:39'],
      ['Hey Tonight', albumMap.indexOf('Pendulum'), '2:43'],
      ['It\'s Just a Thought', albumMap.indexOf('Pendulum'), '3:45'],
      ['Molina', albumMap.indexOf('Pendulum'), '2:41'],
      ['Rude Awakening #2', albumMap.indexOf('Pendulum'), '6:19'],
      ['Rock! Rock! (Till You Drop)', albumMap.indexOf('Pyromania'), '3:52'],
      ['Photograph', albumMap.indexOf('Pyromania'), '4:12'],
      ['Stagefright', albumMap.indexOf('Pyromania'), '3:46'],
      ['Too Late for Love', albumMap.indexOf('Pyromania'), '4:30'],
      ['Die Hard the Hunter', albumMap.indexOf('Pyromania'), '6:17'],
      ['Foolin\'', albumMap.indexOf('Pyromania'), '4:32'],
      ['Rock of Ages', albumMap.indexOf('Pyromania'), '4:09'],
      ['Comin\' Under Fire', albumMap.indexOf('Pyromania'), '4:20'],
      ['Action! Not Words', albumMap.indexOf('Pyromania'), '3:49'],
      ['Billy\'s Got a Gun', albumMap.indexOf('Pyromania'), '5:56'],
      ['Women', albumMap.indexOf('Hysteria'), '5:42'],
      ['Rocket', albumMap.indexOf('Hysteria'), '6:37'],
      ['Animal', albumMap.indexOf('Hysteria'), '4:04'],
      ['Love Bites', albumMap.indexOf('Hysteria'), '5:46'],
      ['Pour Some Sugar on Me', albumMap.indexOf('Hysteria'), '4:27'],
      ['Armageddon It', albumMap.indexOf('Hysteria'), '5:24'],
      ['Gods of War', albumMap.indexOf('Hysteria'), '6:37'],
      ['Don\'t Shoot Shotgun', albumMap.indexOf('Hysteria'), '4:26'],
      ['Run Riot', albumMap.indexOf('Hysteria'), '4:39'],
      ['Hysteria', albumMap.indexOf('Hysteria'), '5:54'],
      ['Excitable', albumMap.indexOf('Hysteria'), '4:19'],
      ['Love and Affection', albumMap.indexOf('Hysteria'), '4:37'],
      ['Pretending', albumMap.indexOf('Journeyman'), '4:48'],
      ['Anything for Your Love', albumMap.indexOf('Journeyman'), '4:16'],
      ['Bad Love', albumMap.indexOf('Journeyman'), '5:11'],
      ['Running on Faith', albumMap.indexOf('Journeyman'), '5:27'],
      ['Hard Times', albumMap.indexOf('Journeyman'), '3:00'],
      ['Hound Dog', albumMap.indexOf('Journeyman'), '2:26'],
      ['No Alibis', albumMap.indexOf('Journeyman'), '5:32'],
      ['Run So Far', albumMap.indexOf('Journeyman'), '4:06'],
      ['Old Love', albumMap.indexOf('Journeyman'), '6:25'],
      ['Breaking Point', albumMap.indexOf('Journeyman'), '5:37'],
      ['Lead Me On', albumMap.indexOf('Journeyman'), '5:52'],
      ['Before You Accuse Me', albumMap.indexOf('Journeyman'), '3:55'],
      ['Blues Before Sunrise', albumMap.indexOf('From the Cradle'), '2:58'],
      ['Third Degree', albumMap.indexOf('From the Cradle'), '5:07'],
      ['Reconsider Baby', albumMap.indexOf('From the Cradle'), '3:20'],
      ['Hoochie Coochie Man', albumMap.indexOf('From the Cradle'), '3:16'],
      ['Five Long Years', albumMap.indexOf('From the Cradle'), '4:47'],
      ['I\'m Tore Down', albumMap.indexOf('From the Cradle'), '3:02'],
      ['How Long Blues', albumMap.indexOf('From the Cradle'), '3:09'],
      ['Goin\' Away Baby', albumMap.indexOf('From the Cradle'), '4:00'],
      ['Blues Leave Me Alone', albumMap.indexOf('From the Cradle'), '3:36'],
      ['Sinner\'s Prayer', albumMap.indexOf('From the Cradle'), '3:20'],
      ['Motherless Child', albumMap.indexOf('From the Cradle'), '2:57'],
      ['It Hurts Me Too', albumMap.indexOf('From the Cradle'), '3:17'],
      ['Someday After a While', albumMap.indexOf('From the Cradle'), '4:27'],
      ['Standin\' Round Crying', albumMap.indexOf('From the Cradle'), '3:39'],
      ['Driftin\'', albumMap.indexOf('From the Cradle'), '3:10'],
      ['Groaning the Blues', albumMap.indexOf('From the Cradle'), '6:05'],
      ['My Father\'s Eyes', albumMap.indexOf('Pilgrim'), '5:24'],
      ['River of Tears', albumMap.indexOf('Pilgrim'), '7:22'],
      ['Pilgrim', albumMap.indexOf('Pilgrim'), '5:50'],
      ['Broken Hearted', albumMap.indexOf('Pilgrim'), '7:52'],
      ['One Chance', albumMap.indexOf('Pilgrim'), '5:55'],
      ['Circus', albumMap.indexOf('Pilgrim'), '4:11'],
      ['Going Down Slow', albumMap.indexOf('Pilgrim'), '5:19'],
      ['Fall Like Rain', albumMap.indexOf('Pilgrim'), '3:50'],
      ['Born in Time', albumMap.indexOf('Pilgrim'), '4:41'],
      ['Sick and Tired', albumMap.indexOf('Pilgrim'), '5:43'],
      ['Needs His Woman', albumMap.indexOf('Pilgrim'), '3:45'],
      ['She\'s Gone', albumMap.indexOf('Pilgrim'), '4:45'],
      ['You Were There', albumMap.indexOf('Pilgrim'), '5:31'],
      ['Inside of Me', albumMap.indexOf('Pilgrim'), '5:25']
    ];

    helper.seedWithTimestamps(db, 'songs', columns, arrayOfInserts);
    callback();
  });
};

exports.down = function(db, callback) {
  db.runSql("delete from songs where 1=1", callback());
};

exports._meta = {
  "version": 1
};
