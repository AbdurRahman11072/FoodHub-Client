import { Button } from "@/components/ui/button";
import Link from "next/link";
import { RestaurantCard } from "./restaurantCard";

const PROVIDERS = [
  {
    id: "pizzeria-1",
    name: "Tony's Pizzeria",
    description: "Authentic Italian pizza since 1995",
    rating: 4.8,
    mealsCount: 24,
    image: "🍕",
    deliveryTime: "25",
    location: "Downtown District",
  },
  {
    id: "burger-king",
    name: "Burger King",
    description: "Premium burgers and fries",
    rating: 4.5,
    mealsCount: 18,
    image: "🍔",
    deliveryTime: "30",
    location: "Main Street",
  },
  {
    id: "sushi-bar",
    name: "Sakura Sushi",
    description: "Fresh sushi and sashimi daily",
    rating: 4.9,
    mealsCount: 32,
    image: "🍣",
    deliveryTime: "35",
    location: "Harbor District",
  },
  {
    id: "sushi-king",
    name: "Sakura Sushi",
    description: "Fresh sushi and sashimi daily",
    rating: 4.9,
    mealsCount: 32,
    image: "🍣",
    deliveryTime: "35",
    location: "Harbor District",
  },
];

const TopRestaurant = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-center justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Top Restaurants
            </h2>
            <p className="text-muted-foreground mt-2">
              Highly-rated restaurants near you
            </p>
          </div>
          <Link href="/providers">
            <Button variant="outline">View All</Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {PROVIDERS.map((provider) => (
            <RestaurantCard
              key={provider.id}
              id={provider.id}
              name={provider.name}
              description={provider.description}
              rating={provider.rating}
              mealsCount={provider.mealsCount}
              image={provider.image}
              deliveryTime={provider.deliveryTime}
              location={provider.location}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopRestaurant;
