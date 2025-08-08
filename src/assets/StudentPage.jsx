import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Import navigate
import ProfileEdit from "./ProfileEdit";
import HomePage from "./HomePage";

export default function StudentPage() {
  const [idea, setIdea] = useState({ title: "", tags: "", collaborators: "" });
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showProfileEdit, setShowProfileEdit] = useState(false);
  const [showHomePage, setShowHomePage] = useState(false);
  const navigate = useNavigate(); // ✅ Hook to navigate

  // Show profile edit view
  if (showProfileEdit) {
    return <ProfileEdit onCancel={() => setShowProfileEdit(false)} />;
  }

  // Show HomePage view with a button to return to StudentPage
  if (showHomePage) {
    return <HomePage onCancel={() => setShowHomePage(false)} />;
  }


  // Default StudentPage view
  return (
    <div className="min-h-screen bg-base-100 flex flex-col">
      {/* Top Navbar */}
      <nav className="navbar bg-black shadow-sm px-4 md:px-8 sticky top-0 z-20">
        <div className="flex items-center gap-2 flex-1">
          <button
            className="btn btn-ghost btn-circle hidden md:inline-flex"
            onClick={() => setSidebarOpen(true)}
            aria-label="Open sidebar"
          >
            <svg width="24" height="24" fill="none">
              <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" />
            </svg>
          </button>
          <span className="text-2xl font-semibold">Welcome to Your Platform!</span>
        </div>

        {/* Back to Home button - now triggers showHomePage state */}
        <div className="hidden md:flex gap-6 px-6 items-center">
           <button
                  className="btn btn-primary btn-sm"
                  onClick={() => setShowHomePage(true)}
                >
                  Home
                </button>
        </div>

        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Search in site"
            className="input input-bordered input-sm w-32 md:w-48"
          />
        </div>
      </nav>

      <div className="flex flex-1">
        {/* Sidebar for PC */}
        <aside
          className={`fixed top-0 left-0 h-full w-56 bg-base-200 border-r z-30 py-8 px-4 gap-4 flex-col transition-transform duration-200 ${
            sidebarOpen ? "md:flex" : "md:-translate-x-full"
          } hidden md:flex`}
          style={{ minHeight: "100vh" }}
        >
          <div className="flex justify-end mb-4">
            <button
              className="btn btn-ghost btn-circle"
              onClick={() => setSidebarOpen(false)}
              aria-label="Close sidebar"
            >
              <svg width="24" height="24" fill="none">
                <path d="M6 6l12 12M6 18L18 6" stroke="currentColor" strokeWidth="2" />
              </svg>
            </button>
          </div>
          <nav className="flex flex-col gap-2">
            <a className="btn btn-ghost justify-start text-lg">
              <span className="mr-2">🔍</span> Research
            </a>
            <a className="btn btn-ghost justify-start text-lg">
              <span className="mr-2">💼</span> Freelance
            </a>
            <a className="btn btn-ghost justify-start text-lg">
              <span className="mr-2">🧠</span> Ideas
            </a>
            <a className="btn btn-ghost justify-start text-lg">
              <span className="mr-2">🏆</span> Leaderboard
            </a>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 flex flex-col gap-8 p-4 md:p-8">
          {/* Hero/Slider */}
          <section className="w-full">
            <div className="bg-base-200 rounded-lg h-40 md:h-56 flex items-center justify-center text-lg text-gray-500">
              Collaborate. Innovate. Earn.
            </div>
          </section>

          {/* Profile Card */}
          <section className="w-full">
            <div className="bg-neutral text-neutral-content rounded-lg flex flex-col md:flex-row items-center md:items-end justify-between p-6 md:p-8">
              <div className="flex items-center gap-4">
                <div className="avatar">
                  <div className="w-20 rounded-full bg-base-300" />
                </div>
                <div>
                  <div className="font-bold text-2xl">Labib</div>
                  <div className="flex gap-2 mt-1">
                    <span className="badge badge-outline">Your Profile</span>
                    <span className="badge badge-outline">Student</span>
                  </div>
                  <div className="mt-2">Welcome back! Check your projects and tasks.</div>
                </div>
              </div>
              <div className="flex flex-col gap-2 mt-4 md:mt-0">
                <button className="btn btn-outline btn-sm">View Notifications</button>
                <button
                  className="btn btn-primary btn-sm"
                  onClick={() => setShowProfileEdit(true)}
                >
                  Edit Profile
                </button>
              </div>
            </div>
          </section>

          {/* Dashboard Overview */}
          <section>
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold mb-2">Dashboard Overview</h2>
              <div className="text-gray-500">Quick links to your activities.</div>
            </div>
            <div className="flex flex-col md:flex-row gap-4 justify-center mb-6">
              <button className="btn btn-outline w-full md:w-56">New Freelance Task</button>
              <button className="btn btn-neutral w-full md:w-56">New Project</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="card bg-base-200 p-4">
                <div className="font-semibold mb-2">My Projects</div>
                <div className="text-gray-500">View your ongoing projects.</div>
              </div>
              <div className="card bg-base-200 p-4">
                <div className="font-semibold mb-2">My Freelance Tasks</div>
                <div className="text-gray-500">Check your freelance assignments.</div>
              </div>
              <div className="card bg-base-200 p-4">
                <div className="font-semibold mb-2">Portfolio Builder</div>
                <div className="text-gray-500">Build your portfolio with ease.</div>
              </div>
            </div>
          </section>

          {/* Ongoing Research Projects */}
          <section>
            <h3 className="text-2xl font-bold mb-4">Ongoing Research Projects</h3>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 flex items-center gap-4 bg-base-200 rounded-lg p-4">
                <div className="avatar">
                  <div className="w-12 rounded-full bg-base-300" />
                </div>
                <div>
                  <div className="font-semibold">AI in Healthcare</div>
                  <div className="text-gray-500 text-sm">Department of Health</div>
                </div>
                <div className="ml-auto text-sm">
                  <span className="font-semibold">Supervisor:</span> Dr. Smith
                </div>
              </div>
              <div className="flex-1 flex items-center gap-4 bg-base-200 rounded-lg p-4">
                <div className="avatar">
                  <div className="w-12 rounded-full bg-base-300" />
                </div>
                <div>
                  <div className="font-semibold">Sustainable Energy</div>
                  <div className="text-gray-500 text-sm">Department of Environmental Science</div>
                </div>
                <div className="ml-auto text-sm">
                  <span className="font-semibold">Supervisor:</span> Prof. Johnson
                </div>
              </div>
            </div>
          </section>

          {/* Performance Metrics */}
          <section>
            <h3 className="text-2xl font-bold mb-4">Your Performance Metrics</h3>
            <div className="text-gray-500 mb-4">Track your progress effectively.</div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="card bg-base-200 p-4">
                <div className="text-sm text-gray-500">Completed Tasks</div>
                <div className="text-2xl font-bold">15</div>
                <div className="text-green-600 text-xs">+5</div>
              </div>
              <div className="card bg-base-200 p-4">
                <div className="text-sm text-gray-500">Pending Tasks</div>
                <div className="text-2xl font-bold">3</div>
                <div className="text-red-600 text-xs">-1</div>
              </div>
              <div className="card bg-base-200 p-4">
                <div className="text-sm text-gray-500">Total Earnings</div>
                <div className="text-2xl font-bold">tk 5000</div>
                <div className="text-green-600 text-xs">+500</div>
              </div>
            </div>
          </section>

          {/* Submit a New Idea */}
          <section>
            <h3 className="text-2xl font-bold mb-4">Submit a New Idea</h3>
            <div className="text-gray-500 mb-4">Share your innovative ideas with collaborators.</div>
            <form
              className="grid grid-cols-1 md:grid-cols-3 gap-4"
              onSubmit={e => {
                e.preventDefault();
                // handle submit
              }}
            >
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Idea Title</span>
                </label>
                <input
                  type="text"
                  className="input input-bordered"
                  placeholder="Enter your idea title"
                  value={idea.title}
                  onChange={e => setIdea({ ...idea, title: e.target.value })}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Tags</span>
                </label>
                <input
                  type="text"
                  className="input input-bordered"
                  placeholder="Add tags related to your idea"
                  value={idea.tags}
                  onChange={e => setIdea({ ...idea, tags: e.target.value })}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Collaborators</span>
                </label>
                <input
                  type="text"
                  className="input input-bordered"
                  placeholder="Add your collaborators"
                  value={idea.collaborators}
                  onChange={e => setIdea({ ...idea, collaborators: e.target.value })}
                />
              </div>
              <div className="col-span-1 md:col-span-3 flex gap-4 mt-4">
                <button type="button" className="btn btn-outline flex-1">
                  Cancel
                </button>
                <button type="submit" className="btn btn-neutral flex-1">
                  Submit Idea
                </button>
              </div>
            </form>
          </section>
        </main>
      </div>

      {/* Footer */}
      <footer className="footer footer-center p-4 bg-base-200 text-base-content mt-8">
        <aside className="flex flex-col md:flex-row gap-2 md:gap-8 items-center">
          <span>© 2023 Your Platform. All Rights Reserved.</span>
          <a className="link link-hover">Terms of Service</a>
          <a className="link link-hover">Privacy Policy</a>
        </aside>
      </footer>

      {/* Mobile Bottom Nav */}
      <nav className="btm-nav md:hidden z-20">
        <button className="active">
          <span className="text-xl">🏠</span>
          <span className="btm-nav-label">Home</span>
        </button>
        <button>
          <span className="text-xl">💼</span>
          <span className="btm-nav-label">Freelance</span>
        </button>
        <button>
          <span className="text-xl">🧠</span>
          <span className="btm-nav-label">Ideas</span>
        </button>
        <button>
          <span className="text-xl">🏆</span>
          <span className="btm-nav-label">Leaderboard</span>
        </button>
      </nav>
    </div>
  );
}
