import React from "react";
import ProjectCard from "../Components/ProjectCard";
const Project = () => {
  const projects = [
    {
      title: "Manazon - Ecommerce Website",
      detail:
        "Designed a seamless e-commerce experience, integrating next-auth for Google login, advanced cart management, and automatic cart updates upon user actions.",
      git: "https://github.com/Mankaran07/Manozon-Ecommerce",
      live: "https://manozon-ecommerce.vercel.app/",
      tech: "NextJS,TypeScript,TailwindCSS,DaisyUI,Prisma",
    },
    {
      title: "Airline Booking System",
      detail:
        "Implemented a Microservice Architecture with Search, Booking, Authentication, and Reminder services, along with an API Gateway. Features include JWT-based authentication, RabbitMQ for reminders, and Cron-Jobs for automated email notifications.",
      git: "https://github.com/Mankaran07/AirLine-Booking-Services-Link",
      live: "",
      tech: "ExpressJS,JavaScript,MySQL,Sequelize,RabbitMQ",
    },
    {
      title: "Ticketing Website",
      detail:
        "Efficiently developed a Next.js ticketing website with seamless ticket management, secure NextAuth authentication, and a visually appealing responsive design using Tailwind CSS.",
      git: "https://github.com/Mankaran07/ticket-app",
      live: "https://ticket-app-two-inky.vercel.app/",
      image: "../assets/images/placementmodule.PNG",
      tech: "NextJS, JavaScript, TailwindCSS, MongoDB, NextAuth",
    },
    {
      title: "Taskify - A Todo Website",
      detail:
        "Efficient task management app with user-friendly interface, secure login/signup, data validation, and CRUD operations for tasks.",
      git: "https://github.com/Mankaran07/TodoApp",
      live: "https://todoapp-frontend-k3ut.onrender.com/",
      image: "../assets/images/placementmodule.PNG",
      tech: "ReactJS,TypeScript,MaterialUI,MongoDb,ExpressJs",
    },
  ];
  return (
    <section id="projects" className="project">
      <div className="project__container">
        <div className="project__header">
          <h3>My Projects</h3>
        </div>
        <div className="project__content">
          <ProjectCard data={projects[0]} />
          <ProjectCard data={projects[1]} />
          <ProjectCard data={projects[2]} />
          <ProjectCard data={projects[3]} />
        </div>
      </div>
    </section>
  );
};

export default Project;
