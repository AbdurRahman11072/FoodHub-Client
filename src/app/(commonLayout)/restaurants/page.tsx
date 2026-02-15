import RestaurantPage from '@/components/modules/common/restaurant/resturants';
import { restaurantService } from '@/services/restaurant.service';

const restaurantsPage = async () => {
  const data = await restaurantService.getAllRestaurant();

  return <RestaurantPage data={data.data} />;
};

export default restaurantsPage;
