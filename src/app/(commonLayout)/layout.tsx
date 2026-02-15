import { Footer } from '@/components/layout/footer';
import { Navbar1 } from '@/components/layout/navbar1';
import { userService } from '@/services/user.service';
import { auth, menu } from '@/types/navbar.types';

const commonLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const session = await userService.getSession();

  return (
    <main className="container mx-auto p-2">
      <Navbar1 menu={menu} auth={auth} session={session} />
      {children}
      <Footer />
    </main>
  );
};

export default commonLayout;
