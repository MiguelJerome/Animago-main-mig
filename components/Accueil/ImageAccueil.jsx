import Gallerie from './Gallerie';
import images from '../../models/imageCategories';

export default function Image(){
   
return(
    <>
        <Gallerie images={images} />
    </>
  );    
}