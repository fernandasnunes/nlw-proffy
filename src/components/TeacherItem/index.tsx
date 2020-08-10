import React from "react";
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import './styles.css'
function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars2.githubusercontent.com/u/46932355?s=460&u=922fdcc7785aa36356ac1e4be343b4cc88374840&v=4"
          alt="Fernanda Nunes"
        />

        <div>
          <strong> Fernanda Nunes</strong>
          <span> Quimica</span>
        </div>
      </header>
      <p>
        Entusiasta das melhores tecnologias de química avançada.
        <br />
        Apaixonado por explodir coisas em labotarório e por mudar a vida das
        pessoas através das experiências.
      </p>
      <footer>
        <p>
          {" "}
          Preço/hora
          <strong> R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="whatsapp" />
          Entrar em contato.
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
