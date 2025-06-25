import axios from "axios";
import { useState } from "react"

export default function Jobapplication() {
    let [name, setUname] = useState("");
    let [email, setUemail] = useState("");
    let [phone, setPhone] = useState("");
    let [dob, setDob] = useState("");
    let [gender, setgender] = useState("");
    let [position, setPosition] = useState("");
    const [expectedSalary, setExpectedSalary] = useState("");
    const [startDate, setStartDate] = useState("");
    const [employmentType, setEmploymentType] = useState("");
    const [qualification, setQualification] = useState("");
    const [universityName, setUniversityName] = useState("");
    const [experienceYears, setExperienceYears] = useState("");
    const [previousCompany, setPreviousCompany] = useState("");
    const [linkedinProfile, setLinkedinProfile] = useState("");
    const [jobSource, setJobSource] = useState("");
    // FETCH API MOCK
    function save_data() {
        try {
            let url = "https://685b848289952852c2d9d00d.mockapi.io/users/Candidates";
            axios.post(url, {
                name: name,
                email: email,
                phone: phone,
                dob: dob,
                gender: gender,
                position: position,
                expectedSalary: expectedSalary,
                startDate: startDate,
                employmentType: employmentType,
                qualification: qualification,
                universityName: universityName,
                experienceYears: experienceYears,
                previousCompany: previousCompany,
                linkedinProfile: linkedinProfile,
                jobSource: jobSource

            }).then(() => {
                alert("Data is Save")

            })
        } catch (error) {
            console.log(error.message);
        }
    }




    return (
        <div>
            <div class="container my-5">
                <h2 class="mb-4">Job Application Form</h2>
                <form>
                    <div class="mb-3">
                        <label class="form-label">Full Name</label>
                        <input type="text" class="form-control" name="fullName" value={name} onChange={(a) => setUname(a.target.value)} />
                    </div>

                    <div class="mb-3">
                        <label class="form-label">Email Address</label>
                        <input type="email" class="form-control" name="email" value={email} onChange={(a) => setUemail(a.target.value)} />
                    </div>

                    <div class="mb-3">
                        <label class="form-label">Phone Number</label>
                        <input type="number" class="form-control" name="phone" value={phone} onChange={(a) => setPhone(a.target.value)} />
                    </div>

                    <div class="mb-3">
                        <label class="form-label">Date of Birth</label>
                        <input type="date" class="form-control" name="dob" value={dob} onChange={(a) => setDob(a.target.value)} />
                    </div>

                    <div class="mb-3">
                        <label class="form-label">Gender</label>
                        <select class="form-select" name="gender" onChange={(a) => setgender(a.target.value)} >
                            <option value="">Select Gender</option>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Other</option>
                        </select>
                    </div>

                    <div class="mb-3">
                        <label class="form-label">Position Applied For</label>
                        <select class="form-select" name="position" onChange={(a) => setPosition}>
                            <option value="">Select Position</option>
                            <option>Software Engineer</option>
                            <option>Designer</option>
                            <option>Manager</option>
                            <option>Other</option>
                        </select>
                    </div>

                    <div class="mb-3">
                        <label class="form-label">Expected Salary</label>
                        <input type="number" class="form-control" name="expectedSalary" value={expectedSalary} onChange={(a) => setExpectedSalary(a.target.value)} />
                    </div>

                    <div class="mb-3">
                        <label class="form-label">Available Start Date</label>
                        <input type="date" class="form-control" name="startDate" value={setStartDate} onChange={(a) => setStartDate(a.target.value)} />
                    </div>

                    <div class="mb-3">
                        <label class="form-label">Employment Type</label>
                        <select class="form-select" name="employmentType" onChange={(a) => setEmploymentType(a.target.value)} >
                            <option value="">Select Type</option>
                            <option>Full-time</option>
                            <option>Part-time</option>
                            <option>Internship</option>
                        </select>
                    </div>

                    <div class="mb-3">
                        <label class="form-label">Highest Qualification</label>
                        <select class="form-select" name="qualification" onChange={(a) => setQualification(a.target.value)}>
                            <option value="">Select Qualification</option>
                            <option>High School</option>
                            <option>Bachelor's</option>
                            <option>Master's</option>
                            <option>PhD</option>
                        </select>
                    </div>

                    <div class="mb-3">
                        <label class="form-label">University/Institute Name</label>
                        <input type="text" class="form-control" name="university" value={universityName} onChange={(a) => setUniversityName(a.target.value)} />
                    </div>

                    <div class="mb-3">
                        <label class="form-label">Years of Experience</label>
                        <input type="number" class="form-control" name="experience" value={experienceYears} onChange={(a) => setExperienceYears(a.target.value)} />
                    </div>

                    <div class="mb-3">
                        <label class="form-label">Previous Company Name</label>
                        <input type="text" class="form-control" name="previousCompany" value={previousCompany} onChange={(a) => setPreviousCompany(a.target.value)} />
                    </div>

                    <div class="mb-3">
                        <label class="form-label">LinkedIn Profile</label>
                        <input type="url" class="form-control" name="linkedin" value={linkedinProfile} onChange={(a) => setLinkedinProfile(a.target.value)} />
                    </div>

                    <div class="mb-3">
                        <label class="form-label">How did you hear about this job?</label>
                        <select class="form-select" name="jobSource" onChange={(a) => setJobSource(a.target.value)}>
                            <option value="">Select Option</option>
                            <option>LinkedIn</option>
                            <option>Company Website</option>
                            <option>Referral</option>
                            <option>Other</option>
                        </select>
                    </div>

                    <button type="submit" onClick={save_data} class="btn btn-primary">Submit Application</button>
                </form>
            </div>
        </div>
    )
}