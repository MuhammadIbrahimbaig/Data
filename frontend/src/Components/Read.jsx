import axios from "axios";
import { useEffect, useState } from "react";

export default function Read() {

    const [users, setUsers] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:4001/read')
            .then(result => setUsers(result.data))
            .catch(err => console.log(err))
    })
    // Sorting
    let [recv, setRecv] = useState("");
    let [search, setSearch] = useState("");
    let [sort, setSort] = useState("");
    // function
    let filter_search = search ? recv.filter((a) => a.name.toLowerCase().includes(search.toLowerCase())) : recv
    // Filter
    if (sort === "1") {
        filter_search = filter_search.sort((a, b) => a.name.localCompare(b.name))
    }
    else if(sort === "2"){
        filter_search = filter_search.sort((a, b) => a.name.localCompare(a.name))
    }
    else if(sort === "3"){
        filter_search = filter_search.sort((a, b) => a.email.localCompare(a.email)) 
    }
     else if(sort === "4"){
        filter_search = filter_search.sort((a, b) => a.email.localCompare(b.email)) 
    }
    
    return (
        <div className="container my-5">
            <h2 className="mb-4 text-center text-primary">User Management</h2>
            <div className="table-responsive shadow rounded">
                <table className="table table-striped table-hover align-middle">
                    <thead className="table-dark">
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Address</th>
                            <th scope="col" style={{ width: '80px' }}>Age</th>
                            <th scope="col" style={{ width: '160px' }}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user.id}>
                                <td>
                                    <div className="d-flex align-items-center">
                                        <div
                                            className="rounded-circle bg-primary text-white d-flex justify-content-center align-items-center me-3"
                                            style={{ width: 40, height: 40, fontWeight: 'bold', fontSize: '1.1rem' }}
                                            title={user.name}
                                        >
                                            {user.name.charAt(0).toUpperCase()}
                                        </div>
                                        <span>{user.name}</span>
                                    </div>
                                </td>
                                <td>{user.email}</td>
                                <td>{user.address}</td>
                                <td>{user.age}</td>
                                <td>
                                    <button
                                        className="btn btn-sm btn-outline-success me-2"

                                    >
                                        <i className="bi bi-pencil-fill me-1"></i> Edit
                                    </button>
                                    <button
                                        className="btn btn-sm btn-outline-danger"

                                    >
                                        <i className="bi bi-trash-fill me-1"></i> Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>

    );
}
