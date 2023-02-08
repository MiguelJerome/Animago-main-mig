import React, { useState } from 'react';
import ProduitCard from "./ProduitCard";

export default function ProduitData({ categorie }) {
    const defaultWidth = 400;
    const defaultHeight = 400;
    const produits = [
        { _id: 100, categorie: "aquatique", stock: 50, price: 50.99, name: 'Aquarium Coral Fish Tank', description: `Test decription produit 100`, src: '/img/produits/AquariumCoralFishTank.png', alt: 'Aquarium Coral Fish Tank', width: defaultWidth, height: defaultHeight },
        { _id: 101, categorie: "oiseau", stock: 40, price: 50.99, name: 'Bird House', description: `Test decription produit# 101`, src: '/img/produits/birdHouse.png', alt: 'Bird House', width: defaultWidth, height: defaultHeight },
        { _id: 102, categorie: "chat", stock: 20, price: 50.99, name: 'Catfish Toy', description: `Test decription produit# 102`, src: '/img/produits/catfishtoy.png', alt: 'Catfish Toy', width: defaultWidth, height: defaultHeight },
        { _id: 103, categorie: "chat", stock: 30, price: 50.99, name: 'Cat Litter', description: `Test decription produit# 103`, src: '/img/produits/catlLitter.png', alt: 'Cat Litter', width: defaultWidth, height: defaultHeight },
        { _id: 104, categorie: "chat", stock: 50, price: 50.99, name: 'Cat Scratch Toy', description: `Test decription produit# 104`, src: '/img/produits/catScratchToy.png', alt: 'Cat Scratch Toy', width: defaultWidth, height: defaultHeight },
        { _id: 105, categorie: "chat", stock: 70, price: 50.99, name: 'Pet Bed', description: `Test decription produit# 105`, src: '/img/produits/Chat de lit.png', alt: 'Pet Bed', width: defaultWidth, height: defaultHeight },
        { _id: 106, categorie: "chien", stock: 100, price: 50.99, name: 'Dog Biscuit', description: `Test decription produit# 106`, src: '/img/produits/dogBiscuit.png', alt: 'Dog Biscuit', width: defaultWidth, height: defaultHeight },
        { _id: 107, categorie: "chien", stock: 80, price: 50.99, name: '16kg Dog Food Bag', description: `Test decription produit# 107`, src: '/img/produits/dogfoodbag16kg.png', alt: '16kg Dog Food Bag', width: defaultWidth, height: defaultHeight },
        { _id: 108, categorie: "oiseaux", stock: 90, price: 50.99, name: 'Black Oil for Birds', description: `Test decription produit# 108`, src: '/img/produits/Huile noire pour oiseaux.png', alt: 'Black Oil for Birds', width: defaultWidth, height: defaultHeight },
        { _id: 109, categorie: "chien", stock: 110, price: 50.99, name: 'Dog Mattress', description: `Test decription produit# 109`, src: '/img/produits/Matelas pour chien.png', alt: 'Dog Mattress', width: defaultWidth, height: defaultHeight },
        { _id: 110, categorie: "chien", stock: 120, price: 50.99, name: 'Nerf Dog Toy', description: `Test decription produit# 110`, src: '/img/produits/nerfDog.png', alt: 'Nerf Dog Toy', width: defaultWidth, height: defaultHeight },
        { _id: 111, categorie: "chien", stock: 140, price: 50.99, name: 'Redbone Toy', description: `Test decription produit# 111`, src: '/img/produits/redbone.png', alt: 'Redbone Toy', width: defaultWidth, height: defaultHeight },
        { _id: 112, categorie: "chien", stock: 1500, price: 50.99, name: 'Dog Harness', description: `Test decription produit# 112`, src: '/img/produits/harnaiChien.png', alt: 'Dog Harness', width: defaultWidth, height: defaultHeight },
        { _id: 113, categorie: "petit animaux", stock: 1500, price: 50.99, name: 'Hamster Cage', description: `Test decription produit# 113`, src: '/img/produits/hansterCage.jpg', alt: 'Hamster Cage', width: defaultWidth, height: defaultHeight },
        { _id: 114, categorie: "reptile", stock: 1500, price: 50.99, name: 'Reptile Growth Terrarium', description: `Test decription produit# 114`, src: '/img/produits/ReptileGrowthTerrarium.jpg', alt: 'Reptile Growth Terrarium', width: defaultWidth, height: defaultHeight },
        { _id: 115, categorie: "reptile", stock: 1500, price: 50.99, name: 'Reptile Mister System', description: `Test decription produit# 115`, src: '/img/produits/ReptileAutomaticMisterSystem.jpg', alt: 'Reptile Automatic Mister System', width: defaultWidth, height: defaultHeight },
        { _id: 116, categorie: "reptile", stock: 1500, price: 50.99, name: 'ReptiSand Terrarium Sand', description: `Test decription produit# 116`, src: '/img/produits/ReptiSand Terrarium Sand.jpg', alt: 'ReptiSand Terrarium Sand', width: defaultWidth, height: defaultHeight },
        { _id: 117, categorie: "petit animaux", stock: 1500, price: 50.99, name: 'BUCATSTATE Sand Bath', description: `Test decription produit# 117`, src: '/img/produits/BUCATSTATE Sand Bath.jpg', alt: 'BUCATSTATE Sand Bath', width: defaultWidth, height: defaultHeight },
        { _id: 118, categorie: "oiseaux", stock: 1500, price: 50.99, name: 'Bird Feeder with Camera', description: `Test decription produit# 118`, src: '/img/produits/Bird Feeder with Camera.jpg', alt: 'Bird Feeder with Camera', width: defaultWidth, height: defaultHeight }
    ];

    let filteredProduits;
    if (!categorie) {
        filteredProduits = produits;
    } else {
        filteredProduits = produits.filter(({ categorie: produitCategorie }) => produitCategorie === categorie);
    }
      
return (
    <main>
        <ProduitCard produits={filteredProduits} />
    </main>
    );
}
