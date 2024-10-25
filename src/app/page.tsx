import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

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
      </main>
    </div>
  );
}
