import { links } from "../lib/data";

const Links = () => {
  return (
    <ul className="flex space-x-4">
      {links.map((link) => (
        <li
          key={link.href}
          className="rounded-full hover:text-white hover:bg-[#1a8fe9] transition py-1 px-2 md:px-4 text-sm sm:text-xl  cursor-pointer font-bold "
        >
          <a href={link.href}>{link.title}</a>
        </li>
      ))}
    </ul>
  );
};
export default Links;
