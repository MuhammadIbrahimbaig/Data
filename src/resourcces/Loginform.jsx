import { useState } from "react"
import { useNavigate } from "react-router-dom";

export default function Login() {
    const { email, setemail } = useState("");
    const { password, setpassword } = useState("");
    let go = useNavigate();

    function userlogin() {
        if (email === "admin@gmail.com" && password === "123") {
            go("/Array", { state: { uemail: email } });
        }
        else {
            alert("Invalid Email && Password");
        }
    }
    return (
        <div className="container">
            <div className="d-flex justify-content-center align-items-center vh-100">
                <div className="bg-white p-4 rounded shadow-sm" style={{ width: '300px' }}>
                    <h2 className="text-center mb-4">Login</h2>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="Email" className="form-label">Email</label>
                            <input type="email" className="form-control" value={email} onChange={(a) => setemail(a.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" className="form-control" value={password} onChange={(a) => setpassword(a.target.value)} />
                        </div>
                        <button type="submit" className="btn btn-primary w-100" onClick={userlogin}>Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}