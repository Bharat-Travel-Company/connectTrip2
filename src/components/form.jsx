import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";

const SignUpForm = ({ selectedPackage }) => {
  const navigate = useNavigate();
  const title = selectedPackage?.packageName || "Default Package";

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    numberOfMembers: "",
    selectedPackage: title,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [captchaVerified, setCaptchaVerified] = useState(false);

  const verifyCallback = (response) => {
    setCaptchaVerified(!!response);
  };

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

    if (!captchaVerified) {
      alert("Please verify that you are not a robot.");
      return;
    }

    if (!email || !name || !phone) {
      alert("Please fill all fields.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert("Please enter a valid email.");
      return;
    }

    setIsSubmitting(true);

          axios.post(`${import.meta.env.VITE_USER_DATA_URL}`, formData)
  .then((res) => {
    if (res.data.message === "Form submitted successfully") {
      setFormData({
        name: "",
        phone: "",
        email: "",
        numberOfMembers: "",
        selectedPackage: title,
      });
      navigate("/thank-you");
    } else {
      alert(res.data.message);
    }
  })
  .catch((err) => {
    alert(
      err.response?.data?.message || "An error occurred. Please try again."
    );
  })
  .finally(() => {
    setIsSubmitting(false);
  });

  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 bg-white rounded-lg">
      <h2 className="text-center text-lg font-semibold text-orange-600 mb-4">
        Request Callback for: {selectedPackage?.packageName}
      </h2>

      {["name", "phone", "email", "numberOfMembers"].map((field) => (
        <div key={field} className="w-full">
          <label className="block mb-2 text-sm text-orange-600" htmlFor={field}>
            {field.charAt(0).toUpperCase() + field.slice(1)}
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
            onChange={handleChange}
            className="w-full bg-white text-gray-900 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-orange-600 focus:ring-1 focus:ring-                                                                                                                                                                                                                                                                                                                                                                                                orange-600"
            required
          />
        </div>
      ))}

      <div className="flex justify-center">
        <ReCAPTCHA
          sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
          onChange={verifyCallback}
        />
      </div>

      <button
        className="w-full bg-orange-600 text-white font-semibold py-3 rounded-md hover:bg-orange-700 transition focus:outline-none focus:ring-2 focus:ring-orange-60                                                                                                                                                                                                                                                                                                                                                                                                0 focus:ring-offset-2"
        type="submit"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Submitting..." : "Apply For Offer"}
      </button>

      <p className="text-xs text-gray-500 mt-4 text-center">
        By clicking on &quot;Submit&quot;, you agree to our{" "}
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
