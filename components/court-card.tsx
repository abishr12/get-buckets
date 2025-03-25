import Link from "next/link"
import Image from "next/image"
import { MapPin, Star, Users } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

interface Court {
  id: string
  name: string
  address: string
  image: string
  rating: number
  reviewCount: number
  amenities: string[]
}

interface CourtCardProps {
  court: Court
}

export default function CourtCard({ court }: CourtCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-48">
        <Image src={court.image || "/placeholder.svg"} alt={court.name} fill className="object-cover" />
      </div>
      <CardContent className="p-4">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-lg font-bold">
              <Link href={`/courts/${court.id}`} className="hover:text-primary">
                {court.name}
              </Link>
            </h3>
            <div className="flex items-center mt-1 text-sm text-muted-foreground">
              <MapPin className="w-3 h-3 mr-1" />
              {court.address}
            </div>
          </div>
          <div className="flex items-center px-2 py-1 text-sm font-medium bg-primary/10 rounded-md text-primary">
            <Star className="w-3 h-3 mr-1 fill-primary text-primary" />
            {court.rating}
          </div>
        </div>
        <div className="flex items-center mt-2 text-sm text-muted-foreground">
          <Users className="w-3 h-3 mr-1" />
          {court.reviewCount} reviews
        </div>
        <div className="flex flex-wrap gap-1 mt-3">
          {court.amenities.map((amenity) => (
            <Badge key={amenity} variant="secondary" className="text-xs">
              {amenity}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between">
        <Button variant="outline" size="sm">
          Save
        </Button>
        <Button size="sm" className="bg-primary text-white hover:bg-primary/90">
          <Link href={`/courts/${court.id}`}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

