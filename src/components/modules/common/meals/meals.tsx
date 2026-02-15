import { Meal } from '@/types/meal';
import { MealCard } from '../home/mealCard';

export default function MealsPage({ ALL_MEALS }: { ALL_MEALS: Meal[] }) {
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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Meals Grid */}
            <div className="lg:col-span-3">
              {ALL_MEALS.length === 0 ? (
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
                    Showing {ALL_MEALS.length} of {ALL_MEALS.length} meals
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {ALL_MEALS.map((meal) => (
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
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
