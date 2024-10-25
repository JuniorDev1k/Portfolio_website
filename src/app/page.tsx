import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Github, Linkedin, Mail } from "lucide-react";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const skills = [
    "React",
    "TypeScript",
    "Next.js",
    "Tailwind",
    "Express",
    "Python",
    "MongoDB",
    "DaisyUI",
    "REST API",
    "Mysql",
    "Git",
  ];

  const projects = [
    {
      title: "Marketing Agency",
      image: "",
      description: "marketing agency loschmedia",
      liveUrl: "https://www.loshmedia.com",
      githubUrl: "https://www.loshmedia.com",
    },
    {
      title: "Marketing Agency",
      image: "",
      description: "marketing agency loschmedia",
      liveUrl: "https://www.loshmedia.com",
      githubUrl: "https://www.loshmedia.com",
    },
    {
      title: "Marketing Agency",
      image: "",
      description: "marketing agency loschmedia",
      liveUrl: "https://www.loshmedia.com",
      githubUrl: "https://www.loshmedia.com",
    },
    {
      title: "Marketing Agency",
      image: "",
      description: "marketing agency loschmedia",
      liveUrl: "https://www.loshmedia.com",
      githubUrl: "https://www.loshmedia.com",
    },
  ];

  return (
    <div className="min-h-screen  ">
      <header className="sticky top-0 z-10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            Your Name
          </Link>
          <ul className="flex space-x-4">
            <li>
              <Link href="#" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="#projects" className="hover:underline">
                Projects
              </Link>
            </li>
            <li>
              <Link href="#skills" className="hover:underline">
                Skills
              </Link>
            </li>
            <li>
              <Link href="#contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className="container mx-auto px-4 py-8">
        <section className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              {/* <Image
                src=""
                width={400}
                height={400}
                alt="Your profile picture"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
              /> */}
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Hi, I'm Ayoub !
                  </h1>
                  <p className="max-w-[700px] text-muted-foreground md:text-xl">
                    I’m a Front-End Developer who enjoys creating vibrant,
                    user-friendly websites that blend creativity and
                    functionality for a great online experience
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="#contact">
                    <Button>Get in touch</Button>
                  </Link>
                  <Link href="#projects">
                    <Button variant="outline">View my work</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="skills" className="py-12 md:py-24 lg:py-32">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Skills & Technologies
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 items-center">
            {skills.map((skill) => (
              <Card
                key={skill}
                className="flex items-center justify-center p-4"
              >
                <CardContent className="text-center">{skill}</CardContent>
              </Card>
            ))}
          </div>
        </section>
        <section id="projects" className="py-12 md:py-24 lg:py-32">
          <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  {/* <Image
                    src={project.image}
                    width={400}
                    height={200}
                    alt={`${project.title} screenshot`}
                    className="w-full h-48 object-cover rounded-md"
                  /> */}
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" asChild>
                    <Link href={project.liveUrl}>View Project</Link>
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
        </section>
        <section id="contact" className="py-12 md:py-24 lg:py-32">
          <h2 className="text-3xl font-bold mb-8 text-center">Get in Touch</h2>
          <Card className="max-w-md mx-auto">
            <CardHeader>
              <CardTitle>Contact Me</CardTitle>
              <CardDescription>
                Fill out the form below to send me a message.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Name
                  </label>
                  <Input id="name" placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="Your email" />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Message
                  </label>
                  <Textarea id="message" placeholder="Your message" />
                </div>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </section>
      </main>
      <footer className="bg-muted py-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Your Name. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
            >
              <span className="sr-only">GitHub</span>
              <Github className="w-6 h-6" />
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
            >
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="w-6 h-6" />
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
            >
              <span className="sr-only">Email</span>
              <Mail className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
