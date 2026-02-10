import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MealCard } from "./mealCard";
const FEATURED_MEALS = [
  {
    id: "1",
    name: "Margherita Pizza",
    description: "Classic pizza with fresh mozzarella and basil",
    price: 12.99,
    rating: 4.8,
    image: "🍕",
    cuisine: "Italian",
  },
  {
    id: "2",
    name: "Deluxe Burger",
    description: "Premium beef with lettuce, tomato, and special sauce",
    price: 14.99,
    rating: 4.6,
    image: "🍔",
    cuisine: "American",
  },
  {
    id: "3",
    name: "Dragon Roll",
    description: "Shrimp tempura, cucumber, and avocado",
    price: 16.99,
    rating: 4.9,
    image: "🍣",
    cuisine: "Japanese",
  },
  {
    id: "4",
    name: "Caesar Salad",
    description: "Fresh romaine, croutons, and parmesan",
    price: 10.99,
    rating: 4.5,
    image: "🥗",
    cuisine: "Healthy",
  },
  {
    id: "5",
    name: "Pad Thai",
    description: "Stir-fried noodles with peanuts and vegetables",
    price: 11.99,
    rating: 4.7,
    image: "🍜",
    cuisine: "Thai",
  },
  {
    id: "6",
    name: "Chocolate Cake",
    description: "Rich chocolate cake with frosting",
    price: 7.99,
    rating: 4.8,
    image: "🍰",
    cuisine: "Dessert",
  },
];

const FeaturedMeals = () => {
  return (
    // use this for shadow dark:bg-secondary/30
    <section className="py-5  rounded-4xl">
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-center justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Featured Meals
            </h2>
            <p className="text-muted-foreground mt-2">
              Popular choices from our top restaurants
            </p>
          </div>
          <Link href="/meals">
            <Button variant="outline">View All</Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {FEATURED_MEALS.map((meal) => (
            <MealCard
              key={meal.id}
              id={meal.id}
              name={meal.name}
              description={meal.description}
              price={meal.price}
              rating={meal.rating}
              image={meal.image}
              cuisine={meal.cuisine}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedMeals;
