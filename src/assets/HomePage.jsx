// src/assets/HomePage.jsx
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FreelanceContext } from "./FreelanceContext";
import IRFO from "./IRFO.mp4";
import { motion } from 'framer-motion';
import leaderboard from "./leaderboard.svg";
import JoinPage from "./JoinPage";


export default function HomePage() {
  const { tasks } = useContext(FreelanceContext);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen animated-background bg-gradient-to-r from-black via-blue-900 to-blue-800 flex flex-col">
      {/* Top Navbar */}
      {/* Top Navbar */}
{/* Top Navbar */}
<nav className="navbar bg-black shadow-sm px-4 md:px-8 sticky top-0 z-50">
  <div className="flex items-center gap-2 flex-1">
    <span className="text-info text-2xl font-semibold">
      Collaborate. Innovate. Earn.
    </span>
  </div>

  {/* Desktop Menu */}
  <div className="hidden md:flex gap-6 px-6 items-center">
    <button className="btn btn-info no-underline">
      <span className="no-underline">Home</span>
    </button>
    <button className="btn btn-outline no-underline btn-info">
      <Link to="/research" className="no-underline">Research</Link>
    </button>
    <button className="btn btn-outline no-underline btn-info">
      <Link to="/freelance" className="no-underline">Freelance</Link>
    </button>
    <button className="btn btn-outline no-underline btn-info">
      <Link to="/ideas" className="no-underline">Ideas</Link>
    </button>
    <button className="btn btn-outline no-underline btn-info">
      <Link to="/leaderboard" className="no-underline">Leaderboard</Link>
    </button>

    {/* Single Join Button */}
    <Link to="/join" className="btn btn-warning text-black font-semibold no-underline">
      Join
    </Link>
  </div>

  {/* Mobile Menu Toggle */}
  <div className="flex items-center gap-2 md:hidden">
    <input
      type="text"
      placeholder="Search in site"
      className="input bg-black input-bordered input-sm w-32"
    />
    <button
      className="btn btn-ghost btn-circle"
      onClick={() => setMobileMenuOpen((open) => !open)}
    >
      <svg width="24" height="24" fill="none" className="inline-block">
        <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" />
      </svg>
    </button>
  </div>
</nav>

{/* Mobile Menu */}
{mobileMenuOpen && (
  <>
    <div
      className="fixed inset-0 z-40 bg-transparent"
      onClick={() => setMobileMenuOpen(false)}
    />
    <div
      className="fixed top-16 right-2 z-50"
      style={{ background: "transparent" }}
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flex flex-col items-end gap-2">
        <Link to="/" className="btn btn-info btn-sm" onClick={() => setMobileMenuOpen(false)}>Home</Link>
        <Link to="/research" className="btn btn-outline btn-info btn-sm" onClick={() => setMobileMenuOpen(false)}>Research</Link>
        <Link to="/freelance" className="btn btn-outline btn-info btn-sm" onClick={() => setMobileMenuOpen(false)}>Freelance</Link>
        <Link to="/ideas" className="btn btn-outline btn-info btn-sm" onClick={() => setMobileMenuOpen(false)}>Ideas</Link>
        <Link to="/leaderboard" className="btn btn-outline btn-info btn-sm" onClick={() => setMobileMenuOpen(false)}>Leaderboard</Link>

        {/* Mobile Join Button */}
        <Link to="/join" className="btn btn-warning btn-sm text-black font-semibold" onClick={() => setMobileMenuOpen(false)}>Join</Link>
      </div>
    </div>
  </>
)}



      {/* Hero Section */}

<div className="relative h-screen w-full overflow-hidden">
  {/* 🎥 Video Background Layer */}
  <video
    className="absolute top-0 left-0 w-full h-full object-cover z-0"
    autoPlay
    muted
    loop
    playsInline
  >
    <source src={IRFO} type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  {/* 🔲 Optional Overlay */}


  {/* 🌟 Content Section Above Video */}
  <section className="relative z-20 w-full text-white py-16 my-37 flex flex-col items-center justify-center h-full px-4 text-center">

  <div className="mb-2 text-blue-400 text-lg">A platform for students to collaborate and innovate.</div>

  <div className=" flex flex-wrap gap-2 justify-center mt-1 w-full">
    <button className="btn btn-outline btn-success w-full sm:w-auto">Learn More</button>
    <button className="btn btn-neutral w-full sm:w-auto">Get Started</button>

    <Link to="/student" className="btn btn-outline no-underline btn-info w-full sm:w-auto">Student Dashboard</Link>
    <Link to="/teacher" className="btn btn-outline no-underline btn-info w-full sm:w-auto">Teacher Dashboard</Link>
    <Link to="/faculty" className="btn btn-outline no-underline btn-info w-full sm:w-auto">Faculty Dashboard</Link>
    <Link to="/admin" className="btn btn-outline no-underline btn-info w-full sm:w-auto">Admin Dashboard</Link>
  </div>
</section>

</div>


     
     {/* Freelance Slider */}
      <section className="py-10 px-4">
        <h2 className="text-2xl text-info font-bold mb-4 text-center">🔥 Latest Freelance Tasks</h2>
        <div className="flex p-6 overflow-x-auto gap-8 pb-4 no-scrollbar">
          {tasks.slice(0, 10).map((task) => (
            <div key={task.id} className="bg-gradient-to-tl from-black via-black-500 to-violet-5 transform rounded-xl shadow-xl transition duration-300 hover:scale-105 card bg-base-200 p-6 min-w-[280px] max-w-[280px] bg-base-200 p-4 rounded-lg shadow-md shrink-0">
              <h3 className="text-lg rounded-lg  text-info font-bold">{task.title}</h3>
              <p className="text-sm text-info">{task.category} • {task.level}</p>
              <p className="text-sm my-2 text-info">Deadline: {task.deadline}</p>
              <span className="badge badge-accent mb-2">{task.budget}৳</span>
              <button className="btn btn-info btn-sm btn-outline w-full mt-2">Apply</button>
            </div>
          ))}
        </div>
      </section>

      {/* Explore Categories */}
      <section className="py-12">
  <div className="container mx-auto px-4">
    <h2 className="text-info text-3xl font-bold mb-8 text-center">Explore Categories</h2>
    <div className="flex flex-col md:flex-row gap-3 justify-center items-center">
      <div className="flex flex-col gap-3 items-center w-full md:w-auto">
        <div className="bg-gradient-to-tl from-black via-black-500 to-violet-5 rounded-lg p-2 gap-2 flex flex-col items-center w-full md:w-80 h-60">
          <div className="w-36 h-16 rounded-full flex items-center justify-center text-7xl mb-6">🏆</div>
          <button className="btn btn-outline no-underline btn btn-soft btn-warning">
            <Link to="/research" className="no-underline">
              Research
            </Link>
          </button>
          <div className="text-warning text-sm">Ongoing Projects</div>
          <div className="mt-2 text-xs text-warning">Start Exploring</div>
        </div>
        <div className="bg-gradient-to-tl from-black via-black-500 to-violet-5 rounded-lg p-6 gap-2 flex flex-col items-center w-full md:w-80 h-56">
          <div className="w-36 h-16 rounded-full flex items-center justify-center text-7xl mb-6">🧠</div>
          <button className="btn btn-outline no-underline btn-soft btn-warning">
            <Link to="/ideas" className="no-underline">
              Ideas
            </Link>
          </button>
          <div className="text-warning text-sm">Submit Your Ideas</div>
          <div className="mt-2 text-xs text-warning">Get Involved</div>
        </div>
      </div>
      <div className="flex flex-col gap-3 items-center w-full md:w-auto">
        <div className="bg-gradient-to-tl from-black via-black-500 to-violet-5 rounded-lg gap-2 p-6 flex flex-col items-center w-full md:w-80 h-56">
          <div className="w-36 h-16 rounded-full flex items-center justify-center text-7xl mb-6">💼</div>
          <button className="btn btn-outline no-underline btn-warning btn-soft">
            <Link to="/freelance" className="no-underline">
              Freelance
            </Link>
          </button>
          <div className="text-warning text-sm">Tasks Available</div>
          <div className="mt-2 text-xs text-warning">Join Now</div>
        </div>
        <div className="bg-gradient-to-tl from-black via-black-500 to-violet-5 rounded-lg gap-2 p-6 flex flex-col items-center w-full md:w-80 h-56">
          <div className="w-36 h-16 rounded-full flex images-center images-center text-8xl mb-5">
            <img src={leaderboard} alt="Leaderboard Icon" className="w-full h-25 object-contain" />
          </div>
          <button className="btn btn-outline mt-2 no-underline btn-soft btn-warning">
            <Link to="/leaderboard" className="no-underline">
              Leaderboard
            </Link>
          </button>
          <div className="text-warning text-sm">Top Performers</div>
          <div className="mt-2 text-xs text-warning">View Now</div>
        </div>
      </div>
    </div>
  </div>
</section>

     {/* Latest Highlights */}
<section className="py-12">
  <div className="container mx-auto px-4">
    <h2 className="text-info text-3xl font-bold mb-8 text-center">Latest Highlights</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Top Researchers */}
      <div className="bg-gradient-to-tl from-black via-black-500 to-violet-5 rounded-lg p-6 gap-2 flex flex-col items-center">
        <div className="w-36 h-16 rounded-full flex items-center justify-center text-7xl mb-6">🏆</div>
        <button className="btn btn-outline no-underline btn-soft btn-warning">
          <Link to="/rankings" className="no-underline">
            Top Researchers
          </Link>
        </button>
        <div className="text-warning text-sm">Meet the Best in Research</div>
        <div className="mt-2 text-xs text-warning">See Rankings</div>
      </div>

      {/* Freelance Tasks */}
      <div className="bg-gradient-to-tl from-black via-black-500 to-violet-5 rounded-lg p-6 gap-2 flex flex-col items-center">
        <div className="w-36 h-16 rounded-full flex items-center justify-center text-7xl mb-6">💼</div>
        <button className="btn btn-outline no-underline btn-soft btn-warning">
          <Link to="/tasks" className="no-underline">
            Freelance Tasks
          </Link>
        </button>
        <div className="text-warning text-sm">Latest Task Listings</div>
        <div className="mt-2 text-xs text-warning">Browse Tasks</div>
      </div>

      {/* Trending Ideas */}
      <div className="bg-gradient-to-tl from-black via-black-500 to-violet-5 rounded-lg p-6 gap-2 flex flex-col items-center">
        <div className="w-36 h-16 rounded-full flex items-center justify-center text-7xl mb-6">🧠</div>
        <button className="btn btn-outline no-underline btn-soft btn-warning">
          <Link to="/ideas" className="no-underline">
            Trending Ideas
          </Link>
        </button>
        <div className="text-warning text-sm">Innovative Concepts</div>
        <div className="mt-2 text-xs text-warning">See Ideas</div>
      </div>
    </div>
  </div>
</section>



      {/* Community Contributions */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-info text-3xl font-bold mb-8 text-center">Community Contributions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-tl from-black via-black-500 to-violet-5 rounded-lg p-6 flex flex-col items-center">
              <div className="w-full h-32 text-2xl font-bold text-green-400 mb-4 flex items-center justify-center">Research Update</div>
              <div className="text-sm text-sky-300 mb-2">Just submitted my research paper on AI innovations!</div>
              <div className="flex gap-2 mb-2">
                <span className="badge bg-info text-black badge-outline badge-sm">Innovation</span>
                <span className="badge bg-info text-black badge-outline badge-sm">AI</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <div className="avatar">
                  <div className="w-6 h-6 rounded-full bg-base-300" />
                </div>
                Labib
              </div>
            </div>
            <div className="bg-gradient-to-tl from-black via-black-500 to-violet-5 rounded-lg p-6 flex flex-col items-center">
              <div className="w-full h-32 text-2xl font-bold text-green-400 mb-4 flex items-center justify-center">Freelance Task Completed</div>
              <div className="text-sm text-sky-300  mb-2">Finished a great freelance project on web development.</div>
              <div className="flex gap-2 mb-2">
                <span className="badge bg-info text-black badge-outline badge-sm">Freelance</span>
                <span className="badge bg-info text-black badge-outline badge-sm">Web Development</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <div className="avatar">
                  <div className="w-6 h-6 rounded-full bg-base-300" />
                </div>
                Maruf
              </div>
            </div>
          </div>
        </div>
      </section>

     {/* Water Wave Animation */}
<div className="relative">


  {/* Footer */}

  <footer className="relative w-full top-30 h-[120px] px-8 py-4 flex flex-col items-center justify-center"
   style={{ backgroundColor: "#00bafe" }}>
    
    {/* Waves */}
    <div className="absolute left-0 top-[-70px] w-full h-[100px] pointer-events-none">
  <div
    className="absolute w-full h-full opacity-95 z-[1000] animate-[wave1_3s_linear_infinite]"
    style={{
      backgroundImage: 'url("./ss.png")',
      backgroundSize: "1000px 100px",
      backgroundRepeat: "repeat-x",
      backgroundPosition: "0 0",
      bottom: -5,
    }}
  />
   <div
    className="absolute w-full h-full opacity-20 z-[500] animate-[wave1_5s_linear_infinite]"
    style={{
      backgroundImage: 'url("./ss.png")',
      backgroundSize: "1000px 100px",
      backgroundRepeat: "repeat-x",
      backgroundPosition: "0 0",
      bottom: 10,
    }}
  />
   <div
    className="relative w-full h-full opacity-40 z-[999] animate-[wave2_4s_linear_infinite]"
    style={{
      backgroundImage: 'url("./ss.png")',
      backgroundSize: "1000px 100px",
      backgroundRepeat: "repeat-x",
      backgroundPosition: "0 0",
      bottom: 0,
    }}
  />
   <div
    className="absolute w-full h-full opacity-30 z-[700] animate-[wave1_4s_linear_infinite]"
    style={{
      backgroundImage: 'url("./ss.png")',
      backgroundSize: "1000px 100px",
      backgroundRepeat: "repeat-x",
      backgroundPosition: "0 0",
      bottom: 15,
    }}
  />
   <div
    className="absolute w-full h-full opacity-20 z-[600] animate-[wave2_3s_linear_infinite]"
    style={{
      backgroundImage: 'url("./ss.png")',
      backgroundSize: "1000px 100px",
      backgroundRepeat: "repeat-x",
      backgroundPosition: "0 0",
      bottom: 15,
    }}
  />
 
</div>
    {/* Social Icons */}
    <ul className="flex justify-center items-center flex-wrap my-2">
      <li className="mx-2 list-none">
        <a href="#" className="text-2xl text-black transition-transform duration-500 hover:-translate-y-2">
          <ion-icon name="logo-facebook"></ion-icon>
        </a>
      </li>
      <li className="mx-2 list-none">
        <a href="#" className="text-2xl text-black transition-transform duration-500 hover:-translate-y-2">
          <ion-icon name="logo-twitter"></ion-icon>
        </a>
      </li>
      <li className="mx-2 list-none">
        <a href="#" className="text-2xl text-black transition-transform duration-500 hover:-translate-y-2">
          <ion-icon name="logo-linkedin"></ion-icon>
        </a>
      </li>
      <li className="mx-2 list-none">
        <a href="#" className="text-2xl text-black transition-transform duration-500 hover:-translate-y-2">
          <ion-icon name="logo-instagram"></ion-icon>
        </a>
      </li>
    </ul>
    {/* Menu */}
    <ul className="flex justify-center items-center flex-wrap my-2">
      <li className="mx-2 list-none">
        <Link to="/" className="text-lg text-black opacity-75 font-light transition-opacity duration-500 hover:opacity-100 no-underline">Home</Link>
      </li>
      <li className="mx-2 list-none">
        <a href="#" className="text-lg text-black opacity-75 font-light transition-opacity duration-500 hover:opacity-100 no-underline">About</a>
      </li>
      <li className="mx-2 list-none">
        <a href="#" className="text-lg text-black opacity-75 font-light transition-opacity duration-500 hover:opacity-100 no-underline">Services</a>
      </li>
      <li className="mx-2 list-none">
        <a href="#" className="text-lg text-black opacity-75 font-light transition-opacity duration-500 hover:opacity-100 no-underline">Team</a>
      </li>
      <li className="mx-2 list-none">
        <a href="#" className="text-lg text-black opacity-75 font-light transition-opacity duration-500 hover:opacity-100 no-underline">Contact</a>
      </li>
    </ul>
    <p className="text-black my-4 text-base font-light">&copy;2025 Laib Hasan | All Rights Reserved</p>
    {/* Ionicons CDN */}
    <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
  </footer>

</div>

    </div>
  );
}