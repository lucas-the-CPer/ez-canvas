import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import React from "react";

const classes = [
  {
    title: "Math 101",
    grade: "A",
    assignments: ["Assignment 1: Complete Chapter 1 exercises", "Assignment 2: Study for Midterm"],
  },
  {
    title: "History 202",
    grade: "B+",
    assignments: ["Assignment 1: Read Chapter 3", "Assignment 2: Write a paper on WWII"],
  },
  {
    title: "Science 303",
    grade: "A-",
    assignments: ["Assignment 1: Lab report", "Assignment 2: Review notes for Final Exam"],
  },
  {
    title: "Literature 404",
    grade: "B",
    assignments: ["Assignment 1: Read The Great Gatsby", "Assignment 2: Write a summary"],
  },
  {
    title: "Art 505",
    grade: "A",
    assignments: ["Assignment 1: Draw a still life", "Assignment 2: Submit project"],
  },
  {
    title: "Physics 606",
    grade: "C+",
    assignments: ["Assignment 1: Solve practice problems", "Assignment 2: Review for quiz"],
  },
];

function App() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-semibold text-center mb-8">My School Classes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {classes.map((cls, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-semibold">{cls.title}</h2>
              <p className="text-gray-500">Grade: {cls.grade}</p>
              <ul className="mt-4">
                {cls.assignments.map((assignment, idx) => (
                  <li key={idx} className="text-gray-700">- {assignment}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/*
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex-col">
      <button className="btn">Example Button
      </button>
      <div className="radial-progress" style={{ '--value' :60 }}>Uh oh</div>
    </div>
  )
}
*/
export default App
