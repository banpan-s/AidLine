import React from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

const AboutUs = () => {
  return (
    <>
      <Header />

      {/* Fullscreen Hero */}
      <section
        className="text-white d-flex align-items-center"
        style={{
          background: "linear-gradient(135deg, #1e3c72, #2a5298)",
          clipPath: "polygon(0 0, 100% 0, 100% 90%, 0% 100%)",
          height: "60vh",
        }}
      >
        <div className="container text-center">
          <h1 className="display-4 fw-bold">About AidLine</h1>
          <p className="lead">Reimagining how services connect with people.</p>
        </div>
      </section>

      {/* Floating Info Cards */}
      <section className="container py-5">
        <div className="row g-4">
          {[
            {
              title: "Our Mission",
              text: "To eliminate unnecessary waiting and bring transparency to service queues with real-time updates and smart notifications.",
              bg: "#f8f9fa",
            },
            {
              title: "Why AidLine",
              text: "AidLine was built to empower both users and business owners. It's not just a tool—it's a better experience for everyone involved.",
              bg: "#fff",
            },
            {
              title: "Our Vision",
              text: "Creating a world where waiting in line is no longer a hassle but a seamlessly managed process for all industries.",
              bg: "#f8f9fa",
            },
          ].map((card, idx) => (
            <div className="col-md-4" key={idx}>
              <div
                className="p-4 shadow rounded h-100"
                style={{ backgroundColor: card.bg }}
              >
                <h4 className="fw-bold">{card.title}</h4>
                <p className="text-muted">{card.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Team Grid Section */}
      <section className="bg-light py-5">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">Our Core Team</h2>
          <div className="row justify-content-center g-4">
            {[
              { name: "Ayush Singh", role: "UI/UX Designer", initial: "P" },
              { name: "Bheem Prakash", role: "Backend Developer", initial: "B" },
            ].map((member, i) => (
              <div className="col-md-4 text-center" key={i}>
                <div className="card border-0 shadow-lg h-100">
                  <div
                    className="rounded-circle mx-auto mt-4 mb-3 d-flex align-items-center justify-content-center"
                    style={{
                      width: "120px",
                      height: "120px",
                      fontSize: "2.5rem",
                      backgroundColor: "#0d6efd",
                      color: "#fff",
                      fontWeight: "bold",
                    }}
                  >
                    {member.initial}
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">{member.name}</h5>
                    <p className="card-text text-muted">{member.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="container py-5 text-center">
        <h3 className="fw-bold mb-3">Let's Talk</h3>
        <p className="text-muted">
          Have questions or feedback? Visit our{" "}
          <a href="/Contact" className="text-primary fw-semibold">
            Contact Page
          </a>{" "}
          and we’ll get back to you promptly.
        </p>
      </section>

      <Footer />
    </>
  );
};

export default AboutUs;
