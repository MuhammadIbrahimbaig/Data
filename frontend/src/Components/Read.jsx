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
    let [name, setName] = useState("");
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let [age, setAge] = useState("");
    let [city, setCity] = useState("");
    let [id, setID] = useState("");

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

    // EditWork
    async function EditRecord(n) {
       try {
        
            await axios.put(`http://localhost:4001/edit/${id}`,{
                n : name,
                e : email,
                p: password,
                age: age,
                c: city
            }).then(() => {

                toast.success("Record Updated Successfully");
                Read()
            }).catch((e) => {
                toast.error(e.message)
            })
        
       } catch (error) {
        toast.error(error.response?.data.msg)
       } 
    }
    // SetState
    function setData(a, b, c, d, e, f) {
        setName(a)
        setEmail(b)
        setAge(c)
        setCity(d)
        setPassword(e)
        setID(f)
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
                            <th scope="col">City</th>
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
                                <td>{user.city}</td>
                                <td>{user.age}</td>
                                <td>
                                    <button data-bs-toggle="modal" data-bs-target="#exampleModal"
                                        className="btn btn-sm text-success me-2"
                                        onClick={() => setData(user.name, user.email, user.password, user.city, user.age,user._id)}
                                    >
                                        <i className="bi bi-pencil-fill me-1"></i>
                                    </button>
                                    <button
                                        className="btn btn-sm text-danger" onClick={() => { DeleteRecord(user._id, user.name) }}>
                                        <i className="bi bi-trash-fill me-1"></i>
                                    </button>
                                </td>
                            </tr>
                        ))}


                    </tbody>
                </table>
            </div>
            {/* ✅ Move modal here, outside the table */}
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5 text-center w-100" id="exampleModalLabel">Update The Data</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body ">
                            <input type="text" className="form-control shadow-none mt-3" value={name} onChange={(e) => setName(e.target.value)} />
                            <input type="text" className="form-control shadow-none mt-3" value={email} onChange={(e) => setEmail(e.target.value)} />
                            <input type="text" className="form-control shadow-none mt-3" value={password} onChange={(e) => setPassword(e.target.value)} />
                            <input type="text" className="form-control shadow-none mt-3" value={age} onChange={(e) => setAge(e.target.value)} />
                            <input type="text" className="form-control shadow-none mt-3" value={city} onChange={(e) => setCity(e.target.value)} />
                        </div>
                        <div className="py-3 d-flex justify-content-center gap-2 rounded-bottom-5">
                            <button type="button" className="btn btn-danger close" data-bs-dismiss="modal">Close</button>
                            <button
                                type="button"
                                className="btn custom-btn close"
                                onClick={() => {
                                    EditRecord(name);
                                    document.querySelector('.close').click();
                                }}>
                                Save changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div >

    );
}
