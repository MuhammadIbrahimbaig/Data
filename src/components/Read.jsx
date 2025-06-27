import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from 'react-router-dom';
export default function Read_data() {
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
    useEffect(() => {
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
    }, [])

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

        </div>
    )
}