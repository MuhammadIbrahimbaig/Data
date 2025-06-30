import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from 'react-router-dom';
import { toast } from "react-toastify";
export default function Read_data() {
    let [id, setId] = useState("");
    let [name, setUname] = useState("");
    let [email, setUemail] = useState("");
    let [password, setPassword] = useState("");
    let [gender, setgender] = useState("");
    let [rel, setReligion] = useState("");
    let [recv, setRecv] = useState([]);
    let [search, setSearch] = useState("");
    let [sort, setSort] = useState("");
    let filter_search = search ? recv.filter((a) => a.name.toLowerCase().includes(search.toLowerCase())) : recv
    // Filter
    if (sort === "1") {
        filter_search = filter_search.sort((a, b) => a.name.localeCompare(b.name))
    }
    else if (sort === "2") {
        filter_search = filter_search.sort((a, b) => b.name.localeCompare(a.name))
    }
    else if (sort === "3") {
        filter_search = filter_search.sort((a, b) => a.email.localeCompare(b.email))
    }
    else if (sort === "4") {
        filter_search = filter_search.sort((a, b) => b.email.localeCompare(a.email))
    }
    function Update_work() {
        let url = "https://685b7b2f89952852c2d9ac21.mockapi.io/studentdata/user";
        try {
            axios.put(`${url}/${id}`, {
                name: name,
                email: email,
                password: password,
                gender: gender,
                religion: rel
            }).then(() => {
                Showdata();
                toast.success("Record Updated")
            }).catch((e) => {
                toast.error(e.message)

            })

        } catch (error) {
            toast.error(error.message)

        }
    }
    function setInput(name, email, password, gender, rel) {
        setUname(name)
        setUemail(email)
        setPassword(password)
        setgender(gender)
        setReligion(rel)
        setId(id)
    }
    function Showdata() {
        try {
            let url = "https://685b848289952852c2d9d00d.mockapi.io/users/Users";
            axios.get(url).then((res) => {
                setRecv(res.data);
            }).catch((err) => {
                console.log(err.message);
            })
        } catch (error) {
            console.log(error.message);
        }
    }
    useEffect(() => {
        Showdata();
    }, [])
    // DLT
    function Delete_data(id) {
        try {
            let url = "https://685b848289952852c2d9d00d.mockapi.io/users/Users"
            if (window.confirm("Are you sure dlt the record")) {
                axios.delete(`${url}/${id}`).
                    then(() => {
                        Showdata();
                        toast.success("Record Deleted")
                    }).catch((e) => {
                        console.log(e.message)
                    })
            }
        } catch (error) {
            toast.error(error.message)
        }

    }
    return (
        <div className="container">
            <Link to="/" type="button" className="btn custom-btn  mt-3">Add User</Link>
            <hr />
            <div className="row">
                <div className="col-md-6">
                    <input type="text" placeholder="Search User" className="form-control" onChange={(e) => setSearch(e.target.value)} />
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
            <table className="table table-striped table-hover table-bordered mt-4 shadow-sm">
                <thead className="table-dark">
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Gender</th>
                        <th>Religion</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {filter_search.length > 0 ? (
                        filter_search.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.gender}</td>
                                <td>{item.rel}</td>
                                <td><i class="bi bi-pencil" onClick={() => setInput(item.name, item.email, item.password, item.gender, item.rel)} data-bs-toggle="modal" data-bs-target="#exampleModal"></i></td>
                                <td><i class="bi bi-trash" onClick={() => Delete_data(item.id)}> </i></td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5">
                                <div className="alert alert-danger text-center m-0">
                                    No records found.
                                </div>
                            </td>
                        </tr>
                    )}

                </tbody>
            </table>
            

            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5 text-center w-100" id="exampleModalLabel">Update The Data</h1>
                            <button type="button" class="btn-close " data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body bg-black text-white ">
                            <input type="text" className="form-control shadow-none mt-3" value={name} onChange={(e) => setUname(e.target.value)} />
                            <input type="text" className="form-control shadow-none mt-3" value={email} onChange={(e) => setUemail(e.target.value)} />
                            <input type="text" className="form-control shadow-none mt-3" value={password} onChange={(e) => setPassword(e.target.value)} />
                            <p>Select Gender</p>
                            <input type="radio" name="gender" value="m" onChange={(e) => setgender(e.target.value)} checked={gender === "m"} />&nbsp;Male&nbsp;
                            <input type="radio" name="gender" value="fm" onChange={(e) => setgender(e.target.value)} checked={gender === "fm"} />&nbsp; Female&nbsp;
                            <br />
                            {/* dropdown */}
                            <select className="form-control shadow-none" onChange={(e) => setReligion(e.target.value)}>
                                <option value="Islam" selected={rel === 'Islam'}>Islam</option>
                                <option value="Hindu" selected={rel === 'Hindu'}>Hindu</option>
                                <option value="Buddisham" selected={rel === 'Buddisham'}>Buddisham</option>

                            </select>
                        </div>
                        <div class="py-3 d-flex justify-content-center gap-2 bg-black rounded-bottom-5">
                            <div className="">
                                <button type="button" class="btn btn-danger " data-bs-dismiss="modal">Close</button>
                            </div>
                            <div className="">
                                <button
                                    type="button"
                                    className="btn custom-btn close"
                                    onClick={() => {
                                        Update_work();
                                        document.querySelector('.close')?.click();  
                                    }}
                                >
                                    Save changes
                                </button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div >
    )
}