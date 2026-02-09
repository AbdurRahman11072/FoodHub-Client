import { Navbar1 } from "@/components/layout/navbar1";
import { auth, menu } from "@/types/navbar.types";

const commonLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="container mx-auto">
      <Navbar1 menu={menu} auth={auth} />
      {children}
    </div>
  );
};

export default commonLayout;
