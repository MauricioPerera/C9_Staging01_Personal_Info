import React, { useState } from "react";
import { Text, TextInput } from "react-native";

export default function InputContainer({ label, value }) {
  const [disabled, setDisabled] = useState(true);
  const [isActive, setActive] = useState("false");
  function handleGameClick() {
    setDisabled(!disabled);
    setActive(!isActive);
  }
  const [text, setText] = useState("");
  return (
    <div className="inputContainer">
      <label>{label}</label>
      <span
        style={isActive ? { display: "block" } : { display: "none" }}
        onClick={handleGameClick}
      >
        Editar
      </span>
      <span
        style={isActive ? { display: "none" } : { display: "block" }}
        onClick={handleGameClick}
      >
        Guardar
      </span>

      <TextInput
        onChangeText={(newText) => setText(newText)}
        defaultValue={value}
        style={isActive ? { display: "none" } : { display: "block" }}
      />
      <Text style={isActive ? { display: "block" } : { display: "none" }}>
        {text ? text : value}
      </Text>
    </div>
  );
}
