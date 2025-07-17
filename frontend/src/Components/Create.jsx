import axios from 'axios'
import React, { useState } from 'react'

export const Create = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [passw, setPassw] = useState("")
    const [age, setAge] = useState(1)

    async function SubmitFunc() {
        try {
            await
                await axios.post("http://localhost:4001/save", {
                    Name: name,
                    Email: email,
                    Passw: passw,
                    Age: age
                }).then(() => {
                    alert("Data Saved Succesfully")
                }).catch((e) => {
                    console.log(e.message)
                })

        } catch (error) {
            console.log(error)

        }

    }
    return (
        <div>
            <div className="container d-flex justify-content-center align-items-center min-vh-100 bg-light">
                <div className="card p-4 shadow-lg" style={{ maxWidth: "450px", width: "100%" }}>
                    <h3 className="text-center mb-4 text-primary">
                        <i className="bi bi-person-circle me-2"></i>Register
                    </h3>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">
                                <i className="bi bi-person-fill me-1"></i>Name
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                placeholder="Enter your name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">
                                <i className="bi bi-envelope-fill me-1"></i>Email address
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">
                                <i className="bi bi-lock-fill me-1"></i>Password
                            </label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                placeholder="Enter your password"
                                value={passw}
                                onChange={(e) => setPassw(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="age" className="form-label">
                                <i className="bi bi-calendar2-week-fill me-1"></i>Age
                            </label>
                            <input
                                type="number"
                                className="form-control"
                                id="age"
                                placeholder="Enter your age"
                                value={age}
                                onChange={(e) => setAge(e.target.value)}
                            />
                        </div>
                        <button
                            type="button"
                            className="btn btn-primary w-100"
                            onClick={SubmitFunc}
                        >
                            <i className="bi bi-box-arrow-in-right me-1"></i>Submit
                        </button>
                    </form>
                </div>
            </div>

        </div>
    )
}
