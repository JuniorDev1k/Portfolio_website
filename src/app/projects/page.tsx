import React from "react";

type Project = {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
};

const projects: Project[] = [
  {
    id: "project1",
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution",
    longDescription:
      "Developed a comprehensive e-commerce platform with features including product catalog, shopping cart, user authentication, and payment integration. Implemented responsive design for optimal user experience across devices.",
    image: "/placeholder.svg?height=300&width=600&text=E-commerce+Platform",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe API"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    id: "project2",
    title: "Task Management App",
    description: "A collaborative task management tool",
    longDescription:
      "Created a real-time task management application allowing teams to create, assign, and track tasks. Implemented features such as drag-and-drop task prioritization, comment system, and email notifications.",
    image: "/placeholder.svg?height=300&width=600&text=Task+Management+App",
    technologies: ["Vue.js", "Firebase", "Vuex", "Element UI"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    id: "project3",
    title: "Weather Forecast Dashboard",
    description: "A dynamic weather forecasting tool",
    longDescription:
      "Engineered a weather dashboard that provides real-time weather data and forecasts. Integrated with multiple weather APIs to ensure accurate and up-to-date information. Implemented geolocation for automatic local weather display.",
    image:
      "/placeholder.svg?height=300&width=600&text=Weather+Forecast+Dashboard",
    technologies: ["React", "Redux", "OpenWeatherMap API", "Chart.js"],
    githubUrl: "#",
    liveUrl: "#",
  },
];

const page = () => {
  return <div>page</div>;
};

export default page;
