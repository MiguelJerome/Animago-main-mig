import Gallerie from './Gallerie';

export default function Image(){
    const images = [
        { id: 1, page: '/chien', src: '/img/Chien.jpg', alt: 'Chien', width: 300, height: 400, categorie: "Chien" },
        { id: 2, page: '/chat', src: '/img/Chat.jpg', alt: 'Chat', width: 300, height: 400, categorie: "Chat" },
        { id: 3, page: '/oiseau', src: '/img/Oiseaux.jpg', alt: 'Oiseaux', width: 300, height: 400, categorie: "Oiseaux" },
        { id: 4, page: '/petitanimaux', src: '/img/Petit_animaux.jpg', alt: 'Petit animaux', width: 300, height: 400, categorie: "Petit animaux" },
        { id: 5, page: '/aquatique', src: '/img/Poisson.jpg', alt: 'Poisson', width: 300, height: 400, categorie: "Poisson" },
        { id: 6, page: '/reptile', src: '/img/Reptile.jpg', alt: 'Reptile', width: 300, height: 400, categorie: "Reptile" },
    ];
    return (<>
        <Gallerie images={images} />
      </>
      );
      
}