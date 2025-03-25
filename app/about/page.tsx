import Link from "next/link"
import Image from "next/image"
import { MapPin, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
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
            <Link href="/" className="text-sm font-medium text-gray-300 hover:text-white">
              Home
            </Link>
            <Link href="/about" className="text-sm font-medium">
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
            <h1 className="text-4xl font-bold tracking-tight">About Buckets</h1>
            <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
              We're on a mission to help basketball enthusiasts find the best courts in Austin, TX
            </p>
          </div>
        </section>
        <section className="py-12">
          <div className="container px-4 mx-auto">
            <div className="grid gap-12 md:grid-cols-2 items-center">
              <div>
                <h2 className="text-3xl font-bold">Our Story</h2>
                <p className="mt-4 text-muted-foreground">
                  Buckets was created by a group of basketball enthusiasts who were tired of showing up to courts that
                  were crowded, poorly maintained, or closed. We wanted to create a platform where players could share
                  information about courts, leave reviews, and help others find the perfect place to play.
                </p>
                <p className="mt-4 text-muted-foreground">
                  Since our launch in 2023, we've mapped over 50 basketball courts in Austin and collected thousands of
                  reviews from our community. Our goal is to be the most comprehensive resource for basketball players
                  in Austin, and eventually expand to other cities.
                </p>
                <div className="mt-6">
                  <Button className="bg-primary text-white hover:bg-primary/90">Join Our Community</Button>
                </div>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600&text=Basketball+Players"
                  alt="Basketball players"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 bg-secondary text-white">
          <div className="container px-4 mx-auto text-center">
            <h2 className="text-3xl font-bold">Our Team</h2>
            <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
              Meet the passionate basketball lovers behind Buckets
            </p>
            <div className="grid gap-8 mt-12 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "Marcus Johnson",
                  role: "Founder & CEO",
                  image: "/placeholder.svg?height=300&width=300&text=MJ",
                },
                {
                  name: "Alicia Rodriguez",
                  role: "Head of Community",
                  image: "/placeholder.svg?height=300&width=300&text=AR",
                },
                {
                  name: "Darnell Williams",
                  role: "Lead Developer",
                  image: "/placeholder.svg?height=300&width=300&text=DW",
                },
              ].map((member) => (
                <div key={member.name} className="flex flex-col items-center">
                  <div className="relative w-32 h-32 overflow-hidden rounded-full">
                    <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold">{member.name}</h3>
                  <p className="text-gray-300">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-12">
          <div className="container px-4 mx-auto text-center">
            <h2 className="text-3xl font-bold">Get In Touch</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Have questions or suggestions? We'd love to hear from you!
            </p>
            <div className="flex flex-col items-center justify-center gap-4 mt-8 md:flex-row">
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-primary" />
                <span>info@buckets.com</span>
              </div>
              <div className="hidden md:block">•</div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-primary" />
                <span>(512) 555-BUCK</span>
              </div>
            </div>
            <div className="mt-8">
              <Button className="bg-primary text-white hover:bg-primary/90">Contact Us</Button>
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

