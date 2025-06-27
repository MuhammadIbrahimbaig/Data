import axios from 'axios';
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import("react-toastify/dist/ReactToastify.css");
export default function Signup() {
    let [name, setUname] = useState("");
    let [email, setUemail] = useState("");
    let [password, setPassword] = useState("");
    let [gender, setgender] = useState("");
    let [rel, setReligion] = useState("");

    //Gender
    function SetRadiovalue(e) {
        setgender(e.target.value)
    }
    function save_data() {
        try {
            let url = "https://685b848289952852c2d9d00d.mockapi.io/users/Users";
            let uname_regex = /^[a-zA-Z\s]{3,20}$/;
            let upassword_regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
            if (!name || !email || !password || !gender || !rel) {
                toast.error("All fields are required");
                return;
            }
            if (!uname_regex.test(name)) {
                toast.error("Please enter a valid name");
                return;
            }
            if (!upassword_regex.test(password)) {
                toast.error("Please enter a valid password");
                return;
            }

            axios.post(url, {
                name: name,
                email: email,
                password: password,
                gender: gender,
                rel: rel
            }).then(() => {
                alert("Data is Save")
                clear()

            })
            function clear() {
                setUname("");
                setUemail("");
                setPassword("");
                setgender("");
                setReligion("");
            }
        } catch (error) {
            console.log(error.message);
        }
    }
    return (
        <div>
            <ToastContainer/>

           
            <div class="container mt-5 col-lg-4 bg-secondary-subtle">
                <h2 class="mb-4">Registration Form</h2>

                {/* <!-- Name --> */}
                <div class="mb-3">
                    <input type="text" class="form-control" value={name} onChange={(a) => setUname(a.target.value)} placeholder="Enter your name" />
                </div>

                {/* <!-- Email / */}
                <div class="mb-3">
                    <input type="email" class="form-control" value={email} onChange={(a) => setUemail(a.target.value)} placeholder="Enter your email" />
                </div>

                {/* <!-- Password --> */}
                <div class="mb-3">
                    <input type="password" class="form-control" value={password} onChange={(a) => setPassword(a.target.value)} placeholder="Enter a password" />
                </div>
                {/* <!-- Gender --> */}
                <div class="mb-3">
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="gender" value="male" onChange={SetRadiovalue} />
                        <label class="form-check-label" for="male">Male</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="gender" value="female" onChange={SetRadiovalue} />
                        <label class="form-check-label" for="female">Female</label>
                    </div>
                </div>

                {/* <!-- Religion --> */}
                <div class="mb-3">
                    <select class="form-select" onChange={(e) => setReligion(e.target.value)}>
                        <option selected disabled>Select your religion</option>
                        <option value="islam">Islam</option>
                        <option value="christianity">Christianity</option>
                        <option value="hinduism">Hinduism</option>
                        <option value="buddhism">Buddhism</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                {/* 
    <!-- Submit Button --> */}
                <div className="mb-3">
                    <button type="button" onClick={save_data} class="btn text-white  bg-black">Save Data</button>
                </div>

            </div>
        </div>
    )
}