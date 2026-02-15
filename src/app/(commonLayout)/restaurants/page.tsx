import RestaurantPage from '@/components/modules/common/restaurant/resturants';
import { restaurantService } from '@/services/restaurant.service';

const restaurantsPage = async () => {
  const data = await restaurantService.getAllRestaurant();
  console.log(data.data);

  return <RestaurantPage data={data.data} />;
};

export default restaurantsPage;
