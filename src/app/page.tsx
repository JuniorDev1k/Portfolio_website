"use client";
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
import { Menu } from "lucide-react";
import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Project, Projects } from "../data";
import { Skills, skilltype } from "../data";

import { useState } from "react";

export default function Home() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="min-h-screen  ">
      <header className="sticky top-0 z-10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center  ">
          <Link href="/" className="text-2xl font-bold">
            Ayoub.BK
          </Link>
          <button onClick={() => setToggle(!toggle)}>
            <Menu className="w-10 h-6 md:hidden " />
          </button>

          <ul className="md:flex gap-6 p-2 items-center hidden ">
            <li>
              <Link href="#" className="hover:border-b-2">
                Home
              </Link>
            </li>
            <li>
              <Link href="#projects" className="hover:border-b-2">
                Projects
              </Link>
            </li>
            <li>
              <Link href="#skills" className="hover:border-b-2">
                Skills
              </Link>
            </li>
            <li className="">
              <Link href="#contact">
                <Button>Get in touch</Button>
              </Link>
            </li>
          </ul>

          <div
            className={`z-50 bg-white fixed inset-0 md:hidden h-screen flex   transform transition-transform duration-500 ease-in-out ${
              toggle ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <ul className="relative flex flex-col gap-10 p-4 items-center  w-full border-2 text-xl ">
              <li>
                <X
                  onClick={() => setToggle(false)}
                  className={`w-10 h-7  absolute top-2 right-2`}
                />
              </li>
              <li>
                <Link
                  onClick={() => setToggle(false)}
                  href="#"
                  className="hover:border-b-2  "
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setToggle(false)}
                  href="#projects"
                  className="hover:border-b-2  "
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setToggle(false)}
                  href="#skills"
                  className="hover:border-b-2 "
                >
                  Skills
                </Link>
              </li>
              <li className="">
                <Link onClick={() => setToggle(false)} href="#contact">
                  <Button>Get in touch</Button>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <main className="container mx-auto px-4 py-8">
        <section className="py-4 mb-40 sm:mb-0  ">
          <div className="grid gap-6 lg:justify-between justfity-center items-center  sm:grid-cols-2">
            {/* Left Description and Title */}
            <div className="flex flex-col justify-center space-y-4 md:gap-8 text-center items-center ">
              <div className="space-y-2 flex flex-col gap-2 ">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Hi, I &#39;m Ayoub!
                </h1>
                <p className="max-w-[700px] text-muted-foreground md:text-xl ">
                  I&#39;m a Front-End Developer who enjoys creating vibrant,
                  user-friendly websites that blend creativity and functionality
                  for a great online experience.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="#projects">
                  <Button variant="outline">View my work</Button>
                </Link>
                <Link
                  href="/document/Resumi.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button>Download Resumi</Button>
                </Link>
              </div>
            </div>

            {/* Right Photo */}
            <div className="flex items-center h-full  justify-center">
              <div className="relative h-[400px] sm:w-[500px] sm:h-[400px] md:h-[500px] w-[80%]   ">
                <Image
                  src="/imgs/heroPic.png"
                  alt="my-picture"
                  fill
                  className="rounded-md hover:scale-[1.02] transform transition-all duration-200  hover:shadow-md "
                />
              </div>
            </div>
          </div>
        </section>
        <section id="skills" className="py-12 md:py-24 lg:py-32">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Skills & Technologies
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 items-center ">
            {Skills.map((skill: skilltype) => (
              <Card
                key={skill.name}
                className="flex items-center justify-center p-4 hover:shadow-md hover:text-white hover:text-bold transition-all duration-100"
              >
                <CardContent className="flex p-2 ">
                  <svg viewBox={skill.viewBox} className="w-6 h-6 mr-2">
                    <path fill={skill.fill} d={skill.d} />
                  </svg>
                  <p>{skill.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
        <section id="projects" className="py-12 md:py-24 lg:py-32">
          <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {Projects.map((project: Project) => (
              <Link href={`/projects/${project.id}`} key={project.id}>
                <Card className="hover:shadow-lg transition-all duration-100  h-full  ">
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>
                      {project.shortDescription}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {
                      <Image
                        src={project.image}
                        width={400}
                        height={200}
                        alt={`${project.title} screenshot`}
                        className="w-full h-48 object-cover rounded-md"
                      />
                    }
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" asChild>
                      <Link href={`/projects/${project.id}`}>View Project</Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link href={project.githubUrl}>
                        <Github className="w-4 h-4 mr-2" />
                        GitHub
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </Link>
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
            &copy; {new Date().getFullYear()} Ayoub.bk , All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link
              href="https://github.com/JuniorDev1k"
              className="text-muted-foreground hover:text-foreground"
            >
              <span className="sr-only">GitHub</span>
              <Github className="w-6 h-6" />
            </Link>
            <Link
              href="https://linkedin.com/in/ayoub-bouzar-kouadri-aa997a297"
              className="text-muted-foreground hover:text-foreground"
            >
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
