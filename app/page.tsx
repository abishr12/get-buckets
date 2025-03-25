import Link from "next/link"
import { Search, MapPin, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import CourtCard from "@/components/court-card"
import { courts } from "@/lib/data"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-10 bg-secondary text-white border-b">
        <div className="container flex items-center justify-between h-16 px-4 mx-auto">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <MapPin className="w-4 h-4 text-white" />
            </div>
            <span className="text-xl font-bold">Buckets</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-4">
            <Link href="/" className="text-sm font-medium">
              Home
            </Link>
            <Link href="/about" className="text-sm font-medium text-gray-300 hover:text-white">
              About
            </Link>
            <Link href="/contact" className="text-sm font-medium text-gray-300 hover:text-white">
              Contact
            </Link>
          </nav>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm" className="text-white border-white hover:bg-white hover:text-secondary">
              Sign In
            </Button>
            <Button size="sm" className="bg-primary text-white hover:bg-primary/90">
              Sign Up
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="py-12 bg-secondary text-white">
          <div className="container px-4 mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight">Find Basketball Courts in Austin</h1>
            <p className="mt-4 text-lg text-gray-300">
              Discover, review, and share the best places to play basketball in Austin, TX
            </p>
            <div className="flex items-center max-w-md mx-auto mt-6 overflow-hidden rounded-full border border-gray-300">
              <Search className="w-4 h-4 ml-3 text-gray-300" />
              <Input
                type="search"
                placeholder="Search for courts by name or location..."
                className="flex-1 border-0 bg-transparent text-white placeholder-gray-300 focus-visible:ring-0 focus-visible:ring-offset-0"
              />
              <Button className="rounded-l-none bg-primary text-white hover:bg-primary/90">Search</Button>
            </div>
          </div>
        </section>
        <section className="py-12">
          <div className="container px-4 mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold">Popular Courts</h2>
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <Filter className="w-4 h-4" />
                Filters
              </Button>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {courts.map((court) => (
                <CourtCard key={court.id} court={court} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="py-6 bg-secondary text-white">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-gray-300">© 2025 Buckets. All rights reserved.</p>
            <nav className="flex items-center gap-4">
              <Link href="#" className="text-sm text-gray-300 hover:text-white hover:underline">
                Terms
              </Link>
              <Link href="#" className="text-sm text-gray-300 hover:text-white hover:underline">
                Privacy
              </Link>
              <Link href="#" className="text-sm text-gray-300 hover:text-white hover:underline">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}

