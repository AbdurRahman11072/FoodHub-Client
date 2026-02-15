import MealDeailsCard from '@/components/modules/common/meals/mealDeailsCard';
import { mealService } from '@/services/meal.service';

const mealDetailsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  const { data } = await mealService.getMealsById(id);

  return <MealDeailsCard data={data} />;
};

export default mealDetailsPage;
