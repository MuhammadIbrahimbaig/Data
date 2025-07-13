import axios from 'axios';
import React, { useState } from 'react';
export default function Signup() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [passw, setPassw] = useState("")
    const [age, setAge] = useState(1)
    // submit function
    async function Submit() {
        try {
            axios.post("http://localhost:4000", {
                Name: name,
                Email: email,
                password: passw,
                Age: age
            }).then(() => {
                alert("Save the Data in the database")
            }).catch((e) => {
                console.log(e);

            })
        } catch (error) {
            console.log(error);

        }
    }
    return (
        <div>
            <div>
                <div>
                    <h2>Register</h2>
                  <form className="container mt-4 p-4 border rounded shadow-sm" style={{ maxWidth: "500px" }}>
  <div className="mb-3">
    <label htmlFor="name" className="form-label">Name</label>
    <input
      type="text"
      className="form-control"
      id="name"
      name="name"
      required
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
  </div>

  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email</label>
    <input
      type="email"
      className="form-control"
      id="email"
      name="email"
      required
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />
  </div>

  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input
      type="password"
      className="form-control"
      id="password"
      name="password"
      required
      value={passw}
      onChange={(e) => setPassw(e.target.value)}
    />
  </div>

  <div className="mb-3">
    <label htmlFor="age" className="form-label">Age</label>
    <input
      type="number"
      className="form-control"
      id="age"
      name="age"
      min="0"
      required
      value={age}
      onChange={(e) => setAge(e.target.value)}
    />
  </div>

  <button type="button" className="btn btn-primary w-100" onClick={Submit}>
    Submit
  </button>
</form>

                </div>
            </div>
        </div>
    );
}



