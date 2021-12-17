import React, { useState } from "react";
import "./Register.css";

import { NavLink, useHistory } from "react-router-dom";

const GiveReferral = (props) => {
  const history = useHistory();

  const [user, setUser] = useState({
    Name: "",
    Email: "",
    Mobile: "",
    Section: "",
    Referrer: "",

    Id: "",
  });

  let name, value;

  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();

    //  Object Destructering instead of writing user.name
    const { Name, Email, Mobile, Section, Referrer, Id } = user;

    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        Name,
        Email,
        Mobile,
        Section,
        Referrer,
        Id,
      }),
    });

    const data = await res.json();

    if (res.status === 422 || !data) {
      window.alert("Invalid Registration");
      console.log("Invalid");
    } else {
      window.alert("Successful Registration");
      console.log("Successful");

      history.push("/login");
    }
  };

  return (
    <div class="box">
      {/* never use method in form */}
      <form>
        <div class="container">
          <h1>Register</h1>
          <p>Please fill in this form to create an account.</p>
          <hr />

          <label for="name">
            <b>Name</b>
          </label>
          <input
            type="text"
            placeholder="Enter Name"
            name="Name"
            id="name"
            value={user.Name}
            onChange={handleInputs}
            required
          />

          <label for="email">
            <b>Email</b>
          </label>
          <input
            type="text"
            placeholder="Enter Email"
            name="Email"
            id="email"
            value={user.Email}
            onChange={handleInputs}
            required
          />

          <label for="phone">
            <b>Mobile</b>
          </label>
          <input
            type="text"
            placeholder="Enter Phone Number"
            name="Mobile"
            id="number"
            value={user.Mobile}
            onChange={handleInputs}
            required
          />

          <label for="work">
            <b>Section</b>
          </label>
          <input
            type="text"
            placeholder="Enter Work Place"
            name="Section"
            id="work"
            value={user.Section}
            onChange={handleInputs}
            required
          />

          <label for="work">
            <b>College ID</b>
          </label>
          <input
            type="text"
            placeholder="Enter Work Place"
            name="Id"
            id="work"
            value={user.Id}
            onChange={handleInputs}
            required
          />

          <label for="psw">
            <b>Referrer</b>
          </label>
          <input
            type="password"
            //placeholder="Enter Password"
            name="password"
            id="psw"
            value={user.Referrer}
            onChange={handleInputs}
            required
            readOnly
          />
          <hr />
          <p>
            By creating an account you agree to our{" "}
            <a href="#">Terms & Privacy</a>.
          </p>

          <button type="submit" class="registerbtn" onClick={PostData}>
            Register
          </button>
        </div>

        <div class="container signin">
          <p>
            Already have an account? <a href="/login">Sign in</a>.
          </p>
        </div>
      </form>
    </div>
  );
};

export default GiveReferral;
