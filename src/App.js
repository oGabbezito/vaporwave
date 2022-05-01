import logo from './logo.png';
import logo1 from './logo1.png';
import './App.css';
import Vaporwave1 from './vaporwave.gif'
import ImagemGIF from './imagem.gif'
import Musica from './musica.gif'
import arte from './arte.gif'
import Imagem1 from './imagem1.jpg'
import Imagem2 from './imagem2.webp'
import Imagem4 from './imagem4.jpg'
import Music from './music.mp3'
import Seta from './Seta.png'

function App() {
  return (
    <div className="App">
        <div className="Cabecalho">
          <nav>
            <a href="#vape_texto">Vaporwave</a>
            <a href="#Musica">Musica</a>
            <a href="#Arte">Arte</a>
            <a href="#img">Imagens</a>
          </nav>

          <div className="Logo">
            <img src={logo}></img>
          </div>

          <div className="Audio">
            <audio controls="controls" autoplay="autoplay" loop="loop">
              <source src={Music}></source>
            </audio>
          </div> 

      </div>

      <div className="Main">

        <div id="vape_texto" className="Vaporwave">
          <img src={Vaporwave1}></img>
        </div>
        <div className="Fundo1">
          <div  className="Texto1">
           <a> Você pode até não ter escutado falar sobre o Vaporwave, mas com certeza já deu de cara com algumas de suas características, seja ao ouvir uma música ou visualizar uma arte pela internet, já que a tendência nasceu em comunidades on-line como Tumblr, Reddit, SoundCloud e 4chan, no início de 2010.
           O Vaporwave é um gênero musical e um movimento artístico que mistura nostalgia, estética retrô do auge dos anos 80 e referências tecnológicas como vídeo-games, renderizações de computador fora de moda, cyberpunk, glitches (falhas), design web dos anos 2000, inspirações dos VHS e fitas cassete, obras de arte da Ásia, além de elementos de publicidade e caracteres japoneses, paisagens tropicais, estátuas neoclássica gregas e ritmos como as músicas de elevador, que tem influência no lounge e no jazz suave.</a>
          </div>

          <div id="Musica" className="Musica">
            <img src={Musica}></img>
          </div>
          <div className="Fundo2">
            <div className="texto2">
              <a>
              Quando falamos em música, podemos citar os anos 1980, 1990 e 2000 como referência, tipicamente aquelas músicas sintetizadas de lounge, jazz suave e as músicas tocadas nos elevadores.
              Com a facilidade de produzir sons no computador, os entusiastas do Vaporwave passaram a desenvolver seus próprios trabalhos utilizando tonalidades sonoras modificadas e várias camadas de distorção. Os ritmos são alterados dando vida à samples musicais únicos que soam como música ambiente de shopping.Nada melhor para exemplificar do que ouvir Macintosh Plus, a produtora de música eletrônica Vektroid (lançada sob o pseudônimo alternativo de Macintosh Plus em 2011), um dos primeiros álbuns do gênero experimental a ganhar reconhecimento popular na internet. Desde então, o álbum Floral Shoppe têm sido considerado por muitos essencial no gênero Vaporwave.   
              Para muitos, o gênero era frequentemente descrito como uma sátira da cultura empresarial, consumista e do capitalismo moderno, especificamente como uma crítica também à música de dança eletrônica tradicional.
              </a>
            </div>
          </div>

          <div id="Arte" className="Arte">
            <img src={arte}></img>
          </div>
          <div className="Fundo4">
            <div className="texto4">
              <a>
              Quando falamos na estética Vaporwave na arte e no design, as imagens são bem características. E apesar de se concentrarem na nostalgia dos anos 2000 e trazer bastante inspirações em neon sci-fi (cores rosa e azul), colagens vintage, estátuas greco-romanas, interferências digitais, símbolos do capitalismo (em geral usados de forma irônica), pode-se dizer que a aparência Vaporwave é hipnótica. </a>
            </div>
          </div>


          </div>
          <div id ="img" className="Imagem">
          <img src={ImagemGIF}></img>
          </div>

          <div className="Fundo3">

          <div className="Galeria">
          <img className="efeito" src={Imagem1} width="300px"  height="300px"></img>
          <img className="efeito" src={Imagem2} width="300px"  height="300px"></img>
          <img className="efeito" src={Imagem4}width="300px"  height="300px"></img>
          <img id="Seta" src={Seta} width="50px"  height="50px"></img>

          </div>
    
          </div>
          
      
      </div>

      <footer>
         <div className="logo2">
         <img src={logo1} width="70px" height="70px" ></img>
         </div>
         <div className="inf"> 
         <a> Privacidade | Termos | Preferências de cookies</a>
         </div>
         <div className="TextoFo">  
         <a>Site utilizado apenas para estudo, todas as imagens e textos utilizadas são de uso não comercial nessa pagina, credito aos devidos autores.</a> 
         </div>
      </footer>
    
    </div>
  );
}


export default App;

