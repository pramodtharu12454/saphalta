import AboutSection from "@/components/about/about";
import ContactForm from "@/components/contact/contact.";
import PortfolioDashboard from "@/components/dashboard/herosection.";

import React from "react";

const page = () => {
  return (
    <div>
      <PortfolioDashboard />
      <AboutSection />
      <ContactForm />
    </div>
  );
};

export default page;
