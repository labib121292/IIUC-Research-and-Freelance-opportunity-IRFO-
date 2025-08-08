// src/assets/FreelancePage.jsx
import React, { useState, useContext } from "react";
import { FreelanceContext } from "./FreelanceContext";

export default function FreelancePage() {
  const { tasks, setTasks } = useContext(FreelanceContext);

  const [search, setSearch] = useState("");
  const [level, setLevel] = useState("");
  const [category, setCategory] = useState("");

  const [newTask, setNewTask] = useState({
    title: "",
    category: "",
    budget: "",
    level: "",
    deadline: "",
    description: "",
  });

  const handleInputChange = (e) => {
    setNewTask({ ...newTask, [e.target.name]: e.target.value });
  };

  const handlePostTask = (e) => {
    e.preventDefault();
    if (!newTask.title || !newTask.category || !newTask.level || !newTask.budget) return;

    const taskToAdd = {
      ...newTask,
      id: tasks.length + 1,
      budget: parseInt(newTask.budget),
    };
    setTasks([taskToAdd, ...tasks]);
    setNewTask({
      title: "",
      category: "",
      budget: "",
      level: "",
      deadline: "",
      description: "",
    });
  };

  const filteredTasks = tasks.filter((task) => {
    return (
      task.title.toLowerCase().includes(search.toLowerCase()) &&
      (level ? task.level === level : true) &&
      (category ? task.category === category : true)
    );
  });

  return (
    <div className="min-h-screen bg-gradient-to-r from-black via-blue-900 to-blue-800 flex flex-col">
      {/* Navbar */}
      <nav className="navbar bg-black text-white px-4 md:px-8 sticky top-0 z-20">
        <div className="flex-1 text-2xl font-semibold">Freelance Marketplace</div>
      </nav>

      {/* Search and Filters */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 md:px-8">
        <input
          type="text"
          placeholder="Search tasks..."
          className="input input-bordered w-full"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select className="select select-bordered w-full" value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">All Categories</option>
          <option>Web Development</option>
          <option>AI/ML</option>
          <option>Writing</option>
        </select>
        <select className="select select-bordered w-full" value={level} onChange={(e) => setLevel(e.target.value)}>
          <option value="">All Levels</option>
          <option>Beginner</option>
          <option>Intermediate</option>
          <option>Expert</option>
        </select>
      </div>

      <main className="flex-1 px-4 md:px-8 flex flex-col gap-12">
        {/* Hero Section */}
        <section className="bg-base-200 rounded-lg p-6 md:p-12 text-center">
          <h1 className="text-4xl font-bold mb-2">Find or Post Freelance Work</h1>
          <p className="text-gray-500 max-w-2xl mx-auto">
            A collaborative space for students, teachers, and faculty to post,
            browse, and complete freelance tasks.
          </p>
        </section>

        {/* Post Task Section */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Post a New Freelance Task</h2>
          <form onSubmit={handlePostTask} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              className="input input-bordered"
              type="text"
              name="title"
              placeholder="Task Title"
              value={newTask.title}
              onChange={handleInputChange}
            />
            <input
              className="input input-bordered"
              type="number"
              name="budget"
              placeholder="Budget (e.g., 2000)"
              value={newTask.budget}
              onChange={handleInputChange}
            />
            <select
              className="select select-bordered"
              name="category"
              value={newTask.category}
              onChange={handleInputChange}
            >
              <option value="">Select Category</option>
              <option>Web Development</option>
              <option>AI/ML</option>
              <option>Writing</option>
            </select>
            <select
              className="select select-bordered"
              name="level"
              value={newTask.level}
              onChange={handleInputChange}
            >
              <option value="">Select Level</option>
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Expert</option>
            </select>
            <input
              className="input input-bordered"
              type="date"
              name="deadline"
              value={newTask.deadline}
              onChange={handleInputChange}
            />
            <textarea
              className="textarea textarea-bordered col-span-1 md:col-span-2"
              placeholder="Task Description"
              name="description"
              value={newTask.description}
              onChange={handleInputChange}
            ></textarea>
            <button type="submit" className="btn btn-primary col-span-1 md:col-span-2">
              Post Task
            </button>
          </form>
        </section>

        {/* Task List */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Available Tasks</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredTasks.length ? (
              filteredTasks.map((task) => (
                <div key={task.id} className="transform  rounded-xl shadow-xl transition duration-300 hover:scale-105 card bg-base-200 p-6">
                  <h3 className="text-xl font-semibold">{task.title}</h3>
                  <div className="text-sm text-black mb-1">{task.category} • {task.level}</div>
                  <div className="mb-2 text-sm text-black">{task.description}</div>
                  <div className="flex flex-wrap justify-between items-center gap-2 text-sm">
                    <span className="badge badge-accent">Budget: ৳{task.budget}</span>
                    <span className="text-black">Deadline: {task.deadline}</span>
                  </div>
                  <button className="btn btn-outline btn-sm mt-4">Apply Now</button>
                </div>
              ))
            ) : (
              <div className="text-center text-gray-500 col-span-2">No matching tasks found.</div>
            )}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer footer-center p-4 bg-base-200 text-base-content mt-12">
        <aside>© 2025 Freelance Hub | All rights reserved</aside>
      </footer>
    </div>
  );
}
