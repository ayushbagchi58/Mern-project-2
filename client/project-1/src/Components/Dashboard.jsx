// import React from "react";
// import { Line, Doughnut } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   LineElement,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   ArcElement,
//   Tooltip,
//   Legend,
// } from "chart.js";
// import { FaDownload } from "react-icons/fa";

// ChartJS.register(
//   LineElement,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   ArcElement,
//   Tooltip,
//   Legend
// );

// export default function Dashboard() {
//   // Line Chart Data (Earnings Overview)
//   const lineData = {
//     labels: ["Jan", "Mar", "May", "Jul", "Sep", "Nov"],
//     datasets: [
//       {
//         label: "Earnings",
//         data: [0, 10000, 5000, 20000, 15000, 40000],
//         borderColor: "#4e73df",
//         backgroundColor: "rgba(78, 115, 223, 0.1)",
//         tension: 0.3,
//         fill: true,
//         pointBackgroundColor: "#4e73df",
//       },
//     ],
//   };

//   const lineOptions = {
//     responsive: true,
//     plugins: { legend: { display: false } },
//     scales: {
//       y: { beginAtZero: true, ticks: { callback: (val) => `$${val}` } },
//     },
//   };

//   // Doughnut Chart Data (Revenue Sources)
//   const doughnutData = {
//     labels: ["Direct", "Social", "Referral"],
//     datasets: [
//       {
//         data: [55, 30, 15],
//         backgroundColor: ["#4e73df", "#1cc88a", "#36b9cc"],
//         hoverBackgroundColor: ["#2e59d9", "#17a673", "#2c9faf"],
//         hoverBorderColor: "rgba(234, 236, 244, 1)",
//       },
//     ],
//   };

//   const doughnutOptions = {
//     cutout: "70%",
//     plugins: { legend: { position: "bottom" } },
//   };

//   return (
//     <div className="flex flex-col gap-6">
//       {/* Dashboard Header */}
//       <div className="flex items-center justify-between mb-4">
//         <h1 className="text-2xl font-semibold text-gray-700">Dashboard</h1>
//         <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded shadow">
//           <FaDownload />
//           <span>Generate Report</span>
//         </button>
//       </div>

//       {/* Earnings Summary Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
//         <div className="bg-white shadow rounded-lg p-4 border-l-4 border-blue-500">
//           <div className="text-xs font-bold text-blue-500 uppercase mb-1">
//             Earnings (Monthly)
//           </div>
//           <div className="text-gray-800 text-xl font-semibold">$40,000</div>
//         </div>

//         <div className="bg-white shadow rounded-lg p-4 border-l-4 border-green-500">
//           <div className="text-xs font-bold text-green-500 uppercase mb-1">
//             Earnings (Annual)
//           </div>
//           <div className="text-gray-800 text-xl font-semibold">$215,000</div>
//         </div>

//         <div className="bg-white shadow rounded-lg p-4 border-l-4 border-cyan-500">
//           <div className="text-xs font-bold text-cyan-500 uppercase mb-1">
//             Tasks
//           </div>
//           <div className="flex items-center justify-between">
//             <span className="text-gray-800 font-semibold">50%</span>
//             <div className="w-2/3 bg-gray-200 h-2 rounded-full">
//               <div className="bg-cyan-500 h-2 rounded-full w-1/2"></div>
//             </div>
//           </div>
//         </div>

//         <div className="bg-white shadow rounded-lg p-4 border-l-4 border-yellow-500">
//           <div className="text-xs font-bold text-yellow-500 uppercase mb-1">
//             Pending Requests
//           </div>
//           <div className="text-gray-800 text-xl font-semibold">18</div>
//         </div>
//       </div>

//       {/* Charts Section */}
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//         <div className="bg-white p-4 shadow rounded-lg lg:col-span-2">
//           <h2 className="text-sm font-bold text-blue-600 mb-4">
//             Earnings Overview
//           </h2>
//           <Line data={lineData} options={lineOptions} />
//         </div>

//         <div className="bg-white p-4 shadow rounded-lg flex flex-col items-center">
//           <h2 className="text-sm font-bold text-blue-600 mb-4">
//             Revenue Sources
//           </h2>
//           <div className="w-56">
//             <Doughnut data={doughnutData} options={doughnutOptions} />
//           </div>
//         </div>
//       </div>

//       {/* Projects + Illustrations */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//         <div className="bg-white p-4 shadow rounded-lg">
//           <h2 className="text-sm font-bold text-blue-600 mb-4">Projects</h2>

//           {[
//             { name: "Server Migration", percent: 20, color: "bg-red-500" },
//             { name: "Sales Tracking", percent: 40, color: "bg-yellow-400" },
//             { name: "Customer Database", percent: 60, color: "bg-blue-500" },
//             { name: "Payout Details", percent: 80, color: "bg-teal-500" },
//             { name: "Account Setup", percent: 100, color: "bg-green-500" },
//           ].map((p, i) => (
//             <div key={i} className="mb-4">
//               <div className="text-xs font-semibold text-gray-600 mb-1">
//                 {p.name}{" "}
//                 <span className="float-right">
//                   {p.percent === 100 ? "Complete!" : `${p.percent}%`}
//                 </span>
//               </div>
//               <div className="w-full bg-gray-200 h-2 rounded-full">
//                 <div
//                   className={`${p.color} h-2 rounded-full`}
//                   style={{ width: `${p.percent}%` }}
//                 ></div>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="bg-white p-4 shadow rounded-lg flex flex-col items-center justify-center text-center">
//           <h2 className="text-sm font-bold text-blue-600 mb-4">
//             Illustrations
//           </h2>
//           <img
//             src="/Images/undraw_posting.svg"
//             alt="illustration"
//             className="w-40 mb-4"
//           />
//           <p className="text-sm text-gray-600 mb-3">
//             Add some quality, SVG illustrations to your project courtesy of{" "}
//             <a
//               href="https://undraw.co/"
//               target="_blank"
//               rel="noreferrer"
//               className="text-blue-500 underline"
//             >
//               unDraw
//             </a>
//             , a constantly updated collection of beautiful SVG images that you
//             can use completely free and without attribution!
//           </p>
//           <a
//             href="https://undraw.co/"
//             target="_blank"
//             rel="noreferrer"
//             className="text-blue-500 hover:text-blue-700 text-sm font-medium"
//           >
//             Browse Illustrations on unDraw →
//           </a>
//         </div>
//       </div>

//       {/* Color Cards + Development Approach */}
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//         {/* Color Palette Cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:col-span-2">
//           {[
//             { name: "Primary", color: "#4e73df" },
//             { name: "Success", color: "#1cc88a" },
//             { name: "Info", color: "#36b9cc" },
//             { name: "Warning", color: "#f6c23e" },
//             { name: "Danger", color: "#e74a3b" },
//             { name: "Secondary", color: "#858796" },
//             { name: "Light", color: "#f8f9fc", text: "text-gray-700" },
//             { name: "Dark", color: "#5a5c69" },
//           ].map((c, i) => (
//             <div
//               key={i}
//               className="rounded-lg shadow p-4 text-white"
//               style={{ backgroundColor: c.color }}
//             >
//               <h3 className={`font-semibold mb-1 ${c.text || ""}`}>
//                 {c.name}
//               </h3>
//               <p className={`text-sm opacity-90 ${c.text || ""}`}>
//                 {c.color}
//               </p>
//             </div>
//           ))}
//         </div>

//         {/* Development Approach */}
//         <div className="bg-white shadow rounded-lg p-5">
//           <h3 className="text-blue-600 font-bold mb-2">
//             Development Approach
//           </h3>
//           <p className="text-sm text-gray-700 leading-relaxed mb-2">
//             SB Admin 2 makes extensive use of Bootstrap 4 utility classes in
//             order to reduce CSS bloat and poor page performance. Custom CSS
//             classes are used to create custom components and custom utility
//             classes.
//           </p>
//           <p className="text-sm text-gray-700 leading-relaxed">
//             Before working with this theme, you should become familiar with the
//             Bootstrap framework, especially the utility classes.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }
