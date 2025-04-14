import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import "./css/Custom_style.css"; // Your custom styles if needed

function App() {
  return (
    <>
      <div className="position-relative d-flex flex-column min-vh-100 overflow-hidden">
        {/* Blurred Background Layer */}
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            backgroundImage: "url('/images/time.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
            // filter: "blur(1px)",
            zIndex: 0
          }}
        ></div>

        {/* Foreground Content Layer */}
        <div className="position-relative text-white z-1 d-flex flex-column min-vh-100">
          <Header />

          {/* Main Content grows to push footer down if needed */}
          <main className="flex-grow-1">
            {/* Hero Section */}
            <section className="container text-center my-66" style={{}}>
              <h1 className="display-4 fw-bold text-info">Welcome to Queue Navigator</h1>
              <p className="lead mt-3 col text-primary">
                Manage your queues in real-time, effortlessly and efficiently.
              </p>
              <button className="btn btn-outline-info rounded-pill px-4 mt-4">
                Get Started
              </button>
            </section>

            {/* Info Cards */}
            <section className="container my-5 ">
              <div className="row g-4" style={{marginTop:"21%"}}>
                <div className="col-md-4">
                  <div className="bg-dark bg-opacity-75 p-4 rounded shadow">
                    <h5 className="text-info">Live Updates</h5>
                    <p>Stay informed with real-time queue tracking and instant status updates.</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="bg-dark bg-opacity-75 p-4 rounded shadow">
                    <h5 className="text-info">Smart Management</h5>
                    <p>Optimize your service flow using smart queue handling and predictions.</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="bg-dark bg-opacity-75 p-4 rounded shadow">
                    <h5 className="text-info">User Friendly</h5>
                    <p>Simple and intuitive interface designed for speed and clarity.fast and secure </p>
                  </div>
                </div>
              </div>
            </section>
          </main>

          {/* Sticky Footer */}
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
