import { getMeAction } from "@/app/(auth)/_actions/getMeaction";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import NavLinks from "./NavLinks";
import UserMenu from "./UserMenu";

const Navbar = async () => {
  const user = await getMeAction();

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur-md ">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />

        <NavLinks />

        <UserMenu user={user} />

        <MobileMenu />
      </div>
    </header>
  );
};

export default Navbar;
