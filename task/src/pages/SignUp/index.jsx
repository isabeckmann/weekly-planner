import { useState } from "react";
import "../../assets/fonts.css";
import background from "../../assets/background.png";
import logo from "../../assets/logo.png";

export default function SignUp() {
  const [fisrtName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function handleSubmit(e) {
    e.prevent.default();

    if (fisrtName !== "" && lastName !== "") {
    }
  }

  return (
    <>
      <div className="content">
        <div className="text-container">
          <div>
            <p>first name</p>
          </div>
          <div>
            <p>last name</p>
          </div>
          <div>
            <p>birth date</p>
          </div>
          <div>
            <p>country</p>
          </div>
          <div>
            <p>city</p>
          </div>
          <div>
            <p>e-mail</p>
          </div>
          <div>
            <p>password</p>
          </div>
          <div>
            <p>password</p>
          </div>
        </div>
        <div className="signup">
          <h1 className="titleS">Welcome,</h1>
          <p className="textS">Please register to continue.</p>

          <form onSubmit={handleSubmit}>
            <input
              className="writeS"
              type="text"
              placeholder="Your first name"
              value={fisrtName}
              onChange={(e) => setFirstName(e.target.value)}
            />

            <input
              className="writeS"
              type="text"
              placeholder="Your last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />

            <input
              className="writeS"
              type="text"
              placeholder="MM/DD/YYYY"
              value={birthdate}
              onChange={(e) => setBirthdate(e.target.value)}
            />

            <input
              className="writeS"
              type="text"
              placeholder="Your country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
            <input
              className="writeS"
              type="text"
              placeholder="Your city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />

            <input
              className="writeS"
              type="text"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              className="writeS"
              type="password"
              placeholder="Your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <input
              className="writeS"
              type="password"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />

            <div className="btn">
              <input
                className="buttonRegister"
                type="submit"
                value="Register Now"
              />
            </div>
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
