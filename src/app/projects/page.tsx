import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Github, ArrowLeft } from "lucide-react";

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
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            Your Name
          </Link>
          <Link href="/">
            <Button variant="ghost">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
            </Button>
          </Link>
        </nav>
      </header>
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">My Projects</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.id} className="flex flex-col">
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                {/* <Image
                  src={project.image}
                  width={600}
                  height={300}
                  alt={`${project.title} screenshot`}
                  className="w-full h-48 object-cover rounded-md mb-4"
                /> */}
                <p className="text-sm text-muted-foreground mb-4">
                  {project.longDescription}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" asChild>
                  <Link href={project.liveUrl}>View Live</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href={project.githubUrl}>
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default page;
