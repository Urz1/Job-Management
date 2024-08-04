import {
  Route,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Router,
} from "react-router-dom";
import React from "react";
import "./index.css";
import MainLayout from "../src/layouts/MainLayout";
import HomePage from "../src/pages/HomePage";
import JobPage from "../src/pages/JobPage";
import NotFound from "../src/pages/NotFound";
import SingleJob from "../src/pages/SingleJob";
import AddJob from "../src/pages/AddJob"


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route path="*" element = {<NotFound/>}/>
      <Route path='/jobs/:_id' element = {<SingleJob/>} />
      <Route path='/add-jobs' element = {<AddJob/>} />
    <Route path="/jobs" element = {<JobPage/>}/>
      <Route index element={<HomePage />} />
    </Route>
  ),
  
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
