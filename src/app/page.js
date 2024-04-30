import Link from "next/link";

export default function Home() {
  return (
   <div>
    <header className="bg-[--purple] h-screen">
      <nav className="flex justify-around items-center w-full py-8">
        <h2 className="text-3xl font-gilroy-bold">E-learn</h2>
        <ul className="flex gap-10 font-gilroy-medium">
          <li>Home</li>
          <li>About</li>
          <li>Student info</li>
          <li>Support</li>
          <li>Admissions</li>
        </ul>
        <Link href="#" className="font-gilroy-medium border border-black px-8 py-2 rounded-full">Sign up</Link>
      </nav>


    </header>

    <div className="h-screen">
    <h1>Hello</h1>
    </div>
   </div>
  );
}
