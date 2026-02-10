import { assets } from "@/assets/frontend_assets/assets";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ShoppingCart, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface MealCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  rating: number;
  image: string;
  cuisine?: string;
}

export function MealCard({
  id,
  name,
  description,
  price,
  rating,
  image,
  cuisine,
}: MealCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48 bg-muted overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        <div className="w-full h-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center text-4xl">
          <Image src={assets.food_1} alt={cuisine as string} />
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h3 className="font-semibold text-foreground line-clamp-1">
              {name}
            </h3>
            {cuisine && (
              <p className="text-xs text-muted-foreground">{cuisine}</p>
            )}
          </div>
          <div className="flex items-center gap-1 bg-primary/10 px-2 py-1 rounded">
            <Star className="h-3 w-3 fill-primary text-primary" />
            <span className="text-xs font-semibold text-primary">{rating}</span>
          </div>
        </div>

        <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
          {description}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-primary">
            ${price.toFixed(2)}
          </span>
          <Link href={`/meals/${id}`}>
            <Button size="sm" className="gap-2">
              <ShoppingCart className="h-4 w-4" />
              <span className="hidden sm:inline">Add</span>
            </Button>
          </Link>
        </div>
      </div>
    </Card>
  );
}
