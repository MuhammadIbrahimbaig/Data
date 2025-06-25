import React, { useState } from 'react'
export default function Formdata() {
    let [uname, setUname] = useState("")
    let [uemail, setUeamil] = useState("")
    let [phonenumber, setPhonenumber] = useState("")
    let [address, setAddress] = useState("")
    let [city, setCity] = useState("")
    let [gender, setGender] = useState("")
    //Hobby
    let [hobby, setHobby] = useState([])
    function get_checkbox_value(e) {
        let { checked, value } = e.target
        if (checked) {
            setHobby([...hobby, value])
        }
        else {
            setHobby(hobby.filter((a) => a != value))
        }
    }
    // end hobby
    // Img State
    let [getfile, setGetfile] = useState("")
    let [showimg, setShowimg] = useState("")


    // for getting values
    function getValue() {
        console.log(`Username is ${uname}`)
        console.log(`Email is ${uemail}`)
        console.log(`Phone number is ${phonenumber}`)
        console.log(`Address is ${address}`)
        console.log(`City is ${city}`)
        console.log(`Gender is ${gender}`);
        console.log(`Hobbies is ${hobby.join(" , ")}`);

        setUname("")
        setUeamil("")
        setPhonenumber("")
        setAddress("")
        setCity("")
        setGender("")
        setHobby("")
    }
    function radiobtn(abc) {
        setGender(abc.target.value)
    }
    function FileuploadWork(e) {
        let data = e.target.files[0]
        if (data) {
            setGetfile(data)
            setShowimg(URL.createObjectURL(data))
        }
    }
    return (
        <div className="container">

            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Name</label>
                <input type="Name" class="form-control"
                    value={uname} onChange={(a) => setUname(a.target.value)}
                />
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control"
                    value={uemail} onChange={(a) => setUeamil(a.target.value)} />
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label"
                >Phone</label>
                <input class="form-control" type="tel" value={phonenumber} onChange={(a) => setPhonenumber(a.target.value)} />
            </div>
            <div class="mb-3">
                <label for="Address" class="form-label"
                >Address</label>
                <input class="form-control" type="text" value={address} onChange={(a) => setAddress(a.target.value)} />
            </div>
            <select onChange={(a) => setCity(a.target.value)} className="form-control">
                <option value="" selected>Select</option>
                <option value="Karachi">Karachi</option>
                <option value="lahore">lahore</option>
                <option value="Islamabad">Islamabad</option>
            </select>

            <input type="radio" name="gender" value="male" onChange={radiobtn} checked={gender === "male"} />Male

            <input type="radio" name="gender" value="female" onChange={radiobtn} checked={gender === "female"} />Female

            <input type="radio" name="gender" value="others" onChange={radiobtn} checked={gender === "others"} />Others
            <br />
            <p className='mt-4'>Select Your Hobbies</p>
            <input type="checkbox" name="cricket" value="cricket" onChange={get_checkbox_value} />&nbsp;Cricket&nbsp;
            <input type="checkbox" name="Dancing" value="Dancing" onChange={get_checkbox_value} />&nbsp;Dancing&nbsp;
            <input type="checkbox" name="Singing" value="Singing" onChange={get_checkbox_value} />&nbsp;Singing&nbsp;
            <br />

            {/* image sec */}
            <p>Upload Img</p>
            <input type="file" onChange={FileuploadWork} />
            <img src={showimg} alt="" height="100" />
            <br />



            <button type="button" class="mt-3 btn btn-primary" onClick={getValue}>Submit</button>

        </div>
    )
}