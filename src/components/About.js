
// About.js
import React from 'react';

const About = () => {
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="display-4">About Us</h1>
        <p className="lead text-muted">
          We are passionate about delivering modern solutions for today's challenges.
        </p>
      </div>

      <div className="row align-items-center">
        <div className="col-md-6">
          <img 
            src="https://www.shutterstock.com/image-photo/close-head-shot-portrait-preppy-600nw-1433809418.jpg" 
            alt="About Us" 
            className="img-fluid rounded shadow-sm" 
          />
        </div>

        <div className="col-md-6">
          <div className="card shadow-sm border-0">
            <div className="card-body">
              <h2 className="card-title">Who We Are</h2>
              <p className="card-text">
                We are a dynamic team of innovators and experts who strive to create seamless 
                and efficient solutions in every project. Our passion drives us to push the boundaries 
                of what's possible.
              </p>
              <h2 className="card-title">Our Mission</h2>
              <p clas600x400sName="card-text">
                To empower businesses and individuals by providing cutting-edge technologies 
                and services, ensuring top-notch quality, transparency, and sustainability in all our 
                ventures.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-5 text-center">
        <div className="col-md-4">
          <div className="card border-0 shadow-sm">
            <div className="card-body">
              <i className="bi bi-lightbulb display-3 text-primary"></i>
              <h3 className="mt-3">Innovative Solutions</h3>
              <p className="text-muted">
                We bring innovation to the forefront with cutting-edge technology and creative thinking.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card border-0 shadow-sm">
            <div className="card-body">
              <i className="bi bi-people display-3 text-success"></i>
              <h3 className="mt-3">Expert Team</h3>
              <p className="text-muted">
                Our team is composed of skilled professionals with deep expertise in their fields.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card border-0 shadow-sm">
            <div className="card-body">
              <i className="bi bi-graph-up display-3 text-danger"></i>
              <h3 className="mt-3">Growth & Success</h3>
              <p className="text-muted">
                We focus on delivering measurable growth and success for our clients and partners.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
