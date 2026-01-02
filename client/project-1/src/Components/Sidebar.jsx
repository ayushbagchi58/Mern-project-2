// import React, { useState } from "react";
// import {
//   FaTachometerAlt,
//   FaCog,
//   FaWrench,
//   FaFolder,
//   FaChartArea,
//   FaTable,
//   FaRocket,
//   FaAngleLeft,
//   FaAngleRight,
// } from "react-icons/fa";

// export default function Sidebar({ onSelect }) {
//   const [collapsed, setCollapsed] = useState(false);

//   return (
//     <div
//       className={`bg-blue-600 text-white h-screen flex flex-col justify-between transition-all duration-300 ${
//         collapsed ? "w-20" : "w-64"
//       }`}
//     >
//       <div>
//         <div
//           className="p-4 font-semibold text-lg flex items-center gap-3 cursor-pointer hover:bg-blue-500"
//           onClick={() => onSelect("Dashboard")}
//         >
//           <FaTachometerAlt className="text-white text-xl" />
//           {!collapsed && <span>Dashboard</span>}
//         </div>

//         <hr className="border-blue-500 my-2" />

//         <div className="uppercase text-blue-200 text-xs font-semibold px-4 mb-2">
//           {!collapsed && "Interface"}
//         </div>
//         <div className="flex flex-col gap-2">
//           <button className="flex items-center gap-3 px-4 py-2 hover:bg-blue-500 transition">
//             <FaCog />
//             {!collapsed && <span>Components</span>}
//           </button>
//           <button className="flex items-center gap-3 px-4 py-2 hover:bg-blue-500 transition">
//             <FaWrench />
//             {!collapsed && <span>Utilities</span>}
//           </button>
//         </div>

//         <hr className="border-blue-500 my-2" />

//         <div className="uppercase text-blue-200 text-xs font-semibold px-4 mb-2">
//           {!collapsed && "Addons"}
//         </div>
//         <div className="flex flex-col gap-2">
//           <button className="flex items-center gap-3 px-4 py-2 hover:bg-blue-500 transition">
//             <FaFolder />
//             {!collapsed && <span>Pages</span>}
//           </button>
//           <button className="flex items-center gap-3 px-4 py-2 hover:bg-blue-500 transition">
//             <FaChartArea />
//             {!collapsed && <span>Charts</span>}
//           </button>
//           <button className="flex items-center gap-3 px-4 py-2 hover:bg-blue-500 transition">
//             <FaTable />
//             {!collapsed && <span>Tables</span>}
//           </button>
//         </div>
//       </div>

//       <div className="relative">
//         <div className="border-t border-blue-500 mx-2"></div>
//         <button
//           onClick={() => setCollapsed(!collapsed)}
//           className="absolute -top-3 left-1/2 mt-4 transform -translate-x-1/2 bg-blue-500 p-2 rounded-full text-white hover:bg-blue-400 transition"
//         >
//           {collapsed ? <FaAngleRight /> : <FaAngleLeft />}
//         </button>

//         <div className="bg-blue-500 m-4 p-4 mt-2 rounded-lg text-center">
//           <div className="flex justify-center mb-2 mt-4">
//             <FaRocket className="text-2xl" />
//           </div>
//           {!collapsed && (
//             <>
//               <p className="text-sm mb-2">
//                 SB Admin Pro is packed with premium features, components, and more!
//               </p>
//               <button className="bg-green-500 hover:bg-green-400 text-white px-3 py-1 rounded text-sm">
//                 Upgrade to Pro!
//               </button>
//             </>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }
