const mongoose = require("mongoose");
const Panier = require("./Panier1.cjs");
const User = require("./User.cjs");

const commandeSchema = new mongoose.Schema({
  panier: { type: Panier.schema, required: true },
  user: { type: User.schema, required: true },
  date: { type: Date, default: Date.now, required: true },
});

let Commande;

try {
  Commande = mongoose.model("Commande");
} catch (error) {
  Commande = mongoose.model("Commande", commandeSchema);
}

module.exports = Commande;
