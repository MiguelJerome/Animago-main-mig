import ProduitCard from "./ProduitCard";

export default function ProduitData({ categorie }) {
    const defaultWidth = 400;
    const defaultHeight = 400;
    const images = [
        { _id: 100, categorie: "aquatique", stock: 50, price: 50.99, name: 'Aquarium Coral Fish Tank', src: '/img/produits/AquariumCoralFishTank.png', alt: 'Aquarium Coral Fish Tank', width: defaultWidth, height: defaultHeight },
        { _id: 101, categorie: "oiseau", stock: 40, price: 50.99, name: 'Bird House', src: '/img/produits/birdHouse.png', alt: 'Bird House', width: defaultWidth, height: defaultHeight },
        { _id: 102, categorie: "chat", stock: 20, price: 50.99, name: 'Catfish Toy', src: '/img/produits/catfishtoy.png', alt: 'Catfish Toy', width: defaultWidth, height: defaultHeight },
        { _id: 103, categorie: "chat", stock: 30, price: 50.99, name: 'Cat Litter', src: '/img/produits/catlLitter.png', alt: 'Cat Litter', width: defaultWidth, height: defaultHeight },
        { _id: 104, categorie: "chat", stock: 50, price: 50.99, name: 'Cat Scratch Toy', src: '/img/produits/catScratchToy.png', alt: 'Cat Scratch Toy', width: defaultWidth, height: defaultHeight },
        { _id: 105, categorie: "chat", stock: 70, price: 50.99, name: 'Pet Bed', src: '/img/produits/Chat de lit.png', alt: 'Pet Bed', width: defaultWidth, height: defaultHeight },
        { _id: 106, categorie: "chien", stock: 100, price: 50.99, name: 'Dog Biscuit', src: '/img/produits/dogBiscuit.png', alt: 'Dog Biscuit', width: defaultWidth, height: defaultHeight },
        { _id: 107, categorie: "chien", stock: 80, price: 50.99, name: '16kg Dog Food Bag', src: '/img/produits/dogfoodbag16kg.png', alt: '16kg Dog Food Bag', width: defaultWidth, height: defaultHeight },
        { _id: 108, categorie: "oiseaux", stock: 90, price: 50.99, name: 'Black Oil for Birds', src: '/img/produits/Huile noire pour oiseaux.png', alt: 'Black Oil for Birds', width: defaultWidth, height: defaultHeight },
        { _id: 109, categorie: "chien", stock: 110, price: 50.99, name: 'Dog Mattress', src: '/img/produits/Matelas pour chien.png', alt: 'Dog Mattress', width: defaultWidth, height: defaultHeight },
        { _id: 110, categorie: "chien", stock: 120, price: 50.99, name: 'Nerf Dog Toy', src: '/img/produits/nerfDog.png', alt: 'Nerf Dog Toy', width: defaultWidth, height: defaultHeight },
        { _id: 111, categorie: "chien", stock: 140, price: 50.99, name: 'Redbone Toy', src: '/img/produits/redbone.png', alt: 'Redbone Toy', width: defaultWidth, height: defaultHeight },
        { _id: 112, categorie: "chien", stock: 1500, price: 50.99, name: 'Dog Harness', src: '/img/produits/harnaiChien.png', alt: 'Dog Harness', width: defaultWidth, height: defaultHeight },
        { _id: 113, categorie: "petit animaux", stock: 1500, price: 50.99, name: 'Hamster Cage', src: '/img/produits/hansterCage.jpg', alt: 'Hamster Cage', width: defaultWidth, height: defaultHeight },
        { _id: 114, categorie: "reptile", stock: 1500, price: 50.99, name: 'Reptile Growth Terrarium', src: '/img/produits/ReptileGrowthTerrarium.jpg', alt: 'Reptile Growth Terrarium', width: defaultWidth, height: defaultHeight },
        { _id: 115, categorie: "reptile", stock: 1500, price: 50.99, name: 'Reptile Mister System', src: '/img/produits/ReptileAutomaticMisterSystem.jpg', alt: 'Reptile Automatic Mister System', width: defaultWidth, height: defaultHeight },
        { _id: 116, categorie: "reptile", stock: 1500, price: 50.99, name: 'ReptiSand Terrarium Sand', src: '/img/produits/ReptiSand Terrarium Sand.jpg', alt: 'ReptiSand Terrarium Sand', width: defaultWidth, height: defaultHeight },
        { _id: 117, categorie: "petit animaux", stock: 1500, price: 50.99, name: 'BUCATSTATE Sand Bath', src: '/img/produits/BUCATSTATE Sand Bath.jpg', alt: 'BUCATSTATE Sand Bath', width: defaultWidth, height: defaultHeight },
        { _id: 118, categorie: "oiseaux", stock: 1500, price: 50.99, name: 'Bird Feeder with Camera', src: '/img/produits/Bird Feeder with Camera.jpg', alt: 'Bird Feeder with Camera', width: defaultWidth, height: defaultHeight }
    ];

    let filteredImages;
    if (!categorie) {
        filteredImages = images;
    } else {
        filteredImages = images.filter(({ categorie: imageCategorie }) => imageCategorie === categorie);
    }
    
    
return (
    <main>
        <ProduitCard images={filteredImages} />
    </main>
);
}
