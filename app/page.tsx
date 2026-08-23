import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Services from "@/components/Services";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Home / Hero Section */}
      <main
        id="home"
        className="flex min-h-screen items-center justify-center bg-black text-white"
      >
        <div className="text-center">
          <p className="mb-3 text-xl text-purple-400">Hi, I am</p>

          <h1 className="text-5xl font-bold md:text-7xl">
            Tonima Islam <span className="text-purple-500">Dristy</span>
          </h1>

          <p className="mt-4 text-xl text-gray-400">My Next.js Portfolio</p>
        </div>
      </main>

      {/* About Section */}
      <About />
      <Services />
    </>
  );
}
