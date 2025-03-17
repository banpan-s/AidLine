import Header from "./components/common/Header";
import './css/Custom_style.css'; // Corrected path for the CSS file
import Footer from './components/common/Footer';

function App() {
  return (
    <div className="main" style={{ minHeight: '100vh' }}> {/* Added minHeight */}
        <Header/>
        <h1 style={{textAlign:"center"}}>Home page</h1>
         
        <Footer/>
        
    </div>
  )
}

export default App;
