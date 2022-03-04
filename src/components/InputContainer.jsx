import React, { useState } from "react";
export default function InputContainer({ label, value }) {
  const [disabled, setDisabled] = useState(true);
  const [isActive, setActive] = useState("false");

  function handleGameClick() {
    setDisabled(!disabled);
    setActive(!isActive);
  }

  return (
    <div className="inputContainer">
      <label>{label}</label>
      <span className={isActive ? null : "hide"} onClick={handleGameClick}>
        Editar
      </span>
      <span className={isActive ? "hide" : null} onClick={handleGameClick}>
        Guardar
      </span>
      <p>
        <input
          className={isActive ? "disabled" : null}
          type="text"
          disabled={disabled}
          value={value}
        />
      </p>
    </div>
  );
}
