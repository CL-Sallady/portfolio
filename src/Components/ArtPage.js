import '../Css/ArtPage.css';
import { artworks } from '../Media';

function ArtPage() {
    const renderArtworks = artworks?.map(art => {
        return (
                <img className={'artwork'} src={art.path} alt={art.alt} /> 
        )
    })
    return (
      <div className="ArtPage">
         <h1 className='art-title'>Personal Work</h1>
        <div className={'art-content'}>
            {renderArtworks}
        </div>
      </div>
    );
  }
  
  export default ArtPage;
  