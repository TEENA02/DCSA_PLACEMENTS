import React from "react";
import dcsa from "/dcsa.jpeg"; 
import JasleenMam from '/JasleenMam.jpeg'
import AnujSir from '/AnujSir.jpeg'
import tpcTeam from '/tpcTeam.jpeg'


const Home = () => {
  return (
    <div className="container mx-auto p-6">
      <header className="text-center my-8">
        <h1 className="text-4xl font-bold uppercase bg-gradient-to-r from-gray-400 via-blue-500 to-cyan-500 text-transparent bg-clip-text">
          Department of Computer Science and Applications
        </h1>
      </header>

      <section className="my-12 p-6 border border-gray-300 rounded-lg light-shadow flip-effect-container">
        <div className="flex flex-col md:flex-row items-center">
          <img
            src={dcsa}
            alt="Department Image"
            className="w-full md:w-1/2 rounded-lg shadow-md"
          />
          <div className="md:ml-6 mt-4  md:mt-0 text-sm text-justify">
            <p className="mt-6">
              The Computer Culture at the Panjab University dates back to 1966.
              An independent Centre for Computer Science and Applications (now a
              full fledged department) was set-up in 1983. The department aims
              at ingraining the spirit of ingenuity, innovativeness and
              technical competence in the students through rigorous competition
              and regular guidance. The department also caters to the need of
              users in the region and organizes programmes for teaching and
              research communities. The Master of Computer Applications (MCA) (3
              years full time course) was initiated in 1992-1993. Master of
              Computer Applications (3 year full time course) in Self Finance
              mode started in 2008 and Masters of Science (Honors School) under
              the framework of Computer Science was introduced in year 2004.
              Currently the department is running Master of Computer
              Applications (MCA) (2 years full time course). Master of Computer
              Applications (MCA) (2 years full time course) in Self Financed
              mode and Master of Science (Computer Science) under the framework
              of the Hon's School (02 years full time course). Admissions to
              these course are held through an annual entrance test conducted on
              All India basis by Panjab University. In addition, Ph.D. Program
              has been started from year 2005.
            </p>
          </div>
        </div>
      </section>

      <section className="my-12 p-6 border border-gray-300 rounded-lg light-shadow flip-effect-container">
        <h2 className="text-3xl font-semibold text-center">Placement TPOs</h2>
        <div className="flex flex-col md:flex-row items-center justify-center mt-6">
          <div className="flex flex-col items-center md:mr-6">
            <img
              src={JasleenMam}
              alt="TPO 1"
              className="w-48 h-48 rounded-lg shadow-md"
            />
            <div className="mt-4 text-center">
              <h3 className="text-xl font-bold">Dr. Jasleen Kaur Bains</h3>
              <p className="text-md text-gray-600">
                Training & Placement Officer
              </p>
              <p className="mt-2 text-lg text-justify">
              A NOTE FROM TPO: Our focus is to provide students with
                excellent placement opportunities and individual growth. We
                strive to connect with leading companies to ensure promising
                careers for our students.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center md:ml-6 mt-6 md:mt-0">
            <img
              src={AnujSir}
              alt="TPO 2"
              className="w-48 h-48 rounded-lg shadow-md"
            />
            <div className="mt-4 text-center">
              <h3 className="text-xl font-bold">Dr. Anuj Sharma</h3>
              <p className="text-md text-gray-600">
                Training & Placement Officer
              </p>
              <p className="mt-2 text-lg text-justify">
              A NOTE FROM TPO: We are dedicated to preparing students for
                successful careers through workshops, training sessions, and
                recruitment drives. Our mission is to bridge the gap between
                academia and industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="my-12 p-6 border border-gray-300 rounded-lg light-shadow flip-effect-container">
        <h2 className="text-3xl font-semibold text-center">About the TPC Team  2024-2025</h2>
        <div className="flex flex-col md:flex-row items-center mt-6">
          <img 
            src={tpcTeam}
            alt="TPC Team" 
            className="w-full md:w-1/3 rounded-lg shadow-md"
          />
          <div className="md:ml-6 mt-6 md:mt-0">
            <p className="text-lg text-justify">
              The Training and Placement Cell (TPC) team is a group of dedicated professionals and student coordinators who assist in various aspects of student development and placement activities. They organize workshops, training sessions, and campus recruitment drives to help students prepare for their careers.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
