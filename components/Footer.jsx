// // src/components/Footer.js
// import React from 'react';

// const Footer = () => (
//   <footer className="bg-cs-gray text-white py-6 mt-10">
//     <div className="container mx-auto px-4">
//       <div className="flex flex-col md:flex-row justify-between">
//         <div className="mb-4 md:mb-0">
//           <h2 className="text-xl font-bold">DCSA Department</h2>
//           <p>Email: <a href="mailto:dcsa@example.com" className="text-cs-blue">dcsa@example.com</a></p>
//           <p>Contact Number: <a href="tel:+1234567890" className="text-cs-blue">+1234567890</a></p>
//           <p>Chairperson: Mr.Anuj Sharma</p>
//         </div>
//         <div className="mb-4 md:mb-0">
//           <h2 className="text-xl font-bold">TPC Team</h2>
//           <p>Student Coordinator:Vaibhav Sharma</p>
//           <p>Email: <a href="mailto:teena@example.com" className="text-cs-blue">teena@example.com</a></p>
//         </div>
//         <div>
//           <h2 className="text-xl font-bold">Contact Officials</h2>
//           <p>Email: <a href="mailto:official@example.com" className="text-cs-blue">official@example.com</a></p>
//         </div>
//       </div>
//       <div className="text-center mt-6">
//         <p>&copy; 2024 DCSA Department. All rights reserved.</p>
//       </div>
//     </div>
//   </footer>
// );

// export default Footer;
import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../public/logo.jpg'
export default function Footer() {
    return (
        <footer className="bg-cyan-950 border-y">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <Link to="/" className="flex items-center">
                            <img
                                src={logo}
                           className="mr-3 h-14 w-14 rounded-full"
                                alt="Logo"
                            />
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-200 uppercase">Resources</h2>
                            <ul className="text-gray-100 font-medium">
                                <li className="mb-4">
                                    <Link to="/home" className="hover:underline">
                                        Home
                                    </Link>
                                </li>
                    
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-200 uppercase">Follow us</h2>
                            <ul className="text-gray-100 font-medium">
                                <li className="mb-4">
                                    <a
                                        href="https://www.linkedin.com/in/dcsapu/"
                                        className="hover:underline"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Linkedin
                                    </a>
                                </li>
                                <li className="mb-4">
                                    <a
                                        href="https://www.facebook.com/groups/PU.DCSA"
                                        className="hover:underline"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                       Facebook
                                    </a>
                                </li>
                                <li className="mb-4">
                                    <a
                                        href="https://www.instagram.com/dcsa.puofficial/?igsh=MTh4NDhhcG9pdng1Ng%3D%3D"
                                        className="hover:underline"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                   Instagram
                                    </a>
                                </li>
                               
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-200 uppercase">Contact us</h2>
                            <ul className="text-gray-100 font-medium">
                                <li className="mb-4">
                                    <Link to="#" className="hover:underline">
                                        Email:dcsaplacements@pu.ac.in
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className="hover:underline">
                                        +91 8847214336
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-100 sm:text-center">
                        © 2025
                        <a href="https://dcsa.puchd.ac.in/" className="hover:underline">
                            dcsa
                        </a>
                        . All Rights Reserved.
                    </span>
                    
                </div>
            </div>
        </footer>
    );
}

