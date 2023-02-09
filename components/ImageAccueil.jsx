import Gallerie from './Gallerie';

export default function Image(){
    const images = [
        { page: '/chien', src: '/img/Chien.jpg', alt: 'Chien', width: 300, height: 400, categorie: "Chien" },
        { page: '/chat', src: '/img/Chat.jpg', alt: 'Chat', width: 300, height: 400, categorie: "Chat" },
        { page: '/oiseau', src: '/img/Oiseaux.jpg', alt: 'Oiseaux', width: 300, height: 400, categorie: "Oiseaux" },
        { page: '/petitanimaux', src: '/img/Petit_animaux.jpg', alt: 'Petit animaux', width: 300, height: 400, categorie: "Petit animaux" },
        { page: '/aquatique', src: '/img/Poisson.jpg', alt: 'Poisson', width: 300, height: 400, categorie: "Poisson" },
        { page: '/reptile', src: '/img/Reptile.jpg', alt: 'Reptile', width: 300, height: 400, categorie: "Reptile" },
      ];
    return (
        <Gallerie images={images} />
      );
}