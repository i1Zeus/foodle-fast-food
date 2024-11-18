import { FacebookIcon, InstagramIcon, TiktokIcon, TwitterIcon } from "./icons";

const Footer = () => {
  return (
    <footer className="h-[350px] bg-orange-100/50">
      <div className="sm:px-6 lg:px-8 max-w-screen-2xl flex flex-col justify-center h-full px-4 mx-auto">
        <div className="md:grid-cols-6 grid grid-cols-4 gap-8">
          {/* Section 1 */}
          <div className="md:col-span-3 col-span-1">
            <h1 className="text-2xl font-bold text-orange-400">Foooodle</h1>
            <p className="text-gray-500">All Rights Reserved @ Foodle.Com</p>
            <p className="text-gray-500">2025</p>
            <h1 className="mt-6 text-2xl font-bold text-orange-400">
              Follow Us On
            </h1>
            <div className="flex p-4 space-x-4">
              <a
                href="#"
                className="hover:text-orange-400 text-2xl text-gray-500 duration-150"
              >
                <InstagramIcon />
              </a>
              <a
                href="#"
                className="hover:text-orange-400 text-2xl text-gray-500 duration-150"
              >
                <FacebookIcon />
              </a>
              <a
                href="#"
                className="hover:text-orange-400 text-2xl text-gray-500 duration-150"
              >
                <TiktokIcon />
              </a>
              <a
                href="#"
                className="hover:text-orange-400 text-2xl text-gray-500 duration-150"
              >
                <TwitterIcon />
              </a>
            </div>
          </div>
          {/* Section 2 */}
          <div>
            <h1 className="text-2xl font-bold text-orange-400">Menu</h1>
            <ul className="mt-4 space-y-2">
              <li className="hover:text-orange-400 text-gray-500">Home</li>
              <li className="hover:text-orange-400 text-gray-500">Menu</li>
              <li className="hover:text-orange-400 text-gray-500">About Us</li>
            </ul>
          </div>
          {/* Section 3 */}
          <div>
            <h1 className="text-2xl font-bold text-orange-400">Information</h1>
            <ul className="mt-4 space-y-2">
              <li className="hover:text-orange-400 text-gray-500">Quality</li>
              <li className="hover:text-orange-400 text-gray-500">
                Registration
              </li>
              <li className="hover:text-orange-400 text-gray-500">
                Make A Choice
              </li>
              <li className="hover:text-orange-400 text-gray-500">Subscribe</li>
            </ul>
          </div>
          {/* Section 4 */}
          <div>
            <h1 className="text-2xl font-bold text-orange-400">Contact</h1>
            <ul className="mt-4 space-y-2">
              <li className="hover:text-orange-400 text-gray-500">
                +96477123123123
              </li>
              <li className="hover:text-orange-400 text-gray-500">
                info@foodle.com
              </li>
              <li className="hover:text-orange-400 text-gray-500">
                Iraq, Al Basra Government
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
