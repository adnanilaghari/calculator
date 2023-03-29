import React from "react";
import Panels from "@/components/Panels";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const LandingPage = () => {
  return (
    <div className="w-full">
      <Navbar />
      <div className="mt-16">
        <Panels />
      </div>

      <Footer />
    </div>
  );
};

export default LandingPage;
