import React from "react";
import Card from "./Card";
import { Link } from "react-router-dom";

function HomeCards() {
  return (
    <div>
      <section class="flex justify-center gap-4 p-8 bg-white" data-id="13">
        {/* <div
          class="rounded-lg border bg-card text-card-foreground shadow-sm w-1/2 p-4"
          data-id="14"
          data-v0-t="card"
        > */}
        <Card bg="bg-indigo-100">
          <div class="flex flex-col space-y-1.5 p-6" data-id="15">
            <h3
              class="whitespace-nowrap tracking-tight text-lg font-bold"
              data-id="16"
            >
              For Developers
            </h3>
          </div>
          <div class="p-6" data-id="17">
            <p data-id="18">
              Browse our React jobs and start your career today
            </p>
          </div>
          <div class="flex items-center p-6" data-id="19">
            <Link to={'/add-jobs'}
              class="bg-blue-500 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
              data-id="20"
            >
              Browse Jobs
            </Link>
          </div>
        </Card>
        {/* </div> */}
        {/* <div
          class="rounded-lg border text-card-foreground shadow-sm w-1/2 p-4 bg-blue-100"
          data-id="21"
          data-v0-t="card"
        > */}
        <Card>
          <div class="flex flex-col space-y-1.5 p-6" data-id="22">
            <h3
              class="whitespace-nowrap tracking-tight text-lg font-bold"
              data-id="23"
            >
              For Employers
            </h3>
          </div>
          <div class="p-6" data-id="24">
            <p data-id="25">
              List your job to find the perfect developer for the role
            </p>
          </div>
          <div class="flex items-center p-6" data-id="26">
            <Link to={'/add-jobs'}
              class="bg-indigo-500 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
              data-id="27"
            >
              Add Job
            </Link>
          </div>
        </Card>
        {/* </div> */}
      </section>
    </div>
  );
}

export default HomeCards;
