import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Clock, MapPin, Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface ProviderCardProps {
  id: string;
  name: string;
  description: string;
  rating: number;
  mealsCount: number;
  image: string;
  deliveryTime?: string;
  location?: string;
}

export function RestaurantCard({
  id,
  name,
  description,
  rating,
  mealsCount,
  image,
  deliveryTime,
  location,
}: ProviderCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <Image
        src={image}
        alt={name}
        width={1000}
        height={500}
        className="w-full h-full -mt-6"
        priority
      />

      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h3 className="font-semibold text-lg text-foreground">{name}</h3>
          </div>
          <div className="flex items-center gap-1 bg-primary/10 px-2 py-1 rounded">
            <Star className="h-4 w-4 fill-primary text-primary" />
            <span className="text-sm font-semibold text-primary">{rating}</span>
          </div>
        </div>

        <p className="text-sm text-muted-foreground mb-3 line-clamp-1">
          {description}
        </p>

        <div className="space-y-2 mb-4">
          {deliveryTime && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>{deliveryTime} </span>
            </div>
          )}
          {location && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span className="line-clamp-1">{location}</span>
            </div>
          )}
          <p className="text-sm text-muted-foreground">
            {mealsCount} meals available
          </p>
        </div>

        <Link href={`/providers/${id}`} className="w-full">
          <Button variant="outline" className="w-full bg-transparent">
            View Menu
          </Button>
        </Link>
      </div>
    </Card>
  );
}
