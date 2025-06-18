import { useState } from 'react';

export default function Planetsset() {
    let Planets =
        [
            {
                id: 1,
                name: "Mercury",
                size: "4,880 km (diameter)",
                distanceFromSun: "57.91 million km",
                notableFeature: "Smallest planet and closest to the Sun",
            },
            {
                id: 2,
                name: "Venus",
                size: "12,104 km (diameter)",
                distanceFromSun: "108.2 million km",
                notableFeature: "Hottest planet due to thick atmosphere",
            },
            {
                id: 3,
                name: "Earth",
                size: "12,742 km (diameter)",
                distanceFromSun: "149.6 million km",
                notableFeature: "Supports life and has abundant water",
            },
            {
                id: 4,
                name: "Mars",
                size: "6,779 km (diameter)",
                distanceFromSun: "227.9 million km",
                notableFeature: "Known as the Red Planet with evidence of ancient water",
            },
            {
                id: 5,
                name: "Jupiter",
                size: "139,820 km (diameter)",
                distanceFromSun: "778.5 million km",
                notableFeature: "Largest planet with a giant red storm",
            },
            {
                id: 6,
                name: "Saturn",
                size: "116,460 km (diameter)",
                distanceFromSun: "1.434 billion km",
                notableFeature: "Famous for its stunning ring system",
            },
            {
                id: 7,
                name: "Uranus",
                size: "50,724 km (diameter)",
                distanceFromSun: "2.871 billion km",
                notableFeature: "Rotates on its side with a faint ring system",
            },
            {
                id: 8,
                name: "Neptune",
                size: "49,244 km (diameter)",
                distanceFromSun: "4.495 billion km",
                notableFeature: "Strongest winds in the Solar System",
            }
        ]
    let [search, setUsearch] = useState("");
    let [sort, setUsort] = useState("");
    let filter_planets = search ? Planets.filter((a) => a.name.toLowerCase().includes(search.toLowerCase())) : Planets
    if (sort === '1') {
        filter_planets = filter_planets.sort((a, b) => a.size - b.size)
    }
    else if (sort === '2') {
        filter_planets = filter_planets.sort((a, b) => b.size - a.size)
    }
    else if (sort === '3') {
        filter_planets = filter_planets.sort((a, b) => a.name.localeCompare(b.name))
    }
    else if (sort === '4') {
        filter_planets = filter_planets.sort((a, b) => b.name.localeCompare(a.name))
    }

    return (
        <div>
            <div className="container">
                <h2 className="text-uppercase">Planets</h2>
                <div className="d-flex justify-content-center">
                    <select name="" id="" className='w-100 form-control' onChange={(a) =>
                        setUsort(a.target.value)}>
                            <option value="">Select</option>
                            <option value="1">Name:</option>

                        </select>
                </div>

                <input type="search" onChange={(a) => setUsearch(a.target.value)} className="form-control mt-3" placeholder="Search Planet" />
                <div className="row">
                    {
                        Planets.map((a) => (
                            <div class="col-lg-3 mt-5" key={a.id}>
                                <div class="col">
                                    <a href="" className="text-decoration-none">
                                        <div class="card rounded-3 border border-black ">
                                            {/* <img src={a.image} className="set-h img-fluid object-fit-cover rounded-top-3" alt="..." /> */}
                                            <div class="card-body hover-set">
                                                <h5 class="card-title text-start border-bottom border-2 border-black">{a.name}</h5>
                                                <div className="text-start ">
                                                    <p>Size Km: {a.size}</p>
                                                    <p>DistanceFromSun:   {a.distanceFromSun}</p>
                                                    <p>NotableFeature :{a.notableFeature}</p>

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