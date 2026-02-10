import { Footer } from "@/components/layout/footer";
import { Navbar1 } from "@/components/layout/navbar1";
import { auth, menu } from "@/types/navbar.types";

const commonLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <main className="container mx-auto p-2">
      <Navbar1 menu={menu} auth={auth} />
      {children}
      <Footer />
    </main>
  );
};

export default commonLayout;
