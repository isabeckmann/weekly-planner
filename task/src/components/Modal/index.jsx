import { useState } from "react";
import "./modal.css";

export default function Modal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <dialog>
      <p>
        Login e senha inválidos ou inexistentes. <br /> Deseja criar uma conta?
      </p>
      <br />
      <a href="/signup">Criar conta</a>
      <a href="/">Voltar para login</a>
    </dialog>
  );
}
