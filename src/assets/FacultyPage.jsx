import React, { useState } from "react";
import ProfileEdit from "./ProfileEdit";

export default function FacultyPage({ onBack }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showProfileEdit, setShowProfileEdit] = useState(false);

  if (showProfileEdit) {
    return <ProfileEdit onCancel={() => setShowProfileEdit(false)} />;
  }

  return (
    <div className="min-h-screen bg-base-100 flex flex-col">
      <nav className="navbar bg-black shadow-sm px-4 md:px-8 sticky top-0 z-20">
        <div className="flex items-center gap-2 flex-1">
          <button className="btn btn-ghost btn-circle hidden md:inline-flex" onClick={() => setSidebarOpen(true)}>
            <svg width="24" height="24" fill="none"><path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" /></svg>
          </button>
          <span className="text-2xl font-semibold">Welcome, Faculty!</span>
        </div>
        <div className="hidden md:flex gap-6 px-6 items-center">
          <button className="btn btn-outline btn-sm" onClick={onBack}>Back to Home</button>
          <a className="link link-hover">Departments</a>
          <a className="link link-hover">Research Proposals</a>
          <a className="link link-hover">Faculty Board</a>
        </div>
        <div className="flex items-center gap-2">
          <input type="text" placeholder="Search..." className="input input-bordered input-sm w-32 md:w-48" />
          <button className="btn btn-ghost btn-circle md:hidden">
            <svg width="24" height="24" fill="none"><path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" /></svg>
          </button>
        </div>
      </nav>

      <div className="flex flex-1">
        <aside className={`fixed top-0 left-0 h-full w-56 bg-base-200 border-r z-30 py-8 px-4 flex-col transition-transform duration-200 ${sidebarOpen ? "md:flex" : "md:-translate-x-full"} hidden md:flex`}>
          <div className="flex justify-end mb-4">
            <button className="btn btn-ghost btn-circle" onClick={() => setSidebarOpen(false)}>
              <svg width="24" height="24" fill="none"><path d="M6 6l12 12M6 18L18 6" stroke="currentColor" strokeWidth="2" /></svg>
            </button>
          </div>
          <nav className="flex flex-col gap-2">
            <a className="btn btn-ghost justify-start text-lg">📚 Departments</a>
            <a className="btn btn-ghost justify-start text-lg">📄 Proposals</a>
            <a className="btn btn-ghost justify-start text-lg">🏛️ Faculty Board</a>
          </nav>
        </aside>

        <main className="flex-1 p-4 md:p-8 flex flex-col gap-8">
          <section className="bg-base-200 rounded-lg h-40 md:h-56 flex items-center justify-center text-lg text-gray-500">
            Guide Research. Oversee Departments. Lead.
          </section>

          <section className="bg-neutral text-neutral-content rounded-lg flex flex-col md:flex-row items-center md:items-end justify-between p-6 md:p-8">
            <div className="flex items-center gap-4">
              <div className="avatar"><div className="w-20 rounded-full bg-base-300" /></div>
              <div>
                <div className="font-bold text-2xl">Prof. Islam</div>
                <div className="flex gap-2 mt-1">
                  <span className="badge badge-outline">Your Profile</span>
                  <span className="badge badge-outline">Faculty</span>
                </div>
                <div className="mt-2">Welcome to your faculty dashboard.</div>
              </div>
            </div>
            <div className="flex flex-col gap-2 mt-4 md:mt-0">
              <button className="btn btn-outline btn-sm">Board Messages</button>
              <button className="btn btn-primary btn-sm" onClick={() => setShowProfileEdit(true)}>Edit Profile</button>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Department Activity</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="card bg-base-200 p-4">CSE Department - 8 Active Research Projects</div>
              <div className="card bg-base-200 p-4">EEE Department - 5 Freelance Projects Ongoing</div>
            </div>
          </section>
        </main>
      </div>

      <footer className="footer footer-center p-4 bg-base-200 text-base-content mt-8">
        <aside className="flex flex-col md:flex-row gap-2 md:gap-8 items-center">
          <span>© 2023 IIUC Faculty Portal</span>
        </aside>
      </footer>

      <nav className="btm-nav md:hidden z-20">
        <button><span className="text-xl">📚</span><span className="btm-nav-label">Depts</span></button>
        <button><span className="text-xl">📄</span><span className="btm-nav-label">Proposals</span></button>
        <button><span className="text-xl">🏛️</span><span className="btm-nav-label">Board</span></button>
      </nav>
    </div>
  );
}
