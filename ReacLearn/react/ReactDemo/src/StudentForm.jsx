import { useState } from "react";

function StudentForm() {
  const [formData, setFormData] = useState({
    name: "",
    rollno: "",
    gender: "",
    department: "",
    phone: "",
    email: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  // Handle Input Change
  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  // Validation Function
  function validate() {
    let tempErrors = {};

    if (!formData.name.trim()) tempErrors.name = "Name is required";
    if (!formData.rollno.trim()) tempErrors.rollno = "Roll No is required";

    if (!formData.gender) tempErrors.gender = "Select Gender";

    if (!formData.department.trim())
      tempErrors.department = "Department is required";

    // Phone validation: 10 digits only
    if (!/^[0-9]{10}$/.test(formData.phone))
      tempErrors.phone = "Enter valid 10-digit phone number";

    // Email validation
    if (!/\S+@\S+\.\S+/.test(formData.email))
      tempErrors.email = "Enter valid email";

    return tempErrors;
  }

  // Handle Form Submit
  function handleSubmit(e) {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setSuccess("Data successfully submitted!");
    } else {
      setSuccess("");
    }
  }

  return (
    <div style={{ width: "350px", margin: "auto" }}>
      <h2>Student Form</h2>

      <form onSubmit={handleSubmit}>
        {/* Name */}
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={formData.name}
          onChange={handleChange}
        />
        <p style={{ color: "red" }}>{errors.name}</p>

        {/* Roll No */}
        <input
          type="text"
          name="rollno"
          placeholder="Roll No"
          value={formData.rollno}
          onChange={handleChange}
        />
        <p style={{ color: "red" }}>{errors.rollno}</p>

        {/* Gender */}
        <select name="gender" value={formData.gender} onChange={handleChange}>
          <option value="">-- Select Gender --</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <p style={{ color: "red" }}>{errors.gender}</p>

        {/* Department */}
        <input
          type="text"
          name="department"
          placeholder="Department"
          value={formData.department}
          onChange={handleChange}
        />
        <p style={{ color: "red" }}>{errors.department}</p>

        {/* Phone */}
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
        />
        <p style={{ color: "red" }}>{errors.phone}</p>

        {/* Email */}
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <p style={{ color: "red" }}>{errors.email}</p>

        <button type="submit">Submit</button>
      </form>

      {/* Success Message */}
      {success && <h3 style={{ color: "green" }}>{success}</h3>}
    </div>
  );
}

export default StudentForm;
