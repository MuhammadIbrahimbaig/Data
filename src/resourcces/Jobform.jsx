
import React, { useState } from 'react'

export default function Jobform() {

    let [uname, setName] = useState("")
    let [uemail, setEmail] = useState("")
    let [phone, setPhone] = useState("")
    let [gender, setGender] = useState("")
    let [qualification, setQualification] = useState("")
    let [expected, setExpected] = useState("")
    let [skills, setSkills] = useState("")
    let [position, setPosition] = useState("")
    let [question, setQuestion] = useState("")
    let [cv, setCv] = useState("")
    // for getting values
    function getValue() {
        console.log(`Candidate name is ${uname}`);
        console.log(`Email is ${uemail}`);
        console.log(`Phone is ${phone}`);
        console.log(`Gender is ${gender}`);
        console.log(`Qualification is ${qualification}`);
        console.log(`Expected Salary is ${expected}`);
        console.log(`Skills is ${skills}`);
        console.log(`Position is ${position}`);
        console.log(`Question ${question}`);
        console.log(`CV: ${cv ? cv.name : "No file uploaded"}`);


        setName("")
        setEmail("")
        setPhone("")
        setGender("")
        setQualification("")
        setExpected("")
        setSkills("")
        setPosition("")
        setQuestion("")
        setCv("")
    }
    function checkvalueskill(e) {
        const value = e.target.value;
        if (e.target.checked) {
            setSkills([...skills, value]);
        } else {
            setSkills(skills.filter(skill => skill !== value));
        }
    }
    function handleCvUpload(e) {
        const file = e.target.files[0]; // get the first file
        setCv(file); // save it to state
    }

    function radiobtn(abc) {
        setGender(abc.target.value)
    }

    return (
        <div>
            <div class="container my-5">
                <h2 class="mb-4">Job Application Form</h2>
                <form>
                    {/* <!-- Name --> */}
                    <div class="mb-3">
                        <label for="name" class="form-label">Name</label>
                        <input type="text" class="form-control" value={uname} onChange={(a) => setName(a.target.value)} required />
                    </div>

                    {/* <!-- Email --> */}
                    <div class="mb-3">
                        <label for="email" class="form-label">Email</label>
                        <input type="email" class="form-control" value={uemail} onChange={(a) => setEmail(a.target.value)} required />
                    </div>

                    {/* <!-- Phone --> */}
                    <div class="mb-3">
                        <label for="phone" class="form-label">Phone</label>
                        <input type="tel" class="form-control" value={phone} onChange={(a) => setPhone(a.target.value)} required />
                    </div>

                    {/* <!-- Gender --> */}
                    <div class="mb-3">
                        <input type="radio" name="gender" value="male" onChange={radiobtn} checked={gender === "male"} />Male&nbsp;

                        <input type="radio" name="gender" value="female" onChange={radiobtn} checked={gender === "female"} />Female
                    </div>

                    {/* <!-- Qualification --> */}
                    <div class="mb-3">
                        <label for="qualification" class="form-label">Qualification</label>
                        <select onChange={(a) => setQualification(a.target.value)} class="form-select" required>
                            <option value="">Choose...</option>
                            <option>Matric</option>
                            <option>Intermediate</option>
                            <option>Graduation</option>
                            <option>Masters</option>
                            <option>Other</option>
                        </select>
                    </div>

                    {/* Expected Salary  */}
                    <div class="mb-3">
                        <label for="salary" class="form-label">Expected Salary</label>
                        <input type="number" value={expected} onChange={(a) => setExpected(a.target.value)} class="form-control" required />
                    </div>

                    {/* <!-- Skills --> */}
                    <div className="mb-3">
                        <label className="form-label d-block">Skills</label>

                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                value="HTML"
                                id="skill-html"
                                onChange={checkvalueskill}
                                checked={skills.includes("HTML")}
                            />
                            <label className="form-check-label" htmlFor="skill-html">HTML</label>
                        </div>

                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                value="CSS"
                                id="skill-css"
                                onChange={checkvalueskill}
                                checked={skills.includes("CSS")}
                            />
                            <label className="form-check-label" htmlFor="skill-css">CSS</label>
                        </div>

                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                value="JavaScript"
                                id="skill-js"
                                onChange={checkvalueskill}
                                checked={skills.includes("JavaScript")}
                            />
                            <label className="form-check-label" htmlFor="skill-js">JavaScript</label>
                        </div>
                    </div>


                    {/* <!-- Position --> */}
                    <div class="mb-3">
                        <label for="position" class="form-label">Position Applying For</label>
                        <select onChange={(a) => setPosition(a.target.value)} class="form-select" required>
                            <option value="">Select a position</option>
                            <option>Frontend Developer</option>
                            <option>Backend Developer</option>
                            <option>Full Stack Developer</option>
                            <option>Designer</option>
                        </select>
                    </div>

                    {/* <!-- Why should we hire you? --> */}
                    <div class="mb-3">
                        <label for="why" class="form-label">Why should we hire you?</label>
                        <textarea value={question} onChange={(a) => setQuestion(a.target.value)} class="form-control" rows="4" required></textarea>
                    </div>

                    {/* <!-- CV Upload --> */}
                    <div className="mb-3">
                        <label htmlFor="cv" className="form-label">Upload CV</label>
                        <input
                            type="file"
                            id="cv"
                            className="form-control"
                            onChange={handleCvUpload}
                            required
                        />
                    </div>


                    {/* <!-- Submit --> */}
                    <button type="submit" class="btn btn-primary" onClick={getValue}>Submit Application</button>
                </form>
            </div>
        </div>
    );
}

