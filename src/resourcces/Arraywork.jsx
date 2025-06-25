import { useState } from "react"
import { useLocation } from "react-router-dom"

export default function Arraywork() {
    let recv = useLocation();
    let email = recv.state?.ueamil || "Guest"

    let product = [
        {
            id: 1, prodname: "Watch", prodcat: "Watches", price: 2000, brand: "Rolex", image: "https://shorturl.at/k2JpR"
        },
        {
            id: 2, prodname: "Watch", prodcat: "Watches", price: 42000, brand: "Armani", image: "https://shorturl.at/MwfRP"
        },
        {
            id: 3, prodname: "Mobile", prodcat: "Mobiles", price: 250000, brand: "Techno", image: "https://shorturl.at/u59mw"
        },
        {
            id: 4, prodname: "Mobile", prodcat: "Mobiles", price: 52000, brand: "Samsung", image: "https://shorturl.at/07awx"
        },
        {
            id: 5, prodname: "Shoes", prodcat: "Shoes", price: 2000, brand: "Nike", image: "https://shorturl.at/TdJ3l"
        },
        {
            id: 6, prodname: "Shoes", prodcat: "Shoes", price: 5000, brand: "Nike", image: "https://shorturl.at/h0plA"
        },
        {
            id: 7, prodname: "T-Shirts", prodcat: "Shirts", price: 3000, brand: "Gucci", image: "https://www.faisalabadfabricstore.com/wp-content/uploads/2024/06/Black-custom-t-shirts-pakistan.jpg"
        },
        {
            id: 8, prodname: "T-Shirts", prodcat: "Shirts", price: 3500, brand: "Gucci", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtpooXwGSYF0pH8ZXt6-yuyv1LRiOnCyyNJg&s"
        },
    ]
    // search
    let [search, setSearch] = useState("")
    let [sort, setUsort] = useState("")
    let filter_product = search ? product.filter((a) => a.prodname.toLowerCase().includes(search.toLowerCase())) : product
    if (sort === '1') {
        filter_product = filter_product.sort((a, b) => a.price - b.price)
    }
    else if (sort === '2') {
        filter_product = filter_product.sort((a, b) => b.price - a.price)
    }
    else if (sort === '3') {
        filter_product = filter_product.sort((a, b) => a.prodname.localeCompare(b.prodname))
    }
    else if (sort === '4') {
        filter_product = filter_product.sort((a, b) => b.prodname.localeCompare(a.prodname))
    }

    return (
        <div>
            <div className="container">
                <h2 className="text-uppercase">Products</h2>
                {/* filter work */}
                <div className="d-flex justify-content-center mt-5">
                    <select name="" id="" className="w-100 form-control" onChange={(a) => setUsort(a.target.value)}>
                        <option value="">select</option>
                        <option value="1">price desending</option>
                        <option value="2">price asending</option>
                        <option value="3">name sort(a-z)</option>
                        <option value="45">name sort(z-a)</option>
                    </select>


                </div>

                <input type="text" className="form-control mt-3" placeholder="Search a Best Quality Product" value={search} onChange={(e) => setSearch(e.target.value)} />


                <div className="row">
                    {
                        filter_product.length > 0 ?

                            filter_product.map((a) => (
                                <div class="col-lg-3 mt-5" key={a.id}>
                                    <div class="col">
                                        <a href="" className="text-decoration-none">
                                            <div class="card rounded-3 border border-black ">
                                                <img src={a.image} className="set-h img-fluid object-fit-cover rounded-top-3" alt="..." />
                                                <div class="card-body hover-set">
                                                    <h5 class="card-title text-start border-bottom border-2 border-black">{a.prodname}</h5>
                                                    <div className="text-start ">
                                                        <p>Price: {a.price}</p>
                                                        <p>BrandName:   {a.brand}</p>
                                                        <p>{a.prodcat}</p>

                                                    </div>

                                                </div>
                                            </div>
                                        </a>
                                    </div>

                                </div>

                            ))
                            :
                            <div class="alert alert-warning alert-dismissible fade show mt-3" role="alert">
                                No record Found!
                                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={() => { setSearch("") }}></button>
                            </div>
                    }

                </div>
            </div>
        </div>
    )
}