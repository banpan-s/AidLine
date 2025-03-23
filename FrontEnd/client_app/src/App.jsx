import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import "./css/Custom_style.css"; // Corrected path for the CSS file

function App() {
  return (
    <>
      <div className="main" style={{ minHeight: "100vh", marginTop:"auto" }}>
        {" "}
        {/* Added minHeight */}
        <Header />
        <h1 style={{ textAlign: "center" }}>Home page</h1>
        <div className="bg">.</div>
        <Footer />
      </div>
    </>
  );
}

export default App;
