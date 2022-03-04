import InputContainer from "./InputContainer";
import "../styles.css";

export default function App() {
  const label = "Nombre";
  const value = "Mi Nombre";
  return (
    <div className="personalInfo">
      <h2>Información personal</h2>
      <InputContainer label="Nombre legal" value="Mauricio Javier Perera" />
      <InputContainer label="Sexo" value="Masculino" />
      <InputContainer label="Numero de teléfono" value="(555)555-55-55" />
      <InputContainer label="Identificación" value="1234567890" />
      <InputContainer label="Dirección" value="Calle Falsa 123" />
      <InputContainer label="Contato de emergencia" value="(555)555-55-55" />
      <InputContainer label="Pasaporte" value="1234567890" />
    </div>
  );
}
