import { Button } from "@/components/ui/button";
import Link from "next/link";

const ProjectPage = () => {
  return (
    <div className="flex flex-col gap-10 justify-center items-center w-screen h-screen ">
      <h1 className="text-3xl">Projects Page Coming soom ... </h1>
      <Link href="/#projects">
        <Button className="p-8 text-xl ">Go To Projects</Button>
      </Link>
    </div>
  );
};

export default ProjectPage;
