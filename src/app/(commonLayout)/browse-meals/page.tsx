import MealsPage from '@/components/modules/common/meals/meals';
import { mealService } from '@/services/meal.service';

const browseMealsPage = async () => {
  const meal = await mealService.getAllMeal();

  const ALL_MEALS = meal.data;
  console.log(ALL_MEALS);

  return <MealsPage ALL_MEALS={ALL_MEALS} />;
};

export default browseMealsPage;
