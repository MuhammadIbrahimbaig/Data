export default function Arraywork() {
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
    return (
        <div>
            <div className="container">
                <h2 className="text-uppercase">Products</h2>
                <div className="row">
                    {
                        product.map((a) => (
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
                    }

                </div>
            </div>
        </div>
    )
}