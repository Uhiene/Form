import React from "react";
import { toast } from "react-toastify";

const handleSubmit = (e) => {
  e.preventDefault();
  toast.success("comment posted sucessfully");
};

const FormPage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-6">
            <input
              type="text"
              className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleInput90"
              placeholder="Name"
            />
          </div>
          <div className="form-group mb-6">
            <input
              type="email"
              className="form-control block w-full px-3 py-1.5 text-base
              font-normal text-gray-700 bg-white bg-clip-padding
              border border-gray-300 rounded transition ease-in-out
              m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleInput91"
              placeholder="Email address"
            />
          </div>
          <div className="form-group form-check text-center mb-6">
            <input
              type="checkbox"
              className="form-check-input appearance-none h-4 w-4 border 
              border-gray-300 rounded-sm bg-white checked:bg-blue-600          
              checked:border-blue-600 focus:outline-none transition duration-200
              mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
              id="exampleCheck96"
              checked
            />
            <label
              className="form-check-label inline-block text-gray-800"
              for="exampleCheck96"
            >
              I have read and agree to the terms
            </label>
          </div>
          <button
            type="submit"
            className="w-full px-6 py-2.5 bg-blue-600 text-white font-medium 
            text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 
            hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none 
            focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormPage;
