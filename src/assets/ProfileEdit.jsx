import React from "react";

export default function ProfileEdit({ onCancel }) {
  return (
    <div className="min-h-screen bg-base-100 flex flex-col">
      {/* Top Navbar */}
      <nav className="navbar bg-black shadow-sm px-4 md:px-8 sticky top-0 z-20">
        <div className="flex-1">
          <span className="text-2xl font-semibold">Profile Edit</span>
        </div>
        <div className="hidden md:flex gap-6 items-center">
          <a className="link link-hover">Home</a>
          <a className="link link-hover">Dashboard</a>
          <a className="link link-hover">Help</a>
        </div>
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Search in site"
            className="input input-bordered input-sm w-32 md:w-48"
          />
          <button className="btn btn-ghost btn-circle md:hidden">
            <svg width="24" height="24" fill="none" className="inline-block">
              <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Profile Header */}
      <section className="w-full flex flex-col md:flex-row items-center md:items-end justify-between p-6 md:p-12 bg-base-100">
        <div className="flex items-center gap-4">
          <div className="avatar">
            <div className="w-24 h-24 rounded-full bg-base-300" />
          </div>
          <div>
            <div className="font-bold text-2xl">Labib</div>
            <div className="text-gray-500">Edit your profile information</div>
          </div>
        </div>
        <div className="flex flex-col gap-2 mt-4 md:mt-0">
          <button className="btn btn-outline btn-sm" onClick={onCancel}>Cancel</button>
          <button className="btn btn-neutral btn-sm">Save Changes</button>
        </div>
      </section>

      {/* Main Form */}
      <div className="flex flex-col md:flex-row gap-8 p-6 md:p-12">
        {/* Left: Personal Info */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-4">Personal Information</h2>
          <div className="text-gray-500 mb-6">Update your personal details</div>
          <form className="flex flex-col gap-4">
            <div>
              <label className="label font-semibold">Full Name</label>
              <input className="input input-bordered w-full" placeholder="Enter your full name" />
            </div>
            <div>
              <label className="label font-semibold">Profile Picture</label>
              <input type="file" className="file-input file-input-bordered w-full" />
            </div>
            <div>
              <label className="label font-semibold">University</label>
              <input className="input input-bordered w-full" placeholder="Enter your university name" />
            </div>
            <div>
              <label className="label font-semibold">Gender</label>
              <div className="flex gap-2">
                <button type="button" className="btn btn-outline btn-sm">Male</button>
                <button type="button" className="btn btn-outline btn-sm">Female</button>
                <button type="button" className="btn btn-outline btn-sm">Other</button>
              </div>
              <div className="text-xs text-gray-400 mt-1">Select gender</div>
            </div>
            <div>
              <label className="label font-semibold">Skills</label>
              <input className="input input-bordered w-full" placeholder="Enter your skills (comma separated)" />
            </div>
            <div className="flex gap-2 mt-2">
              <button type="button" className="btn btn-outline btn-sm flex-1">Remove Profile Picture</button>
              <button type="submit" className="btn btn-neutral btn-sm flex-1">Update Info</button>
            </div>
          </form>
        </div>
        {/* Right: Additional Info */}
        <div className="flex-1 flex flex-col gap-8">
          <h2 className="text-2xl font-bold mb-4">Additional Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="card bg-base-200 p-4">
              <div className="font-semibold mb-1">Contact Email</div>
              <div className="text-gray-500 text-sm mb-2">example@example.com</div>
              <div className="flex gap-2">
                <span className="text-xs text-gray-400">✉️</span>
                <span className="text-xs text-gray-400">🔗</span>
              </div>
            </div>
            <div className="card bg-base-200 p-4">
              <div className="font-semibold mb-1">LinkedIn Profile</div>
              <div className="text-gray-500 text-sm mb-2">linkedin.com/in/labib</div>
              <div className="flex gap-2">
                <span className="text-xs text-gray-400">🔗</span>
              </div>
            </div>
            <div className="card bg-base-200 p-4">
              <div className="font-semibold mb-1">Bio</div>
              <div className="text-gray-500 text-sm mb-2">Write a brief bio about yourself.</div>
              <div className="flex gap-2">
                <span className="text-xs text-gray-400">📝</span>
                <span className="text-xs text-gray-400">🔗</span>
              </div>
            </div>
            <div className="card bg-base-200 p-4">
              <div className="font-semibold mb-1">Portfolio Link</div>
              <div className="text-gray-500 text-sm mb-2">Link to your portfolio or website.</div>
              <div className="flex gap-2">
                <span className="text-xs text-gray-400">🔗</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer footer-center p-4 bg-base-200 text-base-content mt-8">
        <aside className="flex flex-col md:flex-row gap-2 md:gap-8 items-center">
          <span>© 2023 Your Organization. All Rights Reserved.</span>
          <a className="link link-hover">Privacy Policy</a>
          <a className="link link-hover">Terms of Service</a>
        </aside>
      </footer>
    </div>
  );
}