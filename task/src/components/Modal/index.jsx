import { useState } from "react";
import "./modal.css";

export default function Modal({ isOpen }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="dialog">
      <p className="modalP">Login e senha inválidos ou inexistentes.</p>
      <p className="modalP">Deseja criar uma conta?</p>
      <br />

      <div>
        <a className="linkModal" href="/signup">
          Criar conta
        </a>
        <a className="linkModal" href="/">
          Voltar para login
        </a>
      </div>
    </div>
  );
}
