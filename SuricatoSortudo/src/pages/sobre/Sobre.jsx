import { Link } from "react-router-dom";
import "./Sobre.css";

import "../../root/root.css";
function Sobre() {
  return (
    <div className=" Sobre">
      <Link to={"/sobre"}> </Link>
      <h1>Sobre Nós</h1>
      <h4>
        <p>
          Bem-vindo ao Suricato Sortudo, a sua loja de jogos de tabuleiro! Somos
          apaixonados por jogos e nosso objetivo é trazer a você a melhor
          seleção de jogos de tabuleiro do mercado. Aqui no Suricato Sortudo,
          acreditamos que os jogos de tabuleiro são uma maneira fantástica de
          reunir as pessoas. Seja para uma noite em família, uma reunião de
          amigos ou um evento de team building, temos o jogo perfeito para você.
          Nossa missão é simples: proporcionar a você a melhor experiência de
          compra de jogos de tabuleiro. Trabalhamos incansavelmente para
          selecionar os jogos mais divertidos, desafiadores e envolventes. Desde
          os clássicos atemporais até as novidades mais quentes, temos algo para
          todos. Além disso, estamos sempre aqui para ajudar. Se você precisa de
          recomendações ou tem dúvidas sobre um jogo, nossa equipe de
          especialistas em jogos está pronta para ajudar. Então, se você está
          procurando o próximo grande jogo para adicionar à sua coleção, ou
          apenas começando no mundo dos jogos de tabuleiro, o Suricato Sortudo é
          o lugar para você. Venha explorar nossa incrível seleção de jogos
          hoje!
        </p>
      </h4>
    </div>
  );
}
export default Sobre;
