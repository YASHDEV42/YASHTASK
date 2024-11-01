import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";
const NoProjects = () => {
  return (
    <main className="w-full flex items-center justify-center flex-col">
      <h1 className="mb-5">You don not have any projects 😔</h1>
      <div className="flex flex-col items-center justify-center gap-4">
        <Link href="/dashboard/create-project-ai">
          <Button className="primary-btn px-52 py-6">
            Create Project Powered with AI 🚀
          </Button>{" "}
        </Link>

        <Link href="/dashboard/create-project">
          <Button className="secondary-btn px-40 py-6">
            Create Custom Project
          </Button>
        </Link>
      </div>
    </main>
  );
};

export default NoProjects;
