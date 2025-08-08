import React, { useState } from "react";
import ProfileEdit from "./ProfileEdit";

export default function TeacherPage({ onBack }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showProfileEdit, setShowProfileEdit] = useState(false);

  if (showProfileEdit) {
    return <ProfileEdit onCancel={() => setShowProfileEdit(false)} />;
  }

  return (
    <div className="min-h-screen bg-base-100 flex flex-col">
      {/* Navbar */}
      <nav className="navbar bg-black shadow-sm px-4 md:px-8 sticky top-0 z-20">
        <div className="flex items-center gap-2 flex-1">
          <button
            className="btn btn-ghost btn-circle hidden md:inline-flex"
            onClick={() => setSidebarOpen(true)}
            aria-label="Open sidebar"
          >
            <svg width="24" height="24" fill="none"><path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" /></svg>
          </button>
          <span className="text-2xl font-semibold">Welcome, Teacher!</span>
        </div>
        <div className="hidden md:flex gap-6 px-6 items-center">
          <button className="btn btn-outline btn-sm" onClick={onBack}>Back to Home</button>
          <a className="link link-hover">Dashboard</a>
          <a className="link link-hover">Projects</a>
          <a className="link link-hover">Students</a>
          <a className="link link-hover">Settings</a>
        </div>
        <div className="flex items-center gap-2">
          <input type="text" placeholder="Search..." className="input input-bordered input-sm w-32 md:w-48" />
          <button className="btn btn-ghost btn-circle md:hidden">
            <svg width="24" height="24" fill="none"><path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" /></svg>
          </button>
        </div>
      </nav>

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className={`fixed top-0 left-0 h-full w-56 bg-base-200 border-r z-30 py-8 px-4 gap-4 flex-col transition-transform duration-200 ${sidebarOpen ? "md:flex" : "md:-translate-x-full"} hidden md:flex`}>
          <div className="flex justify-end mb-4">
            <button className="btn btn-ghost btn-circle" onClick={() => setSidebarOpen(false)}>
              <svg width="24" height="24" fill="none"><path d="M6 6l12 12M6 18L18 6" stroke="currentColor" strokeWidth="2" /></svg>
            </button>
          </div>
          <nav className="flex flex-col gap-2">
            <a className="btn btn-ghost justify-start text-lg"><span className="mr-2">📄</span> Projects</a>
            <a className="btn btn-ghost justify-start text-lg"><span className="mr-2">👨‍🎓</span> Students</a>
            <a className="btn btn-ghost justify-start text-lg"><span className="mr-2">⚙️</span> Settings</a>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-4 md:p-8 flex flex-col gap-8">
          <section>
            <div className="bg-base-200 rounded-lg h-40 md:h-56 flex items-center justify-center text-lg text-gray-500">
              Guide. Monitor. Lead Innovation.
            </div>
          </section>

          <section className="bg-neutral text-neutral-content rounded-lg flex flex-col md:flex-row items-center md:items-end justify-between p-6 md:p-8">
            <div className="flex items-center gap-4">
              <div className="avatar">
                <div className="w-20 rounded-full bg-base-300" />
              </div>
              <div>
                <div className="font-bold text-2xl">Dr. Khan</div>
                <div className="flex gap-2 mt-1">
                  <span className="badge badge-outline">Your Profile</span>
                  <span className="badge badge-outline">Teacher</span>
                </div>
                <div className="mt-2">View students' work and research insights.</div>
              </div>
            </div>
            <div className="flex flex-col gap-2 mt-4 md:mt-0">
              <button className="btn btn-outline btn-sm">Messages</button>
              <button className="btn btn-primary btn-sm" onClick={() => setShowProfileEdit(true)}>Edit Profile</button>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Your Supervised Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="card bg-base-200 p-4">
                <div className="font-semibold mb-2">AI in Agriculture</div>
                <div className="text-gray-500">Student: Labib | Dept: CSE</div>
              </div>
              <div className="card bg-base-200 p-4">
                <div className="font-semibold mb-2">Blockchain Research</div>
                <div className="text-gray-500">Student: Anika | Dept: EEE</div>
              </div>
            </div>
          </section>
        </main>
      </div>

      {/* Footer */}
      <footer className="footer footer-center p-4 bg-base-200 text-base-content mt-8">
        <aside className="flex flex-col md:flex-row gap-2 md:gap-8 items-center">
          <span>© 2023 IIUC Research Platform</span>
          <a className="link link-hover">Support</a>
          <a className="link link-hover">Terms</a>
        </aside>
      </footer>

      {/* Mobile Bottom Nav */}
      <nav className="btm-nav md:hidden z-20">
        <button className="active"><span className="text-xl">🏠</span><span className="btm-nav-label">Home</span></button>
        <button><span className="text-xl">📄</span><span className="btm-nav-label">Projects</span></button>
        <button><span className="text-xl">👨‍🎓</span><span className="btm-nav-label">Students</span></button>
      </nav>
    </div>
  );
}
