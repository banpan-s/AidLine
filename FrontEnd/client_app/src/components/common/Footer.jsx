// import '../../css/Custom_style.css'


// const Footer = () => {
//     return(
//         <>
//         <footer className='box'>
//             <h2></h2>
//             <h3>Created by Bheem</h3>
//             <p>Copyright 2022</p>
//         </footer>
//         </>
//     )
// }
// export default Footer




const Footer = () => {
    return (
      <footer className="w-full bg-gray-800 text-white py-4 mt-auto ">
        <div className="container mx-auto text-center text-sm">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </div>
      </footer>
    );
  };
  
  export default Footer;
  