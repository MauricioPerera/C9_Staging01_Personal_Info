import InputNameContainer from "./InputNameContainer";
import "../styles.css";
export default function App() {
  const user = {
    idUser: "1",
    firstName: "Mauricio",
    secondName: "Javier",
    firstSurname: "Perera",
    secondSurname: "Gonzalvez",
    gender: "male",
    email: "123@email.com",
    avatar: "url(image)",
    phoneNumber: "55 55555555",
    addres: {
      country: "Mexico",
      citie: "Queretaro",
      addres: "R.Bautista 14"
    },
    identification: {
      nationality: "Uruguayan",
      idOfNationality: "5555555-5"
    },
    passport: "D222203",
    favorites: {
      idFavorite1: "1",
      idFavorite2: "2",
      idFavorite3: "3"
    }
  };
  const name = {
    firstName: user.firstName,
    secondName: user.secondName,
    firstSurname: user.firstSurname,
    secondSurname: user.secondSurname
  };
  return (
    <div className="personalInfo">
      <h2>Información personal</h2>
      <InputNameContainer label="Nombre legal" value={name} />
    </div>
  );
}
