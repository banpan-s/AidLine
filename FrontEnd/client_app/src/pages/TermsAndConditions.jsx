import React from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

const TermsAndConditions = () => {
  return (
    <>
      <Header />
      <section className="bg-light py-5">
        <div className="container">
          <h1 className="mb-4 fw-bold text-center">Terms and Conditions</h1>

          <section className="mb-5">
            <h4 className="fw-semibold">1. Introduction</h4>
            <p className="text-muted">
              Welcome to our website. By accessing or using our services, you agree to comply with and be bound by these Terms and Conditions. If you disagree with any part of these terms, you must not use our services.
            </p>
          </section>

          <section className="mb-5">
            <h4 className="fw-semibold">2. Use of Service</h4>
            <p className="text-muted">
              You agree to use the service only for lawful purposes and in a way that does not infringe on the rights or restrict the use and enjoyment of the service by any third party. Prohibited behavior includes harassing or causing distress to any person, transmitting obscene content, or disrupting the normal flow of dialogue within our services.
            </p>
          </section>

          <section className="mb-5">
            <h4 className="fw-semibold">3. Intellectual Property</h4>
            <p className="text-muted">
              All content, trademarks, logos, and data on this website, including but not limited to text, graphics, icons, and software, are the property of the company or its licensors and are protected by intellectual property laws.
            </p>
          </section>

          <section className="mb-5">
            <h4 className="fw-semibold">4. Limitation of Liability</h4>
            <p className="text-muted">
              We are not liable for any direct, indirect, incidental, or consequential damages resulting from your use or inability to use the service, including but not limited to loss of data, loss of profits, or business interruption.
            </p>
          </section>

          <section className="mb-5">
            <h4 className="fw-semibold">5. Termination</h4>
            <p className="text-muted">
              We reserve the right to suspend or terminate your access to the service at our sole discretion, without notice, for conduct that we believe violates these terms or is harmful to other users of the service, us, or third parties, or for any other reason.
            </p>
          </section>

          <section className="mb-5">
            <h4 className="fw-semibold">6. Privacy</h4>
            <p className="text-muted">
              Your use of the service is also subject to our Privacy Policy, which explains how we collect, use, and protect your personal information. Please review it carefully.
            </p>
          </section>

          <section className="mb-5">
            <h4 className="fw-semibold">7. Changes to Terms</h4>
            <p className="text-muted">
              We reserve the right to modify these terms at any time. Your continued use of the service after any such changes constitutes your acceptance of the updated terms.
            </p>
          </section>

          <section className="mb-5">
            <h4 className="fw-semibold">8. Governing Law</h4>
            <p className="text-muted">
              These terms shall be governed and interpreted in accordance with the laws of the jurisdiction in which the company operates, without regard to its conflict of law principles.
            </p>
          </section>

          <section className="mb-5">
            <h4 className="fw-semibold">9. Contact Us</h4>
            <p className="text-muted">
              If you have any questions or concerns about these Terms and Conditions, please{" "}
              <a href="/contact" className="text-decoration-none text-primary fw-semibold">
                contact us
              </a>.
            </p>
          </section>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default TermsAndConditions;
