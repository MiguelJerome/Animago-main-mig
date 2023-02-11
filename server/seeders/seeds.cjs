const userSeeds = require("../seeders/user.json");
const produitSeeds = require("../seeders/produit.json");
const db = require("../config/connexion.cjs");
const User = require("../models/User.cjs");
const Produit = require("../models/Produit.cjs");

db.once("open", async () => {
  try {
    // flush the database for the collections of produits and users
    await Produit.deleteMany({});
    await User.deleteMany({});

    // create all users from the collection users
    await User.create(userSeeds);
    console.log("users seeded");

    // create all produits from the collection produits
    await Produit.create(produitSeeds);
    console.log("produits seeded");
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  process.exit();
});
