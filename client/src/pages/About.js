import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Upahar app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/image1.jpg"
            alt="contactus"
            style={{ width: "80%", height: "60vh"}}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
           Welcome to Upahar, your go-to online store for finding thoughtful gifts for every occasion. 
           From birthdays to anniversaries, and everything in between, we offer a wide range of curated gifts for men, women, children, and even flowers. 
           With easy navigation and filters, you can quickly find the perfect gift. 
           Our platform ensures a seamless shopping experience with secure login and simple checkout. 
           At Upahar, we help you make every moment memorable.

          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
