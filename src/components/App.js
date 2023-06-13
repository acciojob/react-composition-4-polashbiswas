
import React, { useState } from "react";
import './../styles/App.css';
import Form from "./Form";


const App = () => {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPass] = useState("");

  function handelform(e) {
    e.preventDefault();
    let obj = {
      name:name,
      email:email,
      password:password
    }
    console.log(obj);
  }

  return (
    <div>
      <form onSubmit={handelform}>
        <Form type="text"
          label="Name"
          placeholder="name"
          updatename={setName}
        />
        <Form type="text"
          label="Email"
          placeholder="email"
          updatename={setEmail}
        />
        <Form type="password"
          label="Password"
          placeholder="password"
          updatename={setPass}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App
