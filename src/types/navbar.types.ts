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
  session: User;
}

export const menu = [
  { title: 'Home', url: '/' },
  {
    title: 'Browse Meals ',
    url: '/browse-meals',
  },
  {
    title: 'Restaurants',
    url: '/restaurants',
  },
];
export const auth = {
  login: { title: 'Login', url: '/login' },
  signup: { title: 'Sign up', url: '/sign-up' },
};

export type User = {
  name: string;
  email: string;
  emailVerified: boolean;
  image: string;
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
  role: string;
  banned: boolean;
  banReason: string | null;
  banExpires: string | null;
  phoneNumber: string | null;
  address: string | null;
  id: string;
};
