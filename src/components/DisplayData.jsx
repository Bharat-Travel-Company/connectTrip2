import React, { useEffect, useState } from "react";
import axios from "axios";
import logo from "../assets/logo.png";

const DisplayData = () => {
  const [leads, setLeads] = useState([]); // State to store fetched data
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from the backend
    const fetchLeads = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_FORM_URL}/list-leads`
        );
        setLeads(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchLeads();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      {/* Logo */}
      <div className="pt-3 pl-3 top-[10px] sm:top-[30px] left-[50px] sm:left-[100px] md:left-[145px]">
        <img
          src={logo}
          alt="Logo"
          className="w-25 sm:w-24 md:w-32 lg:w-40 xl:w-48 2xl:w-56 h-8"
        />
      </div>

      <div className="p-3">
        <h1 className="text-black font-bold text-center text-lg sm:text-xl md:text-2xl">
          User Data
        </h1>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left text-sm sm:text-base md:text-lg">
            <thead>
              <tr>
                <th className="py-3 px-4 text-orange-500 font-bold text-lg sm:text-xl md:text-2xl">
                  S.No
                </th>
                <th className="py-3 px-4 text-orange-500 font-bold text-lg sm:text-xl md:text-2xl">
                  Name
                </th>
                <th className="py-3 px-4 text-orange-500 font-bold text-lg sm:text-xl md:text-2xl">
                  Email
                </th>
                <th className="py-3 px-4 text-orange-500 font-bold text-lg sm:text-xl md:text-2xl">
                  Phone
                </th>
                <th className="py-3 px-4 text-orange-500 font-bold text-lg sm:text-xl md:text-2xl">
                  No. of Members
                </th>
                <th className="py-3 px-4 text-orange-500 font-bold text-lg sm:text-xl md:text-2xl">
                  Selected Package
                </th>
                <th className="py-3 px-4 text-orange-500 font-bold text-lg sm:text-xl md:text-2xl">
                  Submitted At
                </th>
              </tr>
            </thead>
            <tbody>
              {leads.map((lead, index) => (
                <tr
                  key={lead._id}
                  className="border-b border-gray-200 hover:bg-gray-50"
                >
                  <td className="py-3 px-4">{index + 1}</td>
                  <td className="py-3 px-4">{lead.name}</td>
                  <td className="py-3 px-4">{lead.email}</td>
                  <td className="py-3 px-4">{lead.phone}</td>
                  <td className="py-3 px-4">{lead.numberOfMembers}</td>
                  <td className="py-3 px-4">{lead.selectedPackage || "N/A"}</td>
                  <td className="py-3 px-4">
                    {new Date(lead.createdAt).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default DisplayData;
