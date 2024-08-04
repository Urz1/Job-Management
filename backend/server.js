require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(bodyParser.json());
app.use(cors());

// MongoDB URI
const uri = "mongodb://localhost:27017/Job";

// Connect to MongoDB
mongoose
  .connect(uri)
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => console.error("MongoDB connection error:", err));

// Define job schema and model
const jobSchema = new mongoose.Schema({
  title: String,
  description: String,
  company:{
    name: String,
    description: String,
  },
  emial: String,
  phone: String,
  type: String
  
});

const Job = mongoose.model("Job", jobSchema);

//Fetching jobs
app.get("/jobs", async (req, res) => {
  try {
    const jobs = await Job.find();
    console.log("Fetched jobs:", jobs);
    res.json(jobs);
  } catch (error) {
    console.error("Error fetching jobs:", error);
    res.status(500).send("Error fetching jobs");
  }
});

//creating a job based on submitted form
app.post('/jobs/create', async (req, res) => {
  try {
    const newJob = new Job(req.body);
    const job = await newJob.save();
    res.status(201).json(job);
  } catch (error) {
    console.error('Error creating job:', error);
    res.status(500).send('Server error');
  }
});

// Updating db based on user request
app.put('/jobs/update/:_id', async (req, res) => {
  try {
    const job = await Job.findByIdAndUpdate(req.params._id, req.body, { new: true });
    if (!job) {
      return res.status(404).send('Job not found');
    }
    res.json(job);
  } catch (error) {
    console.error('Error updating job:', error);
    res.status(500).send('Server error');
  }
});

//Deleting a Job based on user Request
app.delete('/jobs/delete/:_id', async (req, res) => {
  try {
    const job = await Job.findByIdAndDelete(req.params._id);
    if (!job) {
      return res.status(404).send('Job not found');
    }
    res.json({ message: 'Job deleted successfully' });
  } catch (error) {
    console.error('Error deleting job:', error);
    res.status(500).send('Server error');
  }
});

// Route to fetch a single job by ID
app.get("/jobs/:_id", async (req, res) => {
  try {
    const job = await Job.findById(req.params._id); // Using '_id'
    if (job) {
      res.json(job);
    } else {
      res.status(404).send("Job not found");
    }
  } catch (error) {
    res.status(500).send("Error fetching job");
  }
});


const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


// Insert initial job data if collection is empty
// const jobsData = [
//   {
//     id: "job12345",
//     title: "Software Engineer",
//     description:
//       "Develop and maintain web applications, collaborate with cross-functional teams, and participate in code reviews. Experience with JavaScript and Python is required.",
//     type: "Full-time",
//   },
//   {
//     id: "job12346",
//     title: "Data Scientist",
//     description:
//       "Analyze complex data sets, build predictive models, and work closely with stakeholders to identify data-driven insights. Proficiency in machine learning and data analysis is essential.",
//     type: "Full-time",
//   },
//   {
//     id: "job12347",
//     title: "UI/UX Designer",
//     description:
//       "Design user interfaces and experiences for mobile and web applications. Work with product managers and engineers to implement designs. A strong portfolio of previous work is required.",
//     type: "Contract",
//   },
//   {
//     id: "job12348",
//     title: "Project Manager",
//     description:
//       "Oversee project planning, scheduling, and execution. Coordinate with cross-functional teams and ensure project milestones are met. PMP certification is a plus.",
//     type: "Full-time",
//   },
//   {
//     id: "job12349",
//     title: "DevOps Engineer",
//     description:
//       "Manage and optimize cloud infrastructure, automate deployment pipelines, and ensure system reliability. Experience with AWS and Docker is highly desirable.",
//     type: "Full-time",
//   },
//   {
//     id: "job12350",
//     title: "Marketing Specialist",
//     description:
//       "Develop and execute marketing campaigns, analyze market trends, and manage social media channels. Strong communication and analytical skills are required.",
//     type: "Part-time",
//   },
//   {
//     id: "job12351",
//     title: "Sales Executive",
//     description:
//       "Identify and develop new business opportunities, build relationships with clients, and achieve sales targets. Previous experience in sales is preferred.",
//     type: "Full-time",
//   },
//   {
//     id: "job12352",
//     title: "Content Writer",
//     description:
//       "Create engaging content for blogs, websites, and social media. Collaborate with marketing teams to develop content strategies. Excellent writing skills are essential.",
//     type: "Freelance",
//   },
//   {
//     id: "job12353",
//     title: "Customer Support Representative",
//     description:
//       "Assist customers with inquiries, troubleshoot issues, and provide exceptional customer service. Strong communication skills and a positive attitude are required.",
//     type: "Full-time",
//   },
//   {
//     id: "job12354",
//     title: "Business Analyst",
//     description:
//       "Analyze business processes, identify areas for improvement, and develop solutions. Work closely with stakeholders to gather requirements and create documentation.",
//     type: "Full-time",
//   },
// ];
// async function insertJobsData() {
//   try {
//     const count = await Job.countDocuments({});
//     if (count === 0) {
//       await Job.insertMany(jobsData);
//       console.log("Jobs data inserted");
//     }
//   } catch (error) {
//     console.error("Error inserting jobs data:", error);
//   }
// }

// insertJobsData();
// // Define route to fetch jobs