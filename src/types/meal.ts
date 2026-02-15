export type Meal = {
  id: string;
  name: string;
  description: string;
  price: number;
  rating: number;
  imageUrl: string;
  cuisine: string;
};

export type MealDetails = {
  id: string;
  restaurantId: string;
  name: string;
  description: string;
  price: number;
  rating: number;
  cuisine: string;
  imageUrl: string;
  available: boolean;
  ingredients: string[];
  deliveryTime: string;
  allergens: string[];
  calories: number;
  servingSize: string;
  createdAt: string;
  updatedAt: string;
  resturant: {
    name: string;
    rating: number;
    deliveryTime: string;
  };
};
