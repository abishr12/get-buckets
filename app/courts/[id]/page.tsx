import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { MapPin, Star, Clock, ThumbsUp, Share2, Flag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { courts, reviews } from "@/lib/data"

interface CourtPageProps {
  params: {
    id: string
  }
}

export default function CourtPage({ params }: CourtPageProps) {
  const court = courts.find((c) => c.id === params.id)

  if (!court) {
    notFound()
  }

  const courtReviews = reviews.filter((review) => review.courtId === court.id)

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-10 bg-white border-b">
        <div className="container flex items-center justify-between h-16 px-4 mx-auto">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
              <MapPin className="w-4 h-4 text-white" />
            </div>
            <span className="text-xl font-bold">Buckets</span>
          </Link>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm">
              Sign In
            </Button>
            <Button size="sm">Sign Up</Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <div className="relative h-64 md:h-96">
          <Image src={court.image || "/placeholder.svg"} alt={court.name} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h1 className="text-3xl font-bold text-white">{court.name}</h1>
            <div className="flex items-center mt-2">
              <div className="flex items-center px-2 py-1 text-sm font-medium bg-orange-500 rounded-md text-white">
                <Star className="w-3 h-3 mr-1 fill-white text-white" />
                {court.rating}
              </div>
              <span className="ml-2 text-sm text-white">({court.reviewCount} reviews)</span>
            </div>
          </div>
        </div>
        <div className="container px-4 py-8 mx-auto">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="md:col-span-2">
              <Tabs defaultValue="about">
                <TabsList className="mb-6">
                  <TabsTrigger value="about">About</TabsTrigger>
                  <TabsTrigger value="reviews">Reviews</TabsTrigger>
                  <TabsTrigger value="photos">Photos</TabsTrigger>
                </TabsList>
                <TabsContent value="about">
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-xl font-bold">About {court.name}</h2>
                      <p className="mt-2 text-muted-foreground">
                        {court.description ||
                          "This is a popular basketball court in Austin, TX. It features multiple courts and is well-maintained."}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Amenities</h3>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {court.amenities.map((amenity) => (
                          <Badge key={amenity} variant="outline">
                            {amenity}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Hours</h3>
                      <div className="mt-2 space-y-1 text-sm">
                        <div className="flex justify-between">
                          <span>Monday - Friday</span>
                          <span>6:00 AM - 10:00 PM</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Saturday - Sunday</span>
                          <span>7:00 AM - 9:00 PM</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="reviews">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <h2 className="text-xl font-bold">{courtReviews.length} Reviews</h2>
                      <Button>Write a Review</Button>
                    </div>
                    <div className="space-y-6">
                      {courtReviews.map((review) => (
                        <div key={review.id} className="pb-6 border-b">
                          <div className="flex items-start gap-4">
                            <Avatar>
                              <AvatarImage src={review.userImage} alt={review.userName} />
                              <AvatarFallback>{review.userName.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div className="flex-1">
                              <div className="flex items-center justify-between">
                                <h3 className="font-semibold">{review.userName}</h3>
                                <span className="text-sm text-muted-foreground">{review.date}</span>
                              </div>
                              <div className="flex items-center mt-1">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`w-4 h-4 ${
                                      i < review.rating ? "fill-orange-500 text-orange-500" : "text-gray-300"
                                    }`}
                                  />
                                ))}
                              </div>
                              <p className="mt-2">{review.text}</p>
                              <div className="flex items-center gap-4 mt-4">
                                <Button variant="ghost" size="sm" className="flex items-center gap-1">
                                  <ThumbsUp className="w-4 h-4" />
                                  Helpful
                                </Button>
                                <Button variant="ghost" size="sm" className="flex items-center gap-1">
                                  <Share2 className="w-4 h-4" />
                                  Share
                                </Button>
                                <Button variant="ghost" size="sm" className="flex items-center gap-1">
                                  <Flag className="w-4 h-4" />
                                  Report
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="photos">
                  <div className="space-y-6">
                    <h2 className="text-xl font-bold">Photos</h2>
                    <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                      {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div key={i} className="relative aspect-square overflow-hidden rounded-md">
                          <Image
                            src={`/placeholder.svg?height=300&width=300&text=Court+Photo+${i}`}
                            alt={`${court.name} photo ${i}`}
                            fill
                            className="object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
            <div>
              <div className="sticky top-24 space-y-6">
                <div className="p-4 border rounded-lg">
                  <h3 className="text-lg font-semibold">Location</h3>
                  <div className="flex items-center mt-2 text-sm">
                    <MapPin className="w-4 h-4 mr-2 text-muted-foreground" />
                    {court.address}
                  </div>
                  <div className="relative mt-4 aspect-video overflow-hidden rounded-md bg-muted">
                    <Image
                      src="/placeholder.svg?height=200&width=400&text=Map"
                      alt="Map"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <Button className="w-full mt-4">Get Directions</Button>
                </div>
                <div className="p-4 border rounded-lg">
                  <h3 className="text-lg font-semibold">Hours</h3>
                  <div className="flex items-center mt-2 text-sm">
                    <Clock className="w-4 h-4 mr-2 text-muted-foreground" />
                    <span className="text-green-600 font-medium">Open Now</span>
                  </div>
                  <div className="mt-2 space-y-1 text-sm">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span>6:00 AM - 10:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday - Sunday</span>
                      <span>7:00 AM - 9:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="py-6 border-t">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-muted-foreground">© 2025 Buckets. All rights reserved.</p>
            <nav className="flex items-center gap-4">
              <Link href="#" className="text-sm text-muted-foreground hover:underline">
                Terms
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:underline">
                Privacy
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:underline">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}

