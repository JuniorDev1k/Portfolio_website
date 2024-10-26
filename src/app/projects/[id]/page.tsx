// src/app/projects/[id]/page.tsx
"use client";
import { useParams, notFound } from "next/navigation";
import { Projects, Project } from "../../../data";

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
    <div>
      <h1>{project.title}</h1>
    </div>
  );
};

export default ProjectPage;
