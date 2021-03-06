import React from "react";
import { Link } from "react-router-dom";
import focusImg from "../../assets/focus.jpg";

import Menu from "../../components/Menu";
import Socials from "../../components/Socials";

import { FiArrowRightCircle } from "react-icons/fi";

import { Container, Details, Info } from "./styles";

const Home: React.FC = () => {
  return (
    <Container>
      <Info>
        <h1>Autoconhecimento</h1>
        <div>
          <div>
            <h2>Burnout</h2>
            <p>
              Um grande motivo que pode atrapalhar sua produtividade é o
              burnout. A síndrome leva a pessoa à exaustão física e emocional,
              deixando-a com uma dificuldade imensa de produzir qualquer tarefa
              que, em seu estado natural, seria tranquila. Portanto, com o
              autoconhecimento, você diminui muito as chances de chegar ate este
              estado.
            </p>

            <Link to="/explode">
              Proximo <FiArrowRightCircle />
            </Link>

            <Socials />
          </div>

          <div>
            <img src={focusImg} alt="imagem sobre foco" />
          </div>
        </div>
      </Info>
      <Details>
        <Menu />
      </Details>
    </Container>
  );
};

export default Home;
