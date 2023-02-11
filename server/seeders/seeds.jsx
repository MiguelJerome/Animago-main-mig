import userSeeds from '/user.json';
import produitSeeds from '/produit.json';
import db from '../config/connection.js';
import { User, Produit } from '../models';

db.once('open', async () => {

  try {
    // flush the database for the collections of produits and users
    await Produit.deleteMany({});
    await User.deleteMany({});

    // create all users from the collection users
    await User.create(userSeeds);
    console.log('users seeded');

    // create all produits from the collection produits
    await Produit.create(produitSeeds);
    console.log('produits seeded');
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