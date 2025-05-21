"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Fetch data with API IN CLIENT COMPONENT</h1>
      <br />
      <br />
      <Link href="/productlist">Go to product List</Link>
    </main>
  );
}
