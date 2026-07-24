import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import NavLinks from "./NavLinks";
import UserMenu from "./UserMenu";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5">

        <Logo />

        <NavLinks />

        <UserMenu />

        <MobileMenu />

      </div>
    </header>
  );
};

export default Navbar;