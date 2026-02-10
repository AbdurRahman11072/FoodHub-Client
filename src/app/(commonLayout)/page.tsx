import FeaturedMeals from "@/components/modules/common/home/featuredMeals";
import Hero from "@/components/modules/common/home/hero";
import TopRestaurant from "@/components/modules/common/home/topRestaurant";

export default function Home() {
  return (
    <div className="space-y-6">
      <Hero />
      <FeaturedMeals />
      <TopRestaurant />
    </div>
  );
}
