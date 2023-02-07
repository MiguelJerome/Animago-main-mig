import ProduitCard from "./ProduitCard";

export default function ProduitData({ categorie }) {
    const defaultWidth = 400;
    const defaultHeight = 400;
    const images = [
        { _id: 1, categorie: "aquatique", stock: 50, price: 50.99, name: 'Aquarium Coral Fish Tank', src: '/img/produits/AquariumCoralFishTank.png', alt: 'Aquarium Coral Fish Tank', width: defaultWidth, height: defaultHeight },
        { _id: 2, categorie: "oiseau", stock: 40, price: 50.99, name: 'Bird House', src: '/img/produits/birdHouse.png', alt: 'Bird House', width: defaultWidth, height: defaultHeight },
        { _id: 3, categorie: "chat", stock: 20, price: 50.99, name: 'Catfish Toy', src: '/img/produits/catfishtoy.png', alt: 'Catfish Toy', width: defaultWidth, height: defaultHeight },
        { _id: 4, categorie: "chat", stock: 30, price: 50.99, name: 'Cat Litter', src: '/img/produits/catlLitter.png', alt: 'Cat Litter', width: defaultWidth, height: defaultHeight },
        { _id: 5, categorie: "chat", stock: 50, price: 50.99, name: 'Cat Scratch Toy', src: '/img/produits/catScratchToy.png', alt: 'Cat Scratch Toy', width: defaultWidth, height: defaultHeight },
        { _id: 6, categorie: "chat", stock: 70, price: 50.99, name: 'Pet Bed', src: '/img/produits/Chat de lit.png', alt: 'Pet Bed', width: defaultWidth, height: defaultHeight },
        { _id: 7, categorie: "chien", stock: 100, price: 50.99, name: 'Dog Biscuit', src: '/img/produits/dogBiscuit.png', alt: 'Dog Biscuit', width: defaultWidth, height: defaultHeight },
        { _id: 8, categorie: "chien", stock: 80, price: 50.99, name: '16kg Dog Food Bag', src: '/img/produits/dogfoodbag16kg.png', alt: '16kg Dog Food Bag', width: defaultWidth, height: defaultHeight },
        { _id: 9, categorie: "oiseaux", stock: 90, price: 50.99, name: 'Black Oil for Birds', src: '/img/produits/Huile noire pour oiseaux.png', alt: 'Black Oil for Birds', width: defaultWidth, height: defaultHeight },
        { _id: 10, categorie: "chien", stock: 110, price: 50.99, name: 'Dog Mattress', src: '/img/produits/Matelas pour chien.png', alt: 'Dog Mattress', width: defaultWidth, height: defaultHeight },
        { _id: 11, categorie: "chien", stock: 120, price: 50.99, name: 'Nerf Dog Toy', src: '/img/produits/nerfDog.png', alt: 'Nerf Dog Toy', width: defaultWidth, height: defaultHeight },
        { _id: 12, categorie: "chien", stock: 140, price: 50.99, name: 'Redbone Toy', src: '/img/produits/redbone.png', alt: 'Redbone Toy', width: defaultWidth, height: defaultHeight },
        { _id: 13, categorie: "chien", stock: 1500, price: 50.99, name: 'Dog Harness', src: '/img/produits/harnaiChien.png', alt: 'Dog Harness', width: defaultWidth, height: defaultHeight },
        { _id: 14, categorie: "petit animaux", stock: 1500, price: 50.99, name: 'Hamster Cage', src: '/img/produits/hansterCage.jpg', alt: 'Hamster Cage', width: defaultWidth, height: defaultHeight },
        { _id: 15, categorie: "reptile", stock: 1500, price: 50.99, name: 'Reptile Growth Terrarium.', src: '/img/produits/ReptileGrowthTerrarium.jpg', alt: 'Reptile Growth Terrarium.', width: defaultWidth, height: defaultHeight }
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
