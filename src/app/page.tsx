import { SportCardCarousel } from "@/components/sport-cards/SportCardCarousel";
import { SocialShareGrid } from "@/components/social/SocialShareGrid";
import Link from "next/link";
import {
  FaSearch,
  FaIdCard,
  FaFilter,
  FaRocket,
  FaCode,
  FaServer,
  FaDatabase,
  FaImages,
  FaArrowRight,
} from "react-icons/fa";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-start max-w-7xl mx-auto p-8">
      <div className="w-full grid grid-cols-2 gap-16">
        {/* Left Column: Title and Description */}
        <div className="flex flex-col gap-16">
          {/* Title Section */}
          <div className="flex flex-col gap-2">
            <h1 
              className="flex items-baseline text-[#5AE65A] drop-shadow-[0_0_10px_rgba(90,230,90,0.8)] transition-all duration-300 ease-in-out cursor-pointer" 
              style={{ fontFamily: "'Get Schwifty', sans-serif" }}
            >
              <span className="text-8xl hover:text-[#7FFF7F]">R</span>
              <span className="text-7xl hover:text-[#7FFF7F]">ick</span>
              <span className="text-4xl mx-2 hover:text-[#7FFF7F]">and</span>
              <span className="text-8xl hover:text-[#7FFF7F]">M</span>
              <span className="text-7xl hover:text-[#7FFF7F]">orty</span>
            </h1>
            <p className="text-lg font-roboto font-black text-white/90 ml-2">
              Character Collection
            </p>
          </div>

          {/* Description Section */}
          <div className="space-y-6">
            <h2 className="flex items-center gap-3 font-get-schwifty text-2xl text-[#5AE65A]">
              <FaRocket className="text-xl" />
              Project Overview
            </h2>
            <div className="space-y-4">
              <p className="text-white/80">
                This is a didactic exploration of building modern web applications using{' '}
                <Link href="https://nextjs.org" className="text-[#5AE65A] hover:text-[#7FFF7F] transition-colors">
                  Next.js 15
                </Link>{' '}
                and the{' '}
                <Link href="https://rickandmortyapi.com" className="text-[#5AE65A] hover:text-[#7FFF7F] transition-colors">
                  Rick and Morty API
                </Link>
                .
              </p>
              <div className="space-y-2">
                <h3 className="flex items-center gap-3 text-xl text-white/90">
                  <FaCode className="text-lg" />
                  Key Features
                </h3>
                <ul className="space-y-2 text-white/80">
                  <li className="flex items-center gap-2">
                    <FaServer className="text-[#5AE65A]" />
                    Server-side rendering for optimal performance
                  </li>
                  <li className="flex items-center gap-2">
                    <FaDatabase className="text-[#5AE65A]" />
                    Integration with Rick and Morty API
                  </li>
                  <li className="flex items-center gap-2">
                    <FaImages className="text-[#5AE65A]" />
                    Interactive character carousel display
                  </li>
                </ul>
              </div>
              <Link 
                href="/tech-stack"
                className="inline-flex items-center gap-2 text-[#5AE65A] hover:text-[#7FFF7F] transition-colors"
              >
                Explore Tech Stack
                <FaArrowRight />
              </Link>
            </div>
          </div>
        </div>

        {/* Right Column: Social Icons and Carousel */}
        <div className="flex flex-col gap-16">
          <div className="w-full flex justify-center">
            <SocialShareGrid />
          </div>
          <SportCardCarousel />
        </div>
      </div>

      {/* Search Feature Section */}
      <section className="w-full mt-16">
        <div className="bg-black/40 backdrop-blur-md rounded-xl p-8 space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold text-[#5AE65A]">
              Find Your Favorite Characters
            </h2>
            <p className="text-xl text-white/90">
              Explore the Rick and Morty multiverse with our interactive
              character finder
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all">
              <div className="text-[#5AE65A] text-4xl mb-4">
                <FaSearch className="mx-auto" />
              </div>
              <h3 className="text-2xl font-bold text-[#5AE65A] mb-3">
                Search by Name
              </h3>
              <p className="text-white/80">
                Find characters using their full or partial name
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all">
              <div className="text-[#5AE65A] text-4xl mb-4">
                <FaIdCard className="mx-auto" />
              </div>
              <h3 className="text-2xl font-bold text-[#5AE65A] mb-3">
                Unique ID
              </h3>
              <p className="text-white/80">
                Access directly using the character's identifier number
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all">
              <div className="text-[#5AE65A] text-4xl mb-4">
                <FaFilter className="mx-auto" />
              </div>
              <h3 className="text-2xl font-bold text-[#5AE65A] mb-3">
                Advanced Filters
              </h3>
              <p className="text-white/80">
                Refine your search by status, species, gender and more
              </p>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link href="/characters" className="inline-block">
              <button className="bg-[#5AE65A] hover:bg-[#7FFF7F] text-black font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105 flex items-center gap-2">
                <span>Start Searching</span>
                <FaSearch className="text-lg" />
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
