import mongoose from 'mongoose';
const userSchema = require('./user.jsx');
const produitSchema = require('./produit.jsx');

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/animago",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );

const User = mongoose.model('User', userSchema);
const Produit = mongoose.model('Produit', produitSchema);

module.exports = { User, Produit };
