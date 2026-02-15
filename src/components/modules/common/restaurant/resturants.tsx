'use client';

import { Input } from '@/components/ui/input';
import { RestaurantType } from '@/types/restaurant';
import { Clock, Flame, Search, Star } from 'lucide-react';
import { RestaurantCard } from '../home/restaurantCard';

// const ALL_PROVIDERS = [
//   {
//     id: 'pizzeria-1',
//     name: "Tony's Pizzeria",
//     description: 'Authentic Italian pizza since 1995',
//     rating: 4.8,
//     mealsCount: 24,
//     image: '🍕',
//     deliveryTime: '25',
//     location: 'Downtown District',
//   },
//   {
//     id: 'burger-king',
//     name: 'Burger King',
//     description: 'Premium burgers and fries',
//     rating: 4.5,
//     mealsCount: 18,
//     image: '🍔',
//     deliveryTime: '30',
//     location: 'Main Street',
//   },
//   {
//     id: 'sushi-bar',
//     name: 'Sakura Sushi',
//     description: 'Fresh sushi and sashimi daily',
//     rating: 4.9,
//     mealsCount: 32,
//     image: '🍣',
//     deliveryTime: '35',
//     location: 'Harbor District',
//   },
//   {
//     id: 'thai-kitchen',
//     name: 'Thai Kitchen',
//     description: 'Authentic Thai cuisine and more',
//     rating: 4.7,
//     mealsCount: 28,
//     image: '🍜',
//     deliveryTime: '30',
//     location: 'Asia Town',
//   },
//   {
//     id: 'pasta-house',
//     name: 'Pasta House',
//     description: 'Traditional Italian pasta dishes',
//     rating: 4.6,
//     mealsCount: 20,
//     image: '🍝',
//     deliveryTime: '25',
//     location: 'Italian Quarter',
//   },
//   {
//     id: 'veggie-haven',
//     name: 'Veggie Haven',
//     description: 'Healthy vegetarian options',
//     rating: 4.8,
//     mealsCount: 35,
//     image: '🥗',
//     deliveryTime: '20',
//     location: 'Health District',
//   },
//   {
//     id: 'taco-bella',
//     name: 'Taco Bella',
//     description: 'Mexican street food and tacos',
//     rating: 4.7,
//     mealsCount: 22,
//     image: '🌮',
//     deliveryTime: '25',
//     location: 'Latino Quarter',
//   },
//   {
//     id: 'dessert-dream',
//     name: 'Dessert Dream',
//     description: 'Sweet treats and desserts',
//     rating: 4.9,
//     mealsCount: 40,
//     image: '🍰',
//     deliveryTime: '15',
//     location: 'Midtown',
//   },
// ];

const SORT_OPTIONS = [
  { id: 'rating', label: 'Highest Rated', icon: Star },
  { id: 'fastest', label: 'Fastest Delivery', icon: Clock },
  { id: 'trending', label: 'Trending', icon: Flame },
];

export default function RestaurantPage({ data }: { data: RestaurantType[] }) {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary/10 to-accent/10 py-8 md:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Restaurants & Providers
          </h1>
          <p className="text-muted-foreground">
            Browse restaurants and food providers near you
          </p>
        </div>
      </section>

      {/* Content */}
      <div className="flex-1 py-8 md:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Search and Filter */}
          <div className="space-y-6 mb-10">
            {/* Search */}
            <div className="relative">
              <Input
                placeholder="Search restaurants..."
                className="pl-10 py-6 text-base"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            </div>

            {/* Sort */}
            <div className="flex gap-2 overflow-x-auto pb-2">
              {SORT_OPTIONS.map((option) => {
                const Icon = option.icon;
                return (
                  <button
                    key={option.id}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium whitespace-nowrap transition-colors 'bg-secondary text-foreground hover:bg-secondary/80'
                    }`}
                  >
                    {/* ${
                      sortBy === option.id
                        ? 'bg-primary text-primary-foreground'
                        :  */}
                    <Icon className="h-4 w-4" />
                    {option.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Results */}
          <p className="text-sm text-muted-foreground mb-6">
            Showing 5 of {data?.length} providers
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data?.map((provider) => (
              <RestaurantCard
                key={provider.id}
                id={provider.id}
                name={provider.name}
                description={provider.description}
                rating={provider.rating}
                mealsCount={provider.menuItemCount}
                image={provider.image}
                deliveryTime={provider.deliveryTime}
                location={provider.address}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
