import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

interface SmoothieCardProps {
  name: string
  description: string
  image: string
  color?: string
}

export function SmoothieCard({ name, description, image, color = "bg-primary/5" }: SmoothieCardProps) {
  return (
    <Card className={`overflow-hidden hover-scale ${color}`}>
      <div className="relative h-48">
        <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
      </div>
      <CardContent className="p-4">
        <h3 className="font-bold text-lg mb-1">{name}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}
