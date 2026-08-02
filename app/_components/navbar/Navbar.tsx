import { getMeAction } from "@/app/(auth)/_actions/getMeaction";

import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import NavLinks from "./NavLinks";
import UserMenu from "./UserMenu";

const Navbar = async () => {
  const user = await getMeAction();

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200/80 bg-white/95 backdrop-blur-lg">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-4 px-4 sm:h-18 sm:px-6 lg:px-8">
        <Logo />

        <div className="ml-auto hidden lg:block">
          <NavLinks />
        </div>

        <UserMenu user={user} />

        <MobileMenu user={user} />
      </div>
    </header>
  );
};

export default Navbar;