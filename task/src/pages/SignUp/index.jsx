import { useState, useContext } from "react";
import "../../assets/fonts.css";
import background from "../../assets/background.png";
import logo from "../../assets/logo.png";
import { authContext } from "../../contexts/auth";

export default function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (
      firstName === "" ||
      lastName === "" ||
      birthdate === "" ||
      country === "" ||
      city === "" ||
      email === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      alert("Preencha todos os campos");
    }

    //verificação de idade
    let dateString = document.getElementById("date").value;
    let birthday = new Date(dateString);
    let age = Math.floor((Date.now() - birthday) / 31557600000);
    if (age < 18) {
      alert("Idade mínima para criar conta: 18 anos.");
    }

    //comparação de senhas

    if (password !== confirmPassword) {
      alert("Senhas diferentes");
    }
  }

  return (
    <>
      <div className="content">
        <div className="signup">
          <h1 className="titleS">Welcome,</h1>
          <p className="textS">Please register to continue.</p>

          <form className="form" onSubmit={handleSubmit}>
            <div className="inputLabel">
              <label htmlFor="firstName">first name</label>
              <input
                id="firstName"
                className="writeS"
                type="text"
                placeholder="Your first name"
                value={firstName.replace(/\b\w/g, (match) =>
                  match.toUpperCase()
                )}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>

            <div className="inputLabel">
              <label htmlFor="lastName">last name</label>
              <input
                id="lastName"
                className="writeS"
                type="text"
                placeholder="Your last name"
                value={lastName.replace(/\b\w/g, (match) =>
                  match.toUpperCase()
                )}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>

            <div className="inputLabel">
              <label htmlFor="date">birth date</label>
              <input
                className="writeS"
                type="date"
                placeholder="MM/DD/YYYY"
                value={birthdate}
                id="date"
                onChange={(e) => setBirthdate(e.target.value)}
              />
            </div>

            <div className="inputLabel">
              <label htmlFor="country">country</label>
              <input
                id="country"
                className="writeS"
                type="text"
                placeholder="Your country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              />
            </div>

            <div className="inputLabel">
              <label htmlFor="city">city</label>
              <input
                id="city"
                className="writeS"
                type="text"
                placeholder="Your city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>

            <div className="inputLabel">
              <label htmlFor="email">e-mail</label>
              <input
                id="email"
                className="writeS"
                type="text"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="inputLabel">
              <label htmlFor="password">password</label>
              <input
                id="password"
                className="writeS"
                type="password"
                placeholder="Your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="inputLabel">
              <label htmlFor="confirmPassword">password</label>
              <input
                id="confirmPassword"
                className="writeS"
                type="password"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>

            <input
              className="buttonRegister"
              type="submit"
              value="Register Now"
            />
          </form>
        </div>

        <div className="container">
          <div
            className="backgroundImage"
            style={{ backgroundImage: `url(${background})` }}
          >
            <div>
              <img className="logo" src={logo} alt="logo Compass Uol" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
