import User from "@/components/User";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1></h1>
      <User nombre="Mikhael"></User>
      <Link href="/contact">Go to contact</Link>
    </main>
  );
}