import React from "react";
import { useState, useEffect } from "react";

const AddJob = () => {
  const [title, setTitle] = useState("");
  const [type, setType] = useState("Full-Time");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [salary, setSalary] = useState("Under $50K");
  const [company,setCompany] = useState('');
  const [companyName, setCompanyName] = useState("");
  const [companyDescription, setCompanyDescription] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactPhone, setContactPhone] = useState("");


  const submitForm = async (e)=>{
    e.preventDefault();
    const newJob ={
        title,
        type,
        description,
        company: {
            name: companyName,
            description:companyDescription
        },
        email:contactEmail,
        phone:contactPhone
    }

    try {
    const response = await fetch('/api/jobs/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // Specify the content type
      },
      body: JSON.stringify(newJob), // Convert the object to a JSON string
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json(); // Parse the JSON response
    console.log('Job saved successfully:', data);
  } catch (error) {
    console.error('Error saving job:', error);
  }
  };
  return (
<div className="flex flex-col justify-center items-center min-h-screen bg-gray-200 p-4">
      <div className="shadow-md bg-white rounded overflow-hidden w-full max-w-lg p-4">
        <h1 className="font-bold text-xl mb-4">Work Experience Form</h1>
        <form onSubmit={submitForm} id="workExperienceForm" className="space-y-4">
          <div className="form-group">
            <label htmlFor="jobType" className="block mb-1">Job Type:</label>
            <select value={type} onChange={(e)=>{setType(e.target.value)}} id="jobType" name="jobType" className="border rounded p-2 w-full" required>
              <option value="" disabled selected>Select job type</option>
              <option value="Full-Time">Full-Time</option>
              <option value="Part-Time">Part-Time</option>
              <option value="Contract">Contract</option>
              <option value="Internship">Internship</option>
              <option value="Freelance">Freelance</option>
              
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="title" className="block mb-1">Job Title:</label>
            <input value={title} onChange={(e)=>{setTitle(e.target.value)}} className="border rounded p-2 w-full" type="text" id="title" name="title" required/>
          </div>
          <div className="form-group">
            <label htmlFor="description" className="block mb-1">Description:</label>
            <textarea value={description} onChange={(e)=>{setDescription(e.target.value)}} id="description" name="description" rows="4" className="border rounded p-2 w-full" required></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="companyName" className="block mb-1">Company Name:</label>
            <input value={companyName} onChange={(e)=>{setCompanyName(e.target.value)}} className="border rounded p-2 w-full" type="text" id="companyName" name="companyName" required/>
          </div>
          <div className="form-group">
            <label htmlFor="companyDescription" className="block mb-1">Company Description:</label>
            <textarea value={companyDescription} onChange={(e)=>{setCompanyDescription(e.target.value)}} id="companyDescription" name="companyDescription" rows="4" className="border rounded p-2 w-full" required></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="email" className="block mb-1">Contact Email:</label>
            <input value={contactEmail} onChange={(e)=>{setContactEmail(e.target.value)}} className="border rounded p-2 w-full" type="email" id="email" name="email" required/>
          </div>
          <div className="form-group">
            <label htmlFor="phone" className="block mb-1">Contact Phone:</label>
            <input value={contactPhone} onChange={(e)=>{setContactPhone(e.target.value)}} className="border rounded p-2 w-full" type="tel" id="phone" name="phone" required/>
          </div>
          <div className="form-group">
            <button className="bg-blue-600 rounded p-2 text-white hover:bg-blue-700 transition" type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddJob;
