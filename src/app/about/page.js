"use client";
import { useRouter } from "next/navigation";
import React from "react";

const About = () => {
  const router = useRouter();
  return (
    <div>
      <h1>About page</h1>
      <button onClick={() => router.push("/")}>Go back to Home Page</button>
    </div>
  );
};

export default About;
