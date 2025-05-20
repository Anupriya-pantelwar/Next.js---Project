"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const navigate = (name) => {
    router.push(name);
  };
  const router = useRouter();
  const [name, setName] = useState("Anil");
  const apple = () => {
    setName("Sidhu");
  };
  return (
    <main>
      <div>
        <h1>Basic Routing | Make New Page</h1>
        <Link href="/login">Go To Login page</Link>
        <br />
        <br />
        <Link href="/about">Go to About page</Link>
        <br />
        <br />
        <button onClick={() => navigate("/login")}>Go to login Page</button>
        <br />
        <button onClick={() => navigate("/about")}>Go to about page</button>
      </div>
    </main>
  );
}
