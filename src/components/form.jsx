import { useState } from "react";
import axios from "axios";

const SignUpForm = ({ selectedPackage }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    numberOfMembers: "",
    selectedPackage: selectedPackage,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, phone, email, numberOfMembers, selectedPackage } = formData;
    console.log(formData);
    if (!email && !name && !phone) alert("Please fill all fields");
    axios
      .post(import.meta.env.VITE_FORM_URL, formData)
      .then((res) => {
        if (res.data.message === "Form submitted successfully") {
          alert("Contact Form submitted");
        } else {
          alert(res.data.message);
        }
      });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 bg-white rounded-lg">
      {/* Heading */}
      <h2 className="text-center text-lg font-semibold text-orange-600 mb-4">
        Request Callback for: {selectedPackage?.packageName}
      </h2>

      {/* Input Fields */}
      {["name", "phone", "email", "numberOfMembers"].map((field) => (
        <div key={field} className="w-full">
          <label className="block mb-2 text-sm text-orange-600" htmlFor={field}>
            {field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, " $1")}
          </label>
          <input
            type={
              field === "email"
                ? "email"
                : field === "numberOfMembers"
                ? "number"
                : "text"
            }
            id={field}
            name={field}
            value={formData[field]}
            min={0}
            onChange={handleChange}
            className="w-full bg-white text-gray-900 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-orange-600 focus:ring-1 focus:ring-orange-600"
            placeholder={`${
              field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, " $1")
            }`}
            required
          />
        </div>
      ))}

      {/* Submit Button */}
      <button
        className="w-full bg-orange-600 text-white font-semibold py-3 rounded-md hover:bg-orange-700 transition focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-offset-2"
        type="submit"
      >
        Apply For Offer
      </button>

      {/* Disclaimer */}
      <p className="text-xs text-gray-500 mt-4 text-center">
        By clicking on "Submit", you agree to our{" "}
        <a href="#" className="text-orange-600 underline">
          Privacy Policy
        </a>{" "}
        and{" "}
        <a href="#" className="text-orange-600 underline">
          Terms of Use
        </a>.
      </p>
    </form>
  );
};

export default SignUpForm;
