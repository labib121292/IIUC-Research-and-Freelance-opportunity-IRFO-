// src/assets/FreelanceContext.jsx
import React, { createContext, useState } from "react";

export const FreelanceContext = createContext();

export function FreelanceProvider({ children }) {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Build a Portfolio Website",
      category: "Web Development",
      budget: 3000,
      level: "Intermediate",
      deadline: "2025-07-20",
      description: "Create a modern React portfolio site using TailwindCSS.",
    },
    {
      id: 2,
      title: "AI Model for Plant Disease Detection",
      category: "AI/ML",
      budget: 5000,
      level: "Expert",
      deadline: "2025-08-01",
      description: "Build and train a model to identify plant diseases from images.",
    },
    {
      id: 3,
      title: "Content Writing for Blog",
      category: "Writing",
      budget: 1000,
      level: "Beginner",
      deadline: "2025-07-15",
      description: "Write 5 blog posts on student productivity tools.",
    },
  ]);

  return (
    <FreelanceContext.Provider value={{ tasks, setTasks }}>
      {children}
    </FreelanceContext.Provider>
  );
}
