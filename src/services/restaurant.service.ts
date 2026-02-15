import { env } from '@/env';

export const restaurantService = {
  getAllRestaurant: async function () {
    try {
      const res = await fetch(`${env.BACKEND_URL}/restaurants`, {
        next: { revalidate: 10 },
      });

      const data = await res.json();
      return data;
    } catch (error) {
      console.error(error);
      return { data: null, error: { message: 'Something Went Wrong' } };
    }
  },

  getRestaurantById: async function (id: string) {
    try {
      const res = await fetch(`${env.BACKEND_URL}/restaurants/${id}`, {
        next: { revalidate: 10 },
      });

      const data = await res.json();

      console.log(data);

      return data;
    } catch (error) {
      console.error(error);
      return { data: null, error: { message: 'Something Went Wrong' } };
    }
  },
};
