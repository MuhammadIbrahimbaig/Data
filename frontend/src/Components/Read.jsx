import axios from "axios";
import { useEffect, useState } from "react";

export default function Read() {

    const [users, setUsers] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:4001/read')
            .then(result => setUsers(result.data))
            .catch(err => console.log(err))
    })
    return (
        <div>
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Address</th>
                            <th scope="col">Age</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => (
                                <tr key={index}>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.address}</td>
                                    <td>{user.age}</td>
                                    <td>
                                        <button className="btn btn-outline-success me-2">Edit</button>
                                        <button className="btn btn-outline-danger">Delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}
