export type Project = {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  challenges: string[];
  solutions: string[];
  learnings: string[];
  futureImprovements: string[];
};

export const Projects: Project[] = [
  {
    id: "1",
    title: "Ecommerce Website",
    image: "/imgs/gamevab.png",
    liveUrl: "https://gamevabe.web.app",
    githubUrl: "https://github.com/JuniorDev1k/Ecommerce-web-app",

    shortDescription: "Ecommerce website selling gaming products",
    longDescription:
      "I developed a dynamic ecommerce web application specializing in gaming products using React for the frontend and Firebase for backend",
    technologies: [
      "React",
      "Firebase",
      "ContextApi",
      "Tailwind",
      "DaisyUI",
      "Swiperjs",
      "Aos",
    ],
    challenges: [
      "I implemented authentication (email and Google) Firestore for database design & logic Firebase Storage for image storage",
      "Leveraging React hooks and Context API ensured efficient data fetching and state management",
      "interactive dashboard for admin",
    ],
    solutions: ["Using Daisy Components ", "Responsive design"],
    learnings: [
      "Styling layouts",
      "hanlding users & products logic",
      "admin dashboard",
      "Hanling the filtering Logic ",
    ],
    futureImprovements: [
      "optimizing load time & images",
      "Responsive design",
      "Adding a Guest User",
      "using zustand for state mangment",
    ],
  },
  {
    id: "2",
    title: "LoschMedia: Marketing Agency",
    image: "/imgs/loschmedia.png",
    liveUrl: "https://www.loshmedia.com",
    githubUrl: "https://github.com/JuniorDev1k/LoschMedia_Agency",

    shortDescription: "Website for a B2B aquicition marketing agency ",
    longDescription:
      "I developed an interactive & resposive website for a marketing agency that showcase their work and have an online presense that describes the whole agency profile with the ability of booking an apoitment",
    technologies: ["React", "Tailwind", "FramerMotion"],
    challenges: [""],
    solutions: [""],
    learnings: ["Styling layouts", "Resuable components", "Design principles"],
    futureImprovements: [
      "Page for All testimonials",
      "Smooth scrolling + additional animations",
      "New Design",
    ],
  },
  {
    id: "3",
    title: "Fibonacci Clock",
    image: "/imgs/fibo.png",
    liveUrl: "https://fibonaccciclock.vercel.app",
    githubUrl: "https://github.com/JuniorDev1k/Fibonaccci-Clock",

    shortDescription: "SPA that displays current time in a fibonacci form ",
    longDescription:
      "I Created this program to develop and practice problem solving and algorithms so i build this app that displays the current time in a fibonacci form [1,1,2,3,5] by coloing the sqaures : ( Green for Minutes  , Red for Hours  , Blue for both  ) minutes = current minuteTime / 5 ",
    technologies: ["React", "Javascript", "Css"],
    challenges: [
      " Finding the combination of the number ( hours and minute ) by [1,1,2,3,5] ",
      "logic for coloring the squares",
      "dealing with the number 1 as a unique identifier ",
    ],
    solutions: [
      "using the Combination Sum algorithm",
      "Recursive funtion",
      "comparing H & M combination and giving each number unique identifier",
    ],
    learnings: [
      "implementing recursive function",
      "problem solving from math to coding",
      "dynamic programming",
    ],
    futureImprovements: [
      "mybe update the UI",
      "optimizing for a lower Complexity",
      "Additional Feature",
    ],
  },
  {
    id: "4",
    title: "Portfolio website",
    image: "/imgs/portfolio.png",
    liveUrl: "https://www.loshmedia.com",
    githubUrl: "https://github.com/JuniorDev1k/Portfolio_website",

    shortDescription: "Portfolio Website to show my work & knowledge",
    longDescription:
      "simple portfolio website built with typscript , nextjs, the beauty of shadcn is just amazing, makes it easy and good apealing design . to show my work and my skills   ",
    technologies: ["Nextjs", "Typescript", "TailwindCss", "ShadCN"],
    challenges: [""],
    solutions: [""],
    learnings: [""],
    futureImprovements: [
      "New Creative Design",
      "Adding Certificates Section",
      "Adding Work Experince (if i get a job)",
      "Blog to share my ideas",
    ],
  },
];
