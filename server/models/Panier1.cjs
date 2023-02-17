const mongoose = require("mongoose");
const Produit = require("./Produit.cjs");

const panierSchema = new mongoose.Schema({
  produits: [Produit.schema],
  quantiteAchat: { type: Number, required: false, default: 0 },
  achatGrandTotal: { type: Number, required: false, default: 0 },
  purchaseTotalQuantitePerProduit: {
    type: Number,
    required: false,
    default: 0,
  },
});

let Panier;

try {
  Panier = mongoose.model("Panier");
} catch (error) {
  Panier = mongoose.model("Panier", panierSchema);
}

module.exports = Panier;
