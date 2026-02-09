export interface MenuItem {
  title: string;
  url: string;
  description?: string;
  icon?: React.ReactNode;
}

export interface Navbar1Props {
  className?: string;

  menu?: MenuItem[];
  auth?: {
    login: {
      title: string;
      url: string;
    };
    signup: {
      title: string;
      url: string;
    };
  };
}

export const menu = [
  { title: "Home", url: "/" },
  {
    title: "Browse Meals ",
    url: "/browse-meals",
  },
  {
    title: "Restaurants",
    url: "/restaurants",
  },
];
export const auth = {
  login: { title: "Login", url: "/login" },
  signup: { title: "Sign up", url: "/sign-up" },
};
