import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

const SingleJob = () => {
  const { _id } = useParams();
  const navigate = useNavigate();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const res = await fetch(`/api/jobs/${_id}`);
        if (!res.ok) {
          throw new Error(`Error: ${res.status} ${res.statusText}`);
        }
        const data = await res.json();
        setJob(data);
      } catch (error) {
        console.error("Fetch error:", error);
        setJob(null);
      } finally {
        setLoading(false);
      }
    };

    fetchJob();
  }, [_id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!job) {
    return <p>No job found.</p>;
  }

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this job?")) {
      try {
        const response = await fetch(`/api/jobs/delete/${_id}`, {
          method: 'DELETE',
        });

        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        // Optionally, redirect to a different page or update the UI
        navigate('/jobs'); // Redirect to the job listings page
      } catch (error) {
        console.error('Error deleting job:', error);
      }
    }
  };
  const handleUpdate = async () => {
    if (window.confirm("Are you sure you want to edit this job?")) {
      try {
        const response = await fetch(`/api/jobs/update/${_id}`, {
          method: 'PUT',
        });

        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        // Optionally, redirect to a different page or update the UI
        navigate('/'); // Redirect to the job listings page
      } catch (error) {
        console.error('Error deleting job:', error);
      }
    }
  };

  // const commaIndex = job.company.indexOf(",");

  function JobListing({ jobs }) {
    return (
      <article className="bg-white shadow-lg rounded-lg p-6 mb-6 border border-gray-200">
        <p className="text-md">{jobs.type}</p>
        <h2 className="text-xl font-bold">{jobs.title}</h2>
      </article>
    );
  }

  function JobDescription({ description }) {
    return (
      <section style={{marginTop: '2% '}} className="bg-customBlue shadow-lg rounded-lg p-6 mb-6 border border-gray-200">
        <h2 className="font-bold text-lg mb-2">Job Description</h2>
        <p className="text-gray-700 mb-2">{description}</p>
        <h3 className="text-blue-500 text-lg font-semibold mb-2">Salary</h3>
        <p className="text-gray-700">$70k-$80k/Year</p>
      </section>
    );
  }

  function CompanyInfo({ job }) {
    return (
      <aside className="bg-white shadow-lg rounded-lg p-6 mb-6 border border-gray-200">
        <h3 className="text-xl font-bold mb-2">
          {job.company.name}
        </h3>
        <p className="text-gray-700 mb-2">
          {job.company.description}
        </p>
        <br /><hr />
        <p className="text-gray-600 mb-2">
          Contact Email: <Link to={`mailto:${job.email}`}>{job.email}</Link>
        </p>
        <p className="text-gray-600">Contact Phone: {job.phone}</p>
      </aside>
    );
  }

  function ManageJobs() {
    return (
      <div className="flex flex-row mt-4">
        <button onClick={()=>{
          handleUpdate()
        }}
          className="w-1/2 mr-2 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded"
        >
          Edit Job
        </button>
        <button onClick={()=>{handleDelete()}}
          className="w-1/2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Delete Job
        </button>
      </div>
    );
  }

  function Sidebar({ job }) {
    return (
      <div className="bg-gray-200 w-1/3 p-4">
        <CompanyInfo job={job} />
        <ManageJobs />
      </div>
    );
  }

  return (
    <div className="flex h-screen">
      <div className="flex-1 p-4">
        <JobListing jobs={job} />
        <JobDescription description={job.description} />
      </div>
      <Sidebar job={job} />
    </div>
  );
};

export default SingleJob;

