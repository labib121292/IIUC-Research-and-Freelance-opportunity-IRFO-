import React from "react";

export default function ResearchPage({ onBack }) {
  return (
    <div className="min-h-screen bg-gradient-to-r from-black via-blue-900 to-blue-800 flex flex-col">
      {/* Top Navbar */}
      <nav className="navbar bg-black shadow-sm px-4 md:px-8 sticky top-0 z-20">
        <div className="flex items-center gap-2 flex-1">
          <span className="text-2xl font-semibold text-white">Research Hub</span>
        </div>
        <div className="hidden md:flex gap-6 px-6 items-center">
          <button className="btn btn-outline btn-sm" onClick={onBack}>
            Back to Home
          </button>
          <a className="link link-hover text-white">All Projects</a>
          <a className="link link-hover text-white">Submit Research</a>
          <a className="link link-hover text-white">Supervisors</a>
        </div>
      </nav>

      <main className="flex-1 p-4 md:p-8 flex flex-col gap-10">
        {/* Hero Banner */}
        <section className="bg-base-200 rounded-lg h-40 md:h-56 flex items-center justify-center text-lg text-gray-600">
          Discover, share, and collaborate on impactful research projects.
        </section>

        {/* Featured Research */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Featured Research Projects</h2>
          <div className=" grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                title: "AI for Sustainable Development",
                desc: "Exploring the role of AI in achieving the UN SDGs.",
                supervisor: "Dr. Arefin",
              },
              {
                title: "Climate-Smart Agriculture",
                desc: "New approaches to farming in the era of climate change.",
                supervisor: "Prof. Fatema",
              },
              {
                title: "Quantum Computing Applications",
                desc: "The potential impact of quantum systems.",
                supervisor: "Dr. Mahmud",
              },
            ].map((project, i) => (
              <div
                key={i}
                className="card bg-black shadow p-4 border border-base-200 hover:shadow-lg"
              >
                <div className="font-bold text-lg mb-2">{project.title}</div>
                <div className="text-sm text-gray-500 mb-1">{project.desc}</div>
                <div className="text-xs text-gray-400">
                  Supervisor: <span className="font-semibold">{project.supervisor}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Submit Research Form */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Submit New Research</h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Research Title"
              className="input input-bordered"
            />
            <input
              type="text"
              placeholder="Research Tags"
              className="input input-bordered"
            />
            <textarea
              placeholder="Abstract / Description"
              className="textarea textarea-bordered md:col-span-2"
              rows={4}
            ></textarea>
            <input
              type="text"
              placeholder="Collaborators (comma separated)"
              className="input input-bordered md:col-span-2"
            />
            <button className="btn btn-primary col-span-1 md:col-span-2 mt-2">
              Submit Research
            </button>
          </form>
        </section>

        {/* Top Supervisors */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Top Supervisors</h2>
          <div className="flex flex-wrap gap-4">
            {["Dr. Alam", "Prof. Hossain", "Dr. Rumi"].map((name, i) => (
              <div
                key={i}
                className="card w-60 bg-base-200 p-4 shadow hover:shadow-lg"
              >
                <div className="avatar mb-3">
                  <div className="w-16 rounded-full bg-gray-300"></div>
                </div>
                <div className="font-semibold text-center">{name}</div>
                <div className="text-center text-sm text-gray-500">
                  20+ Research Projects Supervised
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer footer-center p-4 bg-base-200 text-base-content mt-8">
        <aside className="flex flex-col md:flex-row gap-2 md:gap-8 items-center">
          <span>© 2025 IIUC Research Hub</span>
        </aside>
      </footer>
    </div>
  );
}
