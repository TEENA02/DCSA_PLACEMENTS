// src/components/Header.js
import React ,{useState}from "react";
import { Link ,NavLink} from "react-router-dom";
import logo from '/logo.jpg'
// const Header = () => (
//   <header className="shadow sticky z-50 top-0">
//     <nav className="bg-cyan-950 border-gray-200 px-4 lg:px-6 py-2.5">
//       <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
//         <Link to="/" className="flex items-center text-gray-100 font-medium">
//           <img src={logo} className="mr-3 h-14 w-14 rounded-full" alt="logo" />
//           <span>DCSA_PLACEMENTS</span>
//         </Link>
       
//         <div
//           className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
//           id="mobile-menu-2"
//         >
//           <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
//             <li>
//               <NavLink
//                 to="/home"
//                 className={({ isActive }) =>
//                   `block py-2 pr-4 pl-3 duration-200 border-b 
//                                           ${
//                                             isActive
//                                               ? "text-orange-700"
//                                               : "text-gray-100"
//                                           }
//                                           border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
//                 }
//               >
//                 Home
//               </NavLink>
//             </li>
//             <li>
//               <NavLink
//                 to="/placement_23"
//                 className={({ isActive }) =>
//                   `block py-2 pr-4 pl-3 duration-200 border-b 
//                                           ${
//                                             isActive
//                                               ? "text-orange-700"
//                                               : "text-gray-100"
//                                           }
//                                           border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
//                 }
//               >
//                 Placement-2023
//               </NavLink>
//             </li>
//             <li>
//               <NavLink
//                 to="/placement_24"
//                 className={({ isActive }) =>
//                   `block py-2 pr-4 pl-3 duration-200 border-b 
//                                           ${
//                                             isActive
//                                               ? "text-orange-700"
//                                               : "text-gray-100"
//                                           }
//                                           border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
//                 }
//               >
//                 Placement-2024
//               </NavLink>
//             </li>
//             <li>
//               <NavLink
//                 to="/placement_25"
//                 className={({ isActive }) =>
//                   `block py-2 pr-4 pl-3 duration-200 border-b 
//                                           ${
//                                             isActive
//                                               ? "text-orange-700"
//                                               : "text-gray-100"
//                                           }
//                                           border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
//                 }
//               >
//                 Placement-2025
//               </NavLink>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   </header>
// );

// export default Header;
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-cyan-950 border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center text-gray-100 font-medium">
            <img src={logo} className="mr-3 h-14 w-14 rounded-full" alt="logo" />
            <span>DCSA_PLACEMENTS</span>
          </Link>

          {/* Toggle button for mobile */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-gray-100"
            aria-label="Toggle menu"
          >
            ☰
          </button>

          {/* Mobile menu */}
          <div
            className={`lg:flex lg:w-auto lg:order-1 ${isMenuOpen ? "block" : "hidden"}`}
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to="/home"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b ${
                      isActive ? "text-orange-700" : "text-gray-100"
                    } border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/placement_23"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b ${
                      isActive ? "text-orange-700" : "text-gray-100"
                    } border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Placement-2023
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/placement_24"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b ${
                      isActive ? "text-orange-700" : "text-gray-100"
                    } border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Placement-2024
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/placement_25"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b ${
                      isActive ? "text-orange-700" : "text-gray-100"
                    } border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Placement-2025
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Header;