import '../Css/ArtPage.css';
import { artworks } from '../Media';
import Masonry from "react-responsive-masonry"

function ArtPage() {
    return (
      <div className="ArtPage">
         <h1 className='art-title'>Personal Work</h1>
         <p>Please be patient as the content of this page loads.</p>
        <div className={'art-content'}>
                <Masonry columnsCount={3} gutter="10px">
                 {artworks?.map(art =>  (
                    <img className={'artwork'} src={art.path} alt={art.alt} /> ))}
                </Masonry>
        </div>  
      </div>
    );
  }
  
  export default ArtPage;
  