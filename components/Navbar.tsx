import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <nav className="px-9 flex items-center justify-between w-full p-2 bg-transparent">
      {/* Name */}
      <h1 className="text-2xl font-extrabold">Foodle</h1>

      {/* Links */}
      <ul className="flex space-x-4">
        <li>
          <a href="/">
            <Button variant="link">Home</Button>
          </a>
        </li>
        <li>
          <a href="/menu">
            <Button variant="link">Menu</Button>
          </a>
        </li>
        <li>
          <a href="/about">
            <Button variant="link">About Us</Button>
          </a>
        </li>
      </ul>

      {/* Auth */}
      <div>
        <Button variant="ghost">Login</Button>
        <Button variant="default">Sign Up</Button>
      </div>
    </nav>
  );
};

export default Navbar;
