import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

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
    let filter_search = search ? users.filter((a) => a.name.toLowerCase().includes(search.toLowerCase())) : users
    // Filter
    if (sort === "1") {
        filter_search = filter_search.sort((a, b) => a.name.localeCompare(b.name))
    }
    else if (sort === "2") {
        filter_search = filter_search.sort((a, b) => a.name.localeCompare(a.name))
    }
    else if (sort === "3") {
        filter_search = filter_search.sort((a, b) => a.email.localeCompare(a.email))
    }
    else if (sort === "4") {
        filter_search = filter_search.sort((a, b) => a.email.localeCompare(b.email))
    }
    // Delete
    async function DeleteRecord(id, n) {
        if (window.confirm(`Are you sure want to delete ${n} record `)) {
            await axios.delete(`http://localhost:4001/remove/${id}`).then(() => {

                toast.success("Record Deleted Successfully");
                Read()
            }).catch((e) => {
                toast.error(e.message)
            })
        }
    }
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-6">
                    <input type="text" placeholder="Search User" className="form-control" onChange={(e) => setSearch(e.target.value)} value={search} />
                </div>
                <div className="col-md-6">
                    <div class="mb-3">
                        <select class="form-select shadow-none border border-2 border-black" onChange={(e) => setSort(e.target.value)}>
                            <option selected disabled>Select Filter</option>
                            <option value="1">Sort By Name(A-Z)</option>
                            <option value="2">Sort By Name(Z-A)</option>
                            <option value="3">Sort By Email(A-Z)</option>
                            <option value="4">Sort By Email(Z-A)</option>
                        </select>
                    </div>
                </div>
            </div>
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
                        {filter_search.map((user) => (
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
                                        className="btn btn-sm btn-outline-danger" onClick={()=>{DeleteRecord(user._id,user.name)}}>
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
