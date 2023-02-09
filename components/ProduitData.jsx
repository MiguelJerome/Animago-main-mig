import React, { useState } from 'react';
import ProduitCard from "./ProduitCard";

export default function ProduitData({ categorie }) {
    const defaultWidth = 400;
    const defaultHeight = 400;
    const produits = [
        { _id: 100, categorie: "aquatique", stock: 50, price: 90.99, name: 'Aquarium Coral Fish Tank', description: `Cette élégante réplique de décoration Coral Cave par Underwater Treasures est la réplique parfaite pour donner du caractère à n'importe quel aquarium.`, src: '/img/produits/AquariumCoralFishTank.png', alt: 'Aquarium Coral Fish Tank', width: defaultWidth, height: defaultHeight },
        { _id: 101, categorie: "oiseau", stock: 40, price: 76.99, name: 'Bird House', description: `Cabanes à oiseaux suspendues pour l'extérieur Millwood Pines, cabanes à oiseaux décoratives peintes à la main pour l'extérieur.`, src: '/img/produits/birdHouse.png', alt: 'Bird House', width: defaultWidth, height: defaultHeight },
        { _id: 102, categorie: "chat", stock: 20, price: 15.99, name: 'Catfish Toy', description: `Jouet électrique pour chat de poisson jouet de chat en mouvement réaliste jouet de poisson Kicker de chat avec herbe à chat.`, src: '/img/produits/catfishtoy.png', alt: 'Catfish Toy', width: defaultWidth, height: defaultHeight },
        { _id: 103, categorie: "chat", stock: 30, price: 19.99, name: 'Cat Litter', description: `Litière agglomérante ARM & HAMMER à formule avancée anti-odeurs protection double pour chats.`, src: '/img/produits/catlLitter.png', alt: 'Cat Litter', width: defaultWidth, height: defaultHeight },
        { _id: 104, categorie: "chat", stock: 50, price: 25.99, name: 'Cat Scratch Toy', description: `Aidez votre chat à lutter contre l'ennui et à maintenir des griffes en pleine santé, avec ce poteau simple et facile à transporter.`, src: '/img/produits/catScratchToy.png', alt: 'Cat Scratch Toy', width: defaultWidth, height: defaultHeight },
        { _id: 105, categorie: "chien", stock: 100, price: 8.99, name: 'Dog Biscuit', description: `Les biscuits pour chien Milk Bone Original sont emballés avec un bon goût et une bonne santé pour donner à votre chien des dents plus propres et une haleine plus fraîche. Disponible en S, M, L et XL.`, src: '/img/produits/dogBiscuit.png', alt: 'Dog Biscuit', width: defaultWidth, height: defaultHeight },
        { _id: 106, categorie: "chien", stock: 80, price: 33.99, name: '16kg Dog Food Bag', description: `ALPO est synonyme de vrais chiens partout en leur donnant le goût de viande qu'ils veulent et la nutrition dont ils ont besoin. Tout en offrant une saveur et une variété exceptionnelles pour rendre les repas que votre chien aura hâte.`, src: '/img/produits/dogfoodbag16kg.png', alt: '16kg Dog Food Bag', width: defaultWidth, height: defaultHeight },
        { _id: 107, categorie: "oiseaux", stock: 90, price: 79.99, name: 'Black Oil for Birds', description: `Graine de tournesol à écale noire riche en huile.`, src: '/img/produits/Huile noire pour oiseaux.png', alt: 'Black Oil for Birds', width: defaultWidth, height: defaultHeight },
        { _id: 108, categorie: "chien", stock: 110, price: 29.99, name: 'Dog Mattress', description: `Le lit rond pour animal de compagnie offre un endroit sûr et confortable pour un chat ou un petit chien pour dormir.`, src: '/img/produits/Matelas pour chien.png', alt: 'Dog Mattress', width: defaultWidth, height: defaultHeight },
        { _id: 109, categorie: "petit animaux", stock: 1500, price: 56.99, name: 'Hamster Cage', description: `Disponibles dans une variété de modèles, ces cages sont conçues pour accueillir votre petit animal de compagnie dans un confort total. L'assemblage rapide et sans outil vous permet de l'installer en quelques minutes.`, src: '/img/produits/hansterCage.jpg', alt: 'Hamster Cage', width: defaultWidth, height: defaultHeight },
        { _id: 110, categorie: "reptile", stock: 1500, price: 70.99, name: 'Reptile Growth Terrarium', description: `Tank de dragon barbu, réservoir de grenouille, cage de dragon barbu, Accessoires de dragon barbu, décoration de terrarium, accessoires de réservoir de gecko, boules de dragon, décoration de reptile.`, src: '/img/produits/ReptileGrowthTerrarium.jpg', alt: 'Reptile Growth Terrarium', width: defaultWidth, height: defaultHeight },
        { _id: 111, categorie: "reptile", stock: 1500, price: 62.99, name: 'Reptile Mister System', description: `Humidificateurs pour terrariums et terrariums Taille 3 L Parfait pour divers reptiles/amphibiens/herps/paludarium/vivarium.`, src: '/img/produits/ReptileAutomaticMisterSystem.jpg', alt: 'Reptile Automatic Mister System', width: defaultWidth, height: defaultHeight },
        { _id: 112, categorie: "reptile", stock: 1500, price: 38.99, name: 'ReptiSand Terrarium Sand', description: `ReptiSand est disponible en deux couleurs naturelles sans colorants ni produits chimiques ajoutés. Il stimule le comportement naturel de creuser et de creuser et est un excellent conducteur de chaleur. ReptiSand crée un environnement très naturel et attrayant pour les espèces de reptiles du désert. Idéal pour les dragons barbus, boas de sable, tortues à coquillage souple, etc.`, src: '/img/produits/ReptiSand Terrarium Sand.jpg', alt: 'ReptiSand Terrarium Sand', width: defaultWidth, height: defaultHeight },
        { _id: 113, categorie: "petit animaux", stock: 1500, price: 30.99, name: 'BUCATSTATE Sand Bath', description: `Conteneur de bain en acrylique pour hamster - Salle de douche et de creuser - Pour souris, gerbilles`, src: '/img/produits/BUCATSTATE Sand Bath.jpg', alt: 'BUCATSTATE Sand Bath', width: defaultWidth, height: defaultHeight },
        { _id: 114, categorie: "oiseaux", stock: 1500, price: 288.99, name: 'Bird Feeder with Camera', description: `Mangeoire à oiseaux, [2023] Caméra d'observation des oiseaux sans fil alimentée par piles, capture automatique de vidéo et notification des oiseaux détectés, nichoir à oiseaux avec caméra, mangeoire Oiseaux extérieur (Birdfy Lite + solaire).`, src: '/img/produits/Bird Feeder with Camera.jpg', alt: 'Bird Feeder with Camera', width: defaultWidth, height: defaultHeight },
        { _id: 115, categorie: "aquatique", stock: 1500, price: 243.99, name: 'Aqueon Aquarium Fish Tank', description: `Aqueon Kit de démarrage pour aquarium avec éclairage LED.`, src: '/img/produits/aquarium1.png', alt: 'Aqueon Aquarium Fish Tank', width: defaultWidth, height: defaultHeight },
        { _id: 116, categorie: "aquatique", stock: 1500, price: 11.99, name: 'Tetra Fin Goldfish Pellets', description: `Tetra Flocons de poisson rouge, nourriture facile à digérer, 200 g.`, src: '/img/produits/FishFood2.png', alt: 'Tetra Fin Goldfish Pellets', width: defaultWidth, height: defaultHeight },
        { _id: 117, categorie: "petit animaux", stock: 1500, price: 11.99, name: 'Wild Harvest Hamster Food', description: `Wild Harvest Advanced Nutrition Cochon d'Inde 1,8 kg.`, src: '/img/produits/hamsterFood1.png', alt: 'Wild Harvest Hamster Food', width: defaultWidth, height: defaultHeight }
    ];

    let filteredProduits;
    if (!categorie) {
        filteredProduits = produits;
    } else {
        filteredProduits = produits.filter(({ categorie: produitCategorie }) => produitCategorie === categorie);
    }
      
return (<>
        <main>
            <ProduitCard produits={filteredProduits} />
        </main>
    </>
    );
}