import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="Cabecalho">
        <nav>
          <a href="#">Home</a>
          <a href="#">Produtos</a>
          <a href="#">Recursos</a>
        </nav>
        <div className="Logo">
          <img src={logo}></img>
        </div>
      </div>
      <main>
        <h1>Vaporwave</h1>
        <div className="Fundo1">
          <div className="Texto">
           <a>  O Vaporwave surgiu como um estilo nascido da Internet, derivado do trabalho de artistas do pop hipnagógico como Ariel Pink e James Ferraro. Os álbuns Chuck Person's Eccojams Vol. 1, de Daniel Lopatin (Oneohtrix Point Never), e Far Side Virtual, de James Ferraro, são frequentemente creditados como marcos iniciais no desenvolvimento do vaporwave. Em 2011, o álbum Floral Shoppe, da artista Vektroid, se tornou o primeiro álbum do gênero vaporwave a ganhar reconhecimento popular, com ajuda de comunidades online, notoriamente o board /mu/ (música) do 4chan. Nos anos seguintes, o gênero encontrou espaço mais amplo entre websites como Bandcamp, SoundCloud, Last.fm e 4chan, e continuou a evoluir em com o surgimento de artistas como Skylar Spence e Blank Banshee, adotando sons que "promovem uma alusão ao virtual plaza, mas que significamente transcendem-no". Outros subgêneros do vaporwave incluem Mallsoft, que "conjura o muzak tocado nos shopping centers".</a>
          </div>
          
        </div>
      </main>
      

    </div>
  );
}


export default App;

