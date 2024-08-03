import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../routes/routes";

const FormPage: React.FC = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem("userName", name);
    navigate(ROUTES.HOME); // Adjust the path as necessary
  };

  return (
    <div className="flex relative items-center justify-center min-h-screen ">
      {/* <img
        src={backimage}
        className="hidden sm:block absolute w-full h-auto  md:h-full"
      /> */}
      <div className="z-10 p-6 max-w-md w-full">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full"
        >
          <h4 className="text-xl font-semibold mb-4 text-left text-gray-700">
            Name
          </h4>
          <label className="block mb-2">
            {/* <span className="text-gray-700">Name</span> */}
            <input
              placeholder="Abdullah"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            />
          </label>
          <button
            type="submit"
            className="w-full mt-4 px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none"
          >
            Enter
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormPage;
