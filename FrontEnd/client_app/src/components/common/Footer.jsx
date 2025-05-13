const Footer = () => {
  return (
    <footer className="bg-dark text-light mt-auto pt-5 pb-3">
      <div className="container">
        <div className="row gy-4">

          {/* Company Info */}
          <div className="col-md-4">
            <h5 className="text-white">Your Company</h5>
            <p className="text-white-50 small">
              Empowering businesses with real-time queue management. Deliver faster, smarter customer experiences with confidence.
            </p>
          </div>

          {/* Navigation */}
          <div className="col-md-2">
            <h6 className="text-white">Explore</h6>
            <ul className="list-unstyled small">
              <li><a href="/" className="text-white-50 text-decoration-none">Home</a></li>
              <li><a href="/about" className="text-white-50 text-decoration-none">About Us</a></li>
              <li><a href="/services" className="text-white-50 text-decoration-none">Services</a></li>
              <li><a href="/pricing" className="text-white-50 text-decoration-none">Pricing</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="col-md-2">
            <h6 className="text-white">Resources</h6>
            <ul className="list-unstyled small">
              <li><a href="/faq" className="text-white-50 text-decoration-none">FAQ</a></li>
              <li><a href="/blog" className="text-white-50 text-decoration-none">Blog</a></li>
              <li><a href="/terms" className="text-white-50 text-decoration-none">Terms</a></li>
              <li><a href="/privacy" className="text-white-50 text-decoration-none">Privacy</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-md-4">
            <h6 className="text-white">Contact Us</h6>
            <p className="text-white-50 small mb-1">Email: aidline@yourcompany.com</p>
            <p className="text-white-50 small mb-1">Phone: +91 8684861973</p>
            <p className="text-white-50 small">Location: bbd lucknow</p>
            <div className="d-flex gap-3 mt-2">
              <a href="#" className="text-white-50" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="text-white-50" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-white-50" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
              <a href="#" className="text-white-50" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>

        </div>

        <hr className="border-secondary mt-4" />

        <div className="text-center text-white-50 small">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
