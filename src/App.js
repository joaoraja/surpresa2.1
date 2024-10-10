import React, { useState } from "react";
import "./App.css";

function App() {
  const [screen, setScreen] = useState(1);
  const [buttonPosition, setButtonPosition] = useState({
    top: "50%",
    left: "50%",
  });
  const [clickAttempts, setClickAttempts] = useState(0);
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [age, setAge] = useState("");
  const [beautyLevel, setBeautyLevel] = useState("");
  const [completeName, setCompleteName] = useState("");
  const [boyfriendName, setBoyfriendName] = useState("");
  const [boyfriendAge, setBoyfriendAge] = useState("");
  const [openPresent, setOpenPresent] = useState("");
  const [attemptsToOpen, setAttemptsToOpen] = useState(0);
  const [modal, setModal] = useState({
    show: false,
    title: "",
    message: "",
    type: "",
    nextScreen: null,
  });

  const handleYesClick = () => {
    if (clickAttempts < 5) {
      const newTop = Math.floor(Math.random() * 80) + "%";
      const newLeft = Math.floor(Math.random() * 80) + "%";
      setButtonPosition({ top: newTop, left: newLeft });
      setClickAttempts(clickAttempts + 1);
    } else {
      setScreen(2);
    }
  };

  const handleNextPage = () => {
    if (secondName.toLowerCase() !== "lindona") {
      setSecondName("LINDONA");
      setModal({
        show: true,
        title: "Você errou seu segundo nome",
        message: "Você realmente é ela?",
        type: "info",
      });
    } else if (beautyLevel !== "999999") {
      setModal({
        show: true,
        title: "Muito errado",
        message: "Só isso de beleza? Isso tá errado!!! Olhe de novo agora",
        type: "error",
      });
      setBeautyLevel("999999");
    } else {
      setScreen(screen + 1);
    }
  };

  const handleFinalize = () => {
    if (openPresent.toLowerCase() !== "sim" || attemptsToOpen === 0) {
      setOpenPresent("Não");
      setAttemptsToOpen(attemptsToOpen + 1);
      setModal({
        show: true,
        title: "NÃO??",
        message: "Você não quer abrir o presente?",
        type: "error",
      });
    } else {
      setModal({
        show: true,
        title: "HMMMM!",
        message: "Gostei do Nome!",
        type: "success",
        nextScreen: 4, // Definimos que a próxima tela será a tela de celebração
      });
    }
  };

  const handleModalClose = () => {
    if (modal.nextScreen) {
      setScreen(modal.nextScreen); // Muda para a próxima tela se "nextScreen" estiver definido
    }
    setModal({
      show: false,
      title: "",
      message: "",
      type: "",
      nextScreen: null,
    });
  };

  return (
    <div className="container">
      {screen === 1 && (
        <div className="message-box">
          <p>
            ESSE É UM PRESENTE CONFIDENCIAL E EXCLUSIVO. TEM CERTEZA QUE FOI PRA
            VOCÊ E DESEJA ABRI-LO??
          </p>
          <button
            className="no-button"
            onClick={() => alert("Opção NÃO selecionada!")}
          >
            NÃO
          </button>
          <button
            className="yes-button"
            style={{
              position: "absolute",
              top: buttonPosition.top,
              left: buttonPosition.left,
            }}
            onClick={handleYesClick}
          >
            SIM
          </button>
        </div>
      )}

      {screen === 2 && (
        <div className="form-box">
          <p>
            SE VOCÊ É REALMENTE ELA, PREENCHA O PEQUENO FORMULÁRIO DE 27 PÁGINAS
            ABAIXO
          </p>
          <p>Página 1/27</p>
          <form>
            <label>
              Primeiro nome:
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </label>
            <label>
              Segundo nome:
              <input
                type="text"
                value={secondName}
                onChange={(e) => setSecondName(e.target.value)}
              />
            </label>
            <label>
              Idade:
              <input
                type="text"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </label>
            <label>
              Nível de beleza (preencha de 0 a 10):
              <input
                type="text"
                value={beautyLevel}
                onChange={(e) => setBeautyLevel(e.target.value)}
              />
            </label>
          </form>
          <button className="next-button" onClick={handleNextPage}>
            Próxima Página
          </button>
        </div>
      )}

      {screen === 3 && (
        <div className="form-box">
          <p>BRINCADEIRA, SÃO SÓ 2 PÁGINAS</p>
          <p>
            Ainda não tô convencido que você seja Bia, preencha seu nome
            completo
          </p>
          <p>Página 2/2</p>
          <form>
            <label>
              Nome completo:
              <input
                type="text"
                value={completeName}
                onChange={(e) => setCompleteName(e.target.value)}
              />
            </label>
            <label>
              Nome do seu namorado:
              <input
                type="text"
                value={boyfriendName}
                onChange={(e) => setBoyfriendName(e.target.value)}
              />
            </label>
            <label>
              Idade dele:
              <input
                type="text"
                value={boyfriendAge}
                onChange={(e) => setBoyfriendAge(e.target.value)}
              />
            </label>
            <label>
              Você quer mesmo abrir esse presente:
              <input
                type="text"
                value={openPresent}
                onChange={(e) => setOpenPresent(e.target.value)}
              />
            </label>
          </form>
          <button className="finalize-button" onClick={handleFinalize}>
            Finalizar
          </button>
        </div>
      )}

      {screen === 4 && (
        <div className="celebration-page">
          <div className="celebration-message">
            <p>
              No inicio eu não tinha a minima idéia do quão importante você se
              tornaria na minha vida, e em pouco tempo percebi que você é
              simplesmente a pessoa que consegue sempre arrancar um sorriso do
              meu rosto e é você é a pessoa que eu sempre sonhei em conhcer,
              obrigado por ser você!!!
            </p>
            <img
              src="https://i.imgur.com/6Vr6E8q.jpeg" // Substitua pelo link da imagem correta
              alt="Foto comemorativa"
              className="celebration-image"
            />
            <p>
              Já como uma comemoração eu peço obrigado por esses 2 anos ao seu
              lado, de muita alegria e felicidade! Eu te amo meu amor!
            </p>
          </div>
        </div>
      )}

      {modal.show && (
        <div className={`modal ${modal.type}`}>
          <div className="modal-content">
            <h2>{modal.title}</h2>
            <p>{modal.message}</p>
            <button onClick={handleModalClose}>OK</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
