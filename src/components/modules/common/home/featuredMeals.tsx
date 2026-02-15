import { Button } from '@/components/ui/button';
import { mealService } from '@/services/meal.service';
import { Meal } from '@/types/meal';
import Link from 'next/link';
import { MealCard } from './mealCard';

const FeaturedMeals = async () => {
  const meal = await mealService.getAllMeal();

  const FEATURED_MEALS = meal.data;

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
          {FEATURED_MEALS.map((meal: Meal) => (
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
      </div>
    </section>
  );
};

export default FeaturedMeals;
