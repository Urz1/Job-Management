import React, { useState, useEffect } from "react";
import { FaMapMarker } from "react-icons/fa";
import { Link } from "react-router-dom";

function JobListing({ index }) {
  const [jobs, setJobs] = useState([]);
  const [expandedJobId, setExpandedJobId] = useState(null);

  useEffect(() => {
    fetch("/api/jobs")
      .then((response) => response.json())
      .then((data) => setJobs(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  const toggleDescription = (id) => {
    setExpandedJobId(expandedJobId === id ? null : id);
  };

  const renderItems = () => {
    const jobElements = [];
    for (let i = 0; i < jobs.length; i++) {
      const job = jobs[i];

      // let description = job.description;

      jobElements.push(
        <div key={job._id}>
          <div
            class="rounded-lg border bg-card text-card-foreground shadow-sm p-4"
            data-id="31"
            data-v0-t="card"
          >
            <div class="flex flex-col space-y-1.5 p-6" data-id="32">
              <div
                class="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80"
                data-id="33"
                data-v0-t="badge"
              >
                {job.type}
              </div>
              <h3
                class="whitespace-nowrap tracking-tight text-lg font-bold"
                data-id="34"
              >
                {job.title}
              </h3>
            </div>
            <div class="p-6" data-id="35">
              <p data-id="36">
                {expandedJobId === job._id
                  ? job.description
                  : job.description.substring(0, 90) + " ..."}
              </p>
              <button
                onClick={() => toggleDescription(job._id)}
                className="text-indigo-500 mb-5 hover:text-indigo-600"
              >
                {expandedJobId === job._id ? "less" : "more"}
              </button>
              <p class="mt-2 text-blue-600" data-id="37">
                $70K - $80K / Year
              </p>
              <p class="text-gray-600" data-id="38">
                <FaMapMarker className="inline text-lg mb-1" />
                Boston, MA
              </p>
            </div>
            <div class="flex items-center p-6" data-id="39">
              <Link
                to={`/jobs/${job._id}`}
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      );
    }
    const slicedJobElements =
      index === -1 ? jobElements : jobElements.slice(0, index);
    return slicedJobElements;
  };
  return (
    <section class="p-8 bg-gray-100" data-id="28">
      <h3 class="text-2xl font-bold text-center text-blue-600" data-id="29">
        Browse Jobs
      </h3>
      <div class="grid gap-4 mt-4 md:grid-cols-2 lg:grid-cols-3" data-id="30">
        {renderItems()}
      </div>
    </section>
  );
}

export default JobListing;

{
  /* <div
          class="rounded-lg border bg-card text-card-foreground shadow-sm p-4"
          data-id="41"
          data-v0-t="card"
        >
          <div class="flex flex-col space-y-1.5 p-6" data-id="42">
            <div
              class="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80"
              data-id="43"
              data-v0-t="badge"
            >
              Full-Time
            </div>
            <h3
              class="whitespace-nowrap tracking-tight text-lg font-bold"
              data-id="44"
            >
              Front-End Engineer (React &amp; Redux)
            </h3>
          </div>
          <div class="p-6" data-id="45">
            <p data-id="46">
              Join our team as a Front-End Developer in sunny Miami, FL. We are
              looking for a motivated ...
            </p>
            <p class="mt-2 text-blue-600" data-id="47">
              $70K - $80K / Year
            </p>
            <p class="text-gray-600" data-id="48">
              Miami, FL
            </p>
          </div>
          <div class="flex items-center p-6" data-id="49">
            <button
              class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
              data-id="50"
            >
              Read More
            </button>
          </div>
        </div>
        <div
          class="rounded-lg border bg-card text-card-foreground shadow-sm p-4"
          data-id="51"
          data-v0-t="card"
        >
          <div class="flex flex-col space-y-1.5 p-6" data-id="52">
            <div
              class="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80"
              data-id="53"
              data-v0-t="badge"
            >
              Full-Time
            </div>
            <h3
              class="whitespace-nowrap tracking-tight text-lg font-bold"
              data-id="54"
            >
              React.js Developer
            </h3>
          </div>
          <div class="p-6" data-id="55">
            <p data-id="56">
              Are you passionate about front-end development? Join our team in
              vibrant Brooklyn, NY, and...
            </p>
            <p class="mt-2 text-blue-600" data-id="57">
              $70K - $80K / Year
            </p>
            <p class="text-gray-600" data-id="58">
              Brooklyn, NY
            </p>
          </div>
          <div class="flex items-center p-6" data-id="59">
            <button
              class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
              data-id="60"
            >
              Read More
            </button>
          </div>
        </div> */
}
