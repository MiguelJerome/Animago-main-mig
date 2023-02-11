//const userSeeds = require('./oneTeamUserSample.json');
//const userSeeds = require('./userSeed.json');
const userSeeds = require('./tenTeamUserSample.json');
//const userSeeds = require('./usersCustomSeed.json');
const playerSeeds = require('./produits.json');
const db = require('../config/connection.js');
const { User, Player } = require('../models');

db.once('open', async () => {

  try {
    // flush the database for the collections of players and users
    await Player.deleteMany({});
    await User.deleteMany({});

    // create all users from the collection users
    await User.create(userSeeds);
    console.log('users seeded');

    // create all playerss from the collection players
    await Player.create(playerSeeds);
    console.log('players seeded');
/*
    for (let i = 0; i < userSeeds.length; i++) {
      const { _id, Name } = await User.create(userSeeds[i]);
      const user = await User.findOneAndUpdate(
        { username: Name },
        {
          $addToSet: {
            players: _id,
          },
        }
      );
    }
*/
/*
    for (let i = 0; i < playerSeeds.length; i++) {
      const { _id, Name } = await Player.create(playerSeeds[i]);
      const user = await User.findOneAndUpdate(
        { username: Name },
        {
          $addToSet: {
            players: _id,
          },
        }
      );
    }
*/ 
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  process.exit();
});