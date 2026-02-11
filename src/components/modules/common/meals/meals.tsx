"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Filter, Search } from "lucide-react";
import { useState } from "react";
import { MealCard } from "../home/mealCard";

const ALL_MEALS = [
  {
    id: "1",
    name: "Margherita Pizza",
    description: "Classic pizza with fresh mozzarella and basil",
    price: 12.99,
    rating: 4.8,
    image: "🍕",
    cuisine: "Italian",
    category: "pizza",
  },
  {
    id: "2",
    name: "Pepperoni Pizza",
    description: "Classic pizza with pepperoni and cheese",
    price: 14.99,
    rating: 4.7,
    image: "🍕",
    cuisine: "Italian",
    category: "pizza",
  },
  {
    id: "3",
    name: "Deluxe Burger",
    description: "Premium beef with lettuce, tomato, and special sauce",
    price: 14.99,
    rating: 4.6,
    image: "🍔",
    cuisine: "American",
    category: "burger",
  },
  {
    id: "4",
    name: "Cheese Burger",
    description: "Classic burger with melted cheese",
    price: 11.99,
    rating: 4.5,
    image: "🍔",
    cuisine: "American",
    category: "burger",
  },
  {
    id: "5",
    name: "Dragon Roll",
    description: "Shrimp tempura, cucumber, and avocado",
    price: 16.99,
    rating: 4.9,
    image: "🍣",
    cuisine: "Japanese",
    category: "sushi",
  },
  {
    id: "6",
    name: "California Roll",
    description: "Crab, cucumber, and avocado",
    price: 12.99,
    rating: 4.6,
    image: "🍣",
    cuisine: "Japanese",
    category: "sushi",
  },
  {
    id: "7",
    name: "Fettuccine Alfredo",
    description: "Creamy fettuccine with parmesan and butter",
    price: 13.99,
    rating: 4.7,
    image: "🍝",
    cuisine: "Italian",
    category: "pasta",
  },
  {
    id: "8",
    name: "Spaghetti Bolognese",
    description: "Spaghetti with meat sauce",
    price: 12.99,
    rating: 4.6,
    image: "🍝",
    cuisine: "Italian",
    category: "pasta",
  },
  {
    id: "9",
    name: "Caesar Salad",
    description: "Fresh romaine, croutons, and parmesan",
    price: 10.99,
    rating: 4.5,
    image: "🥗",
    cuisine: "Healthy",
    category: "salad",
  },
  {
    id: "10",
    name: "Garden Salad",
    description: "Mixed greens with fresh vegetables",
    price: 9.99,
    rating: 4.4,
    image: "🥗",
    cuisine: "Healthy",
    category: "salad",
  },
  {
    id: "11",
    name: "Chocolate Cake",
    description: "Rich chocolate cake with frosting",
    price: 7.99,
    rating: 4.8,
    image: "🍰",
    cuisine: "Dessert",
    category: "dessert",
  },
  {
    id: "12",
    name: "Cheesecake",
    description: "Classic cheesecake with cherry topping",
    price: 8.99,
    rating: 4.7,
    image: "🍰",
    cuisine: "Dessert",
    category: "dessert",
  },
];

const CUISINES = [
  "Italian",
  "American",
  "Japanese",
  "Thai",
  "Mexican",
  "Healthy",
  "Dessert",
];

export default function MealsPage() {
  const [search, setSearch] = useState("");
  const [selectedCuisine, setSelectedCuisine] = useState<string | null>(null);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 50]);

  const filtered = ALL_MEALS.filter((meal) => {
    const matchesSearch =
      meal.name.toLowerCase().includes(search.toLowerCase()) ||
      meal.description.toLowerCase().includes(search.toLowerCase());
    const matchesCuisine = !selectedCuisine || meal.cuisine === selectedCuisine;
    const matchesPrice =
      meal.price >= priceRange[0] && meal.price <= priceRange[1];
    return matchesSearch && matchesCuisine && matchesPrice;
  });

  return (
    <main className="min-h-screen flex flex-col">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary/10 to-accent/10 py-8 md:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Browse Meals
          </h1>
          <p className="text-muted-foreground">
            Find exactly what you&apos;re craving
          </p>
        </div>
      </section>

      {/* Content */}
      <div className="flex-1 py-8 md:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar Filters */}
            <div className="lg:col-span-1">
              <div className="sticky top-20 space-y-6">
                {/* Search */}
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Search
                  </label>
                  <div className="relative">
                    <Input
                      placeholder="Search meals..."
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      className="pl-10"
                    />
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  </div>
                </div>

                {/* Cuisine Filter */}
                <div>
                  <label className="block text-sm font-semibold mb-3">
                    Cuisine
                  </label>
                  <div className="space-y-2">
                    <button
                      onClick={() => setSelectedCuisine(null)}
                      className={`w-full text-left px-3 py-2 rounded transition-colors ${
                        !selectedCuisine
                          ? "bg-primary text-primary-foreground"
                          : "hover:bg-secondary"
                      }`}
                    >
                      All Cuisines
                    </button>
                    {CUISINES.map((cuisine) => (
                      <button
                        key={cuisine}
                        onClick={() => setSelectedCuisine(cuisine)}
                        className={`w-full text-left px-3 py-2 rounded transition-colors ${
                          selectedCuisine === cuisine
                            ? "bg-primary text-primary-foreground"
                            : "hover:bg-secondary"
                        }`}
                      >
                        {cuisine}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div>
                  <label className="block text-sm font-semibold mb-3">
                    Price Range
                  </label>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">
                        ${priceRange[0]}
                      </span>
                      <span className="text-xs text-muted-foreground">to</span>
                      <span className="text-sm font-medium">
                        ${priceRange[1]}
                      </span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="50"
                      value={priceRange[1]}
                      onChange={(e) =>
                        setPriceRange([priceRange[0], Number(e.target.value)])
                      }
                      className="w-full"
                    />
                  </div>
                </div>

                {/* Reset */}
                <Button
                  variant="outline"
                  className="w-full bg-transparent"
                  onClick={() => {
                    setSearch("");
                    setSelectedCuisine(null);
                    setPriceRange([0, 50]);
                  }}
                >
                  <Filter className="h-4 w-4 mr-2" />
                  Reset Filters
                </Button>
              </div>
            </div>

            {/* Meals Grid */}
            <div className="lg:col-span-3">
              {filtered.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-lg text-muted-foreground">
                    No meals found
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Try adjusting your filters
                  </p>
                </div>
              ) : (
                <>
                  <p className="text-sm text-muted-foreground mb-6">
                    Showing {filtered.length} of {ALL_MEALS.length} meals
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filtered.map((meal) => (
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
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
