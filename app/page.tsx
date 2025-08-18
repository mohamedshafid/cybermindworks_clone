import React from "react";
import { JobList, Navbar } from "@/components";

const Home = () => {
  return (
    <React.Fragment>
      <div className="w-full h-screen bg-primary">
        <div className="w-full bg-white">
          <Navbar />
        </div>
        <div className="container">
          <JobList/>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
