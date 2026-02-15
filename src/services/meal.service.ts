import { env } from '@/env';

export const mealService = {
  getAllMeal: async function () {
    try {
      const res = await fetch(`${env.BACKEND_URL}/menu-items`, {
        next: { revalidate: 30 },
      });

      const data = await res.json();

      return data;
    } catch (error) {
      console.log(error);

      return { data: null, error: 'Something went wrong' };
    }
  },
};
