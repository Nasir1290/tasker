import React from "react";
import Navbar from "./components/navbar";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import TaskBoard from "./components/tasks/TaskBoard";

export default function App() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col justify-center items-center">
        <HeroSection />
        <TaskBoard />
      </div>
      <Footer />
    </div>
  );
}
