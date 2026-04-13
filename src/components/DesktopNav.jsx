import { Link, useLocation } from "react-router-dom";

const DesktopNav = () => {
  const path = useLocation();

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Menu", path: "/menu" },
    { name: "Shop", path: "/shop" },
    { name: "Blogs", path: "/blogs" },
    { name: "Dashboard", path: "/dashboard" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="flex gap-8">
      {links.map((link, index) => (
        <Link
          key={index}
          to={link.path}
          className={`relative font-medium group ${
            link.path === path.pathname ? "text-accent" : ""
          }`}
        >
          {link.name}

          {/* underline animation */}
          <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-accent transition-all duration-300 group-hover:w-full"></span>
        </Link>
      ))}
    </nav>
  );
};

export default DesktopNav;
