import Link from 'next/link';

import { MealCard } from '@/components/modules/common/home/mealCard';
import { Card } from '@/components/ui/card';
import { restaurantService } from '@/services/restaurant.service';
import { MealDetails } from '@/types/meal';
import { ArrowLeft, Clock, MapPin, Phone, Star } from 'lucide-react';
import Image from 'next/image';

const RestaurantDetailPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const { data } = await restaurantService.getRestaurantById(id);
  const restaurant = data;

  return (
    <main className="min-h-screen flex flex-col">
      {/* Back Button */}
      <div className="bg-background border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <Link
            href="/restaurants"
            className="inline-flex items-center gap-2 text-primary hover:underline"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to restaurants
          </Link>
        </div>
      </div>

      <div className="flex-1 py-8 md:py-12">
        <div className="mx-auto m px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12">
            <div className="flex flex-wrap gap-6 items-start mb-6">
              {/* Image */}
              <div className="w-full lg:w-[40vw] flex overflow-hidden ">
                <Image
                  src={restaurant.image}
                  alt={restaurant.name}
                  width={750}
                  height={500}
                  className="rounded-xl"
                  priority
                />
              </div>

              {/* Info */}
              <div className="flex-1">
                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                  {restaurant.name}
                </h1>
                <p className="text-lg text-muted-foreground mb-4">
                  {restaurant.description}
                </p>

                {/* Rating */}
                <div className="flex items-center gap-6 mb-6">
                  <div className="flex items-center gap-1 bg-primary/10 px-3 py-2 rounded">
                    <Star className="h-5 w-5 fill-primary text-primary" />
                    <span className="font-semibold text-primary">
                      {restaurant.rating}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">
                      {restaurant.deliveryTime} min
                    </span>
                  </div>
                </div>

                {/* Details Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <Card className="p-4">
                    <p className="text-xs text-muted-foreground mb-1">
                      Location
                    </p>
                    <div className="flex items-start gap-2">
                      <MapPin className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-sm font-medium text-foreground">
                        {restaurant.address}
                      </p>
                    </div>
                  </Card>

                  <Card className="p-4">
                    <p className="text-xs text-muted-foreground mb-1">Hours</p>
                    <div className="flex items-start gap-2">
                      <Clock className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-sm font-medium text-foreground">
                        {restaurant.openingTime}
                      </p>
                    </div>
                  </Card>

                  <Card className="p-4">
                    <p className="text-xs text-muted-foreground mb-1">
                      Contact
                    </p>
                    <div className="flex items-start gap-2">
                      <Phone className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-sm font-medium text-foreground">
                        {restaurant.phone}
                      </p>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </div>

          {/* Menu */}
          <div>
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                Menu
              </h2>
              {/* <p className="text-muted-foreground">
                Minimum order: ${restaurant.minimumOrder.toFixed(2)}
              </p> */}
            </div>

            {restaurant.menuItem.length === 0 ? (
              <div className="flex justify-center items-center w-full h-40">
                <p className="text-4xl font-bold">No menu item available</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {restaurant.menuItem.map((meal: MealDetails) => (
                  <MealCard
                    key={meal.id}
                    id={meal.id}
                    name={meal.name}
                    description={meal.description}
                    price={meal.price}
                    rating={meal.rating}
                    image={meal.imageUrl}
                    cuisine={meal.cuisine}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default RestaurantDetailPage;
