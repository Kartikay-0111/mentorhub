import React, { useState } from "react";
import "./signup.css";

function SignUpApp() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    dob: "",
    gender: "",
    schoolOrUniversity: "",
    fieldOfStudy: "",
    levelOfEducation: "",
    interests: [],
    mentor_or_mentee: "",
    experience: "",
    teachingexp: "",
    availability: "",
    password: "",
    confirmPassword: "",
    agreedToTerms: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    if (name === "mentor_or_mentee") {
      if (value === "Mentor") {
        console.log("Selected: Mentor");
        document.getElementById("Qs-for-mentor").style.display = "block";
      }
    }
  };

  const handleInterestsChange = (e) => {
    const { options } = e.target;
    const interests = [];

    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        interests.push(options[i].value);
      }
    }
    setFormData({
      ...formData,
      interests: interests,
    });
  };

  const handleSubmit = (e) => {
    console.log(e.preventDefault());
    alert("Form submitted succesfuly");
    console.log(formData);
  };

  return (
    <div className="container">
      <div className="mentee-registration-container">
        <h2>Mentee/Mentor Registration Form</h2>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <label>
              Full Name:
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Email Address:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Phone number:
              <input
                type="text"
                min="10"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Date of Birth:
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                required
              />
            </label>
          </fieldset>
          <fieldset>
            <label>
              I want to apply as
              <select
                single
                name="mentor_or_mentee"
                value={formData.mentor_or_mentee}
                onChange={handleChange}
                required
              >
                `{" "}
                <option hidden selected value>
                  {" "}
                  -- select an option --{" "}
                </option>
                <option>Mentee</option>
                <option>Mentor</option>
              </select>
              Current School/University
              <input
                type="text"
                name="schoolOrUniversity"
                value={formData.schoolOrUniversity}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Area(s) of Interest/targeted domains (select multiple):
              <select
                name="interests"
                multiple
                value={formData.interests}
                onChange={handleInterestsChange}
                className="custom-select"
              >
                <option value="Software Development">
                  Software Development
                </option>
                <option value="Web Development">Web Development</option>
                <option value="Mobile App Development">
                  Mobile App Development
                </option>
                <option value="Data Science">Data Science</option>
                <option value="Artificial Intelligence (AI)">
                  Artificial Intelligence (AI)
                </option>
                <option value="Machine Learning (ML)">
                  Machine Learning (ML)
                </option>
                <option value="Cybersecurity">Cybersecurity</option>
                <option value="Cloud Computing">Cloud Computing</option>
                <option value="DevOps">DevOps</option>
                <option value="Database Management">Database Management</option>
              </select>
            </label>
            <label>
              Level of Education
              <select
                single
                name="levelOfEducation"
                value={formData.levelOfEducation}
                onChange={handleChange}
                required
              >
                <option hidden selected value>
                  {" "}
                  -- select an option --{" "}
                </option>
                <option>High School</option>
                <option>Undergrad</option>
                <option>PostGrad</option>
              </select>
            </label>
          </fieldset>
          <fieldset id="Qs-for-mentor">
            <label>
              My experience in selected domains in years:
              <input
                type="number"
                min="1"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              About my experience in Mentoring and Teaching:
              <textarea
                name="teachingexp"
                value={formData.teachingexp}
                onChange={handleChange}
                required
              ></textarea>
            </label>
          </fieldset>
          <div className="submit_btn">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default SignUpApp;
