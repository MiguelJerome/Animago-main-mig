import Gallerie from "./Gallerie";

export default function Images() {
    const defaultWidth = 400;
    const defaultHeight = 400;
    const images = [
        { _id: 1, price: 50.99, name: 'Aquarium Coral Fish Tank', src: '/img/produits/AquariumCoralFishTank.png', alt: 'Aquarium Coral Fish Tank', width: defaultWidth, height: defaultHeight },
        { _id: 2, price: 50.99, name: 'Bird House', src: '/img/produits/birdHouse.png', alt: 'Bird House', width: defaultWidth, height: defaultHeight },
        { _id: 3, price: 50.99, name: 'Catfish Toy', src: '/img/produits/catfishtoy.png', alt: 'Catfish Toy', width: defaultWidth, height: defaultHeight },
        { _id: 4, price: 50.99, name: 'Cat Litter', src: '/img/produits/catlLitter.png', alt: 'Cat Litter', width: defaultWidth, height: defaultHeight },
        { _id: 5, price: 50.99, name: 'Cat Scratch Toy', src: '/img/produits/catScratchToy.png', alt: 'Cat Scratch Toy', width: defaultWidth, height: defaultHeight },
        { _id: 6, price: 50.99, name: 'Pet Bed', src: '/img/produits/Chat de lit.png', alt: 'Pet Bed', width: defaultWidth, height: defaultHeight },
        { _id: 7, price: 50.99, name: 'Dog Biscuit', src: '/img/produits/dogBiscuit.png', alt: 'Dog Biscuit', width: defaultWidth, height: defaultHeight },
        { _id: 8, price: 50.99, name: '16kg Dog Food Bag', src: '/img/produits/dogfoodbag16kg.png', alt: '16kg Dog Food Bag', width: defaultWidth, height: defaultHeight },
        { _id: 9, price: 50.99, name: 'Black Oil for Birds', src: '/img/produits/Huile noire pour oiseaux.png', alt: 'Black Oil for Birds', width: defaultWidth, height: defaultHeight },
        { _id: 10, price: 50.99, name: 'Dog Mattress', src: '/img/produits/Matelas pour chien.png', alt: 'Dog Mattress', width: defaultWidth, height: defaultHeight },
        { _id: 11, price: 50.99, name: 'Nerf Dog Toy', src: '/img/produits/nerfDog.png', alt: 'Nerf Dog Toy', width: defaultWidth, height: defaultHeight },
        { _id: 12, price: 50.99, name: 'Redbone Toy', src: '/img/produits/redbone.png', alt: 'Redbone Toy', width: defaultWidth, height: defaultHeight },
        { _id: 13, price: 50.99, name: 'Dog Harness', src: '/img/produits/harnaiChien.png', alt: 'Dog Harness', width: defaultWidth, height: defaultHeight },
    ];

    return (
        <main>
            <Gallerie images={images} />
        </main>
    );
}
