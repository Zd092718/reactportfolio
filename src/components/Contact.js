import React, { useState } from "react";

function Contact() {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "userName") {
      setUserName(inputValue);
    } else if (inputType === "message") {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setUserName("");
    setEmail("");
    setMessage("");
  };
  return (
    <div>
      <div class="row">
        <form class="col s12">
          <div class="row">
            <div class="input-field col s6">
              <input
                id="first_name"
                value={userName}
                name="userName"
                onChange={handleInputChange}
                type="text"
                class="validate"
                required
              />
              <label for="first_name">Name</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <input
                id="email"
                value={email}
                name="email"
                type="email"
                class="validate"
                onChange={handleInputChange}
                required
              />
              <label for="email">Email</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <input
                id="message"
                value={message}
                name="message"
                type="text"
                onChange={handleInputChange}
              />
              <label for="message">Message</label>
            </div>
          </div>
          <button type="button" onClick={handleFormSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
