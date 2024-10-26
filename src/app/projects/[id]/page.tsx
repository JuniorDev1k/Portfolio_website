// src/app/projects/[id]/page.tsx
"use client";
import { useParams, notFound } from "next/navigation";
import { Projects, Project } from "../../../data";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  Github,
  ExternalLink,
  Code,
  Lightbulb,
  Rocket,
} from "lucide-react";

const ProjectPage = () => {
  const params = useParams();
  const projectId = params?.id as string;

  // Find the project by ID
  const project = Projects.find((project: Project) => project.id === projectId);

  // If project not found, show 404
  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            Ayoub.BK
          </Link>
          <Link href="/#projects">
            <Button variant="ghost">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
            </Button>
          </Link>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
          <p className="text-xl text-muted-foreground mb-6">
            {project.shortDescription}
          </p>

          <div className="mb-8">
            <Image
              src={project.image}
              width={800}
              height={400}
              alt={`${project.title} screenshot`}
              className="w-full rounded-lg shadow-lg"
            />
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Project Description</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{project.longDescription}</p>
            </CardContent>
          </Card>

          <Tabs defaultValue="phases" className="mb-8">
            <TabsList>
              <TabsTrigger value="challenges">
                Challenges & Solutions
              </TabsTrigger>
              <TabsTrigger value="learnings">
                Learnings & Improvements
              </TabsTrigger>
            </TabsList>

            <TabsContent value="challenges">
              <div className="grid md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Code className="mr-2 h-4 w-4" /> Challenges
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-1">
                      {project.challenges.map((challenge, index) => (
                        <li key={index}>{challenge}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Lightbulb className="mr-2 h-4 w-4" /> Solutions
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-1">
                      {project.solutions.map((solution, index) => (
                        <li key={index}>{solution}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="learnings">
              <div className="grid md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Lightbulb className="mr-2 h-4 w-4" /> Key Learnings
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-1">
                      {project.learnings.map((learning, index) => (
                        <li key={index}>{learning}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Rocket className="mr-2 h-4 w-4" /> Future Improvements
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-1">
                      {project.futureImprovements.map((improvement, index) => (
                        <li key={index}>{improvement}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>

          <div className="flex justify-center space-x-4">
            <Button asChild>
              <Link href={project.liveUrl}>
                <ExternalLink className="mr-2 h-4 w-4" /> View Live Project
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href={project.githubUrl}>
                <Github className="mr-2 h-4 w-4" /> View on GitHub
              </Link>
            </Button>
          </div>
        </div>
      </main>

      <footer className="bg-muted py-6 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Your Name. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ProjectPage;
