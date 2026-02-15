import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { MealDetails } from '@/types/meal';

import {
  ArrowLeft,
  Heart,
  Minus,
  Plus,
  ShoppingCart,
  Star,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const MealDeailsCard = ({ data }: { data: MealDetails }) => {
  return (
    <div className="flex-1 py-8 md:py-12">
      <div className="mx-auto  px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          href="/meals"
          className="inline-flex items-center gap-2 text-primary hover:underline mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Browes Meal
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Image */}
          <Image
            src={data?.imageUrl}
            alt={data.name}
            width={720}
            height={600}
            className="rounded-2xl"
          />

          {/* Details */}
          <div className="space-y-6">
            {/* Header */}
            <div>
              <p className="text-sm text-muted-foreground mb-1">
                {data.cuisine}
              </p>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                {data.name}
              </h1>
              <p className="text-muted-foreground text-lg">
                {data.description}
              </p>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1 bg-primary/10 px-3 py-2 rounded">
                <Star className="h-5 w-5 fill-primary text-primary" />
                <span className="font-semibold text-primary">
                  Rating: {data.rating}
                </span>
              </div>
            </div>

            {/* Provider */}
            <Card className="p-4">
              <p className="text-sm text-muted-foreground mb-2">
                Available from
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-foreground">
                    {data.resturant.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {data.resturant.deliveryTime} min delivery
                  </p>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-primary text-primary" />
                  <span className="text-sm font-semibold">
                    {data.resturant.rating}
                  </span>
                </div>
              </div>
            </Card>

            {/* Price and Quantity */}
            <div className="border-t border-border pt-6 grid grid-cols-2">
              <div>
                <p className="text-sm text-muted-foreground mb-4">
                  Price per serving
                </p>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-4xl font-bold text-primary">
                    ${data.price.toFixed(2)}
                  </span>
                </div>
              </div>

              {/* Quantity Selector */}
              <div>
                <div className="flex  items-center gap-4 mb-6">
                  <span className="text-sm font-medium">Quantity:</span>
                  <div className="flex items-center border border-border rounded-lg">
                    <button className="p-2 hover:bg-secondary">
                      <Minus className="h-4 w-4" />
                    </button>

                    <span className="px-4 font-medium">5</span>
                    <button className="p-2 hover:bg-secondary">
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex gap-3">
                  <Button size="lg" className="flex-1 gap-2">
                    <ShoppingCart className="h-5 w-5" />
                    Add to Cart
                  </Button>
                  <Button size="lg" variant="outline">
                    <Heart
                      className="h-5 w-5"
                      // fill={isFavorite ? 'currentColor' : 'none'}
                      // color={isFavorite ? 'rgb(239, 68, 68)' : 'currentColor'}
                    />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 pt-8 border-t border-border">
          {/* Ingredients */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">
              Ingredients
            </h3>
            <ul className="space-y-2">
              {data.ingredients.map((ingredients: string) => (
                <li
                  key={ingredients}
                  className="flex items-center gap-2 text-foreground"
                >
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  {ingredients}
                </li>
              ))}
            </ul>
          </div>

          {/* Nutrition & Allergens */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-foreground mb-4">
                Nutrition Info
              </h3>
              <Card className="p-4">
                <div className="flex items-center justify-between py-2">
                  <span className="text-foreground">Calories</span>
                  <span className="font-semibold">{data.calories}</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  per {data.servingSize}
                </p>
              </Card>
            </div>

            <div>
              <h3 className="text-lg font-bold text-foreground mb-4">
                Allergens
              </h3>
              <div className="flex flex-wrap gap-2">
                {data.allergens.map((allergen: string) => (
                  <span
                    key={allergen}
                    className="px-3 py-1 bg-destructive/10 text-destructive rounded-full text-sm font-medium"
                  >
                    {allergen}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealDeailsCard;
