import React from "react";
import { Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJs,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { Data_24, student, company } from "../Data/Data_24";
ChartJs.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);
import josh from '../public/josh.jpg';
import edifecs from '../public/edifecs.jpg';
import c3 from '/c3.png';
import c8 from '/c8.png';
import c7 from '/c7.png';
import c4 from '/c4.jpg';
import c5 from '/c5.jpg';
import c6 from '/c6.jpg';
import c9 from '/c9.jpg';
import c10 from '/c10.png';
import c12 from '/c12.png';
import c13 from '/c13.png';
import c16 from '/c16.png';
import c18 from '/c18.png';
import c11 from '/c11.jpg';
import c14 from '/c14.jpg';
import c15 from '/c15.jpg';
import c17 from '/c17.jpg';

function Placement_23() {
  const options = {
    maintainAspectRatio: false, // Disable the maintain aspect ratio option
  };
  return (
    <div className="py-16 container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
    <header className="mb-8">
      <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
        Placement Reports 2024
      </h2>
      <p className="mt-6 text-gray-600">
        Keeping the students well prepared for what they are likely to face in
        the corporate world is the responsibility of every academic institute.
        Students undergo challenging coursework and are exposed to
        research-based projects, along with a host of sports, cultural and
        organizational activities on the vibrant Panjab University campus.
        Through the placement cell, students at DCSA secure internships in
        top-rated companies and universities, not only preparing them for
        higher studies and/or industry jobs but also often resulting in
        pre-placement offers.
      </p>
    </header>

    <section className="flex flex-col md:flex-row justify-between items-center md:items-start mt-2">
      <div style={{ width: "100%", maxWidth: "600px", height: "400px" }} className="mb-6 md:mb-0">
        <Bar options={options} data={Data_24} />
      </div>
      <div style={{ width: "100%", maxWidth: "400px", height: "400px" }}>
        <Pie options={options} data={student} />
      </div>
    </section>

    <section className="mt-10">
      <h4 className="text-2xl text-gray-900 font-bold md:text-3xl">
        Total Companies Visited: 27
      </h4>
      <p className="mt-4 text-gray-600">
        We are thrilled to announce that 27 companies visited our DCSA
        department for placements, offering excellent opportunities including
        internships and PPOs to our outstanding students. Below are some of
        the recruiters along with the students they placed:
      </p>
      <div style={{ height: "400px", marginTop: "2rem" }}>
        <Bar options={options} data={company} />
      </div>
    </section>

    <section className="mt-10">
      <h4 className="text-2xl text-gray-900 font-bold md:text-3xl mb-6">
        Our Top Recruiters
      </h4>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
      
      <div className="p-4 bg-gray-100 rounded-lg shadow-sm flex items-center justify-center w-32 h-32">
    <img src={josh} alt="Company 1" className="w-full h-full object-contain" />
  </div>
         <div className="p-4 bg-gray-100 rounded-lg shadow-sm flex items-center justify-center w-32 h-32">
          <img src={edifecs} alt="Company 1" className="max-w-full h-auto" />
        </div>
         <div className="p-4 bg-gray-100 rounded-lg shadow-sm flex items-center justify-center w-32 h-32">
          <img src={c3} alt="Company 1" className="max-w-full h-auto" />
        </div>
         <div className="p-4 bg-gray-100 rounded-lg shadow-sm flex items-center justify-center w-32 h-32">
          <img src={c4} alt="Company 1" className="max-w-full h-auto" />
        </div>
         <div className="p-4 bg-gray-100 rounded-lg shadow-sm flex items-center justify-center w-32 h-32">
          <img src={c5} alt="Company 1" className="max-w-full h-auto" />
        </div>
         <div className="p-4 bg-gray-100 rounded-lg shadow-sm flex items-center justify-center w-32 h-32">
          <img src={c6} alt="Company 1" className="max-w-full h-auto" />
        </div>
         <div className="p-4 bg-gray-100 rounded-lg shadow-sm flex items-center justify-center w-32 h-32">
          <img src={c7} alt="Company 1" className="max-w-full h-auto" />
        </div>
         <div className="p-4 bg-gray-100 rounded-lg shadow-sm flex items-center justify-center w-32 h-32">
          <img src={c8} alt="Company 1" className="max-w-full h-auto" />
        </div>
        <div className="p-4 bg-gray-100 rounded-lg shadow-sm flex items-center justify-center w-32 h-32">
          <img src={c9} alt="Company 1" className="max-w-full h-auto" />
        </div>
        <div className="p-4 bg-gray-100 rounded-lg shadow-sm flex items-center justify-center w-32 h-32">
          <img src={c10} alt="Company 1" className="max-w-full h-auto" />
        </div>
        <div className="p-4 bg-gray-100 rounded-lg shadow-sm flex items-center justify-center w-32 h-32">
          <img src={c11} alt="Company 1" className="max-w-full h-auto" />
        </div>
        <div className="p-4 bg-gray-100 rounded-lg shadow-sm flex items-center justify-center w-32 h-32">
          <img src={c12} alt="Company 1" className="max-w-full h-auto" />
        </div>
        <div className="p-4 bg-gray-100 rounded-lg shadow-sm flex items-center justify-center w-32 h-32">
          <img src={c13} alt="Company 1" className="max-w-full h-auto" />
        </div>
        <div className="p-4 bg-gray-100 rounded-lg shadow-sm flex items-center justify-center w-32 h-32">
          <img src={c14} alt="Company 1" className="max-w-full h-auto" />
        </div>
        <div className="p-4 bg-gray-100 rounded-lg shadow-sm flex items-center justify-center w-32 h-32">
          <img src={c15} alt="Company 1" className="max-w-full h-auto" />
        </div>
        <div className="p-4 bg-gray-100 rounded-lg shadow-sm flex items-center justify-center w-32 h-32">
          <img src={c16} alt="Company 1" className="max-w-full h-auto" />
        </div>
        <div className="p-4 bg-gray-100 rounded-lg shadow-sm flex items-center justify-center w-32 h-32">
          <img src={c17} alt="Company 1" className="max-w-full h-auto" />
        </div>
        <div className="p-4 bg-gray-100 rounded-lg shadow-sm flex items-center justify-center w-32 h-32">
          <img src={c18} alt="Company 1" className="max-w-full h-auto" />
        </div>
      </div>
    </section>
  </div>
);

}

export default Placement_23;
