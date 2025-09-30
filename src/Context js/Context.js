import { MdHomeRepairService } from "react-icons/md";
import { FaLayerGroup } from "react-icons/fa";
import { GiArchiveResearch } from "react-icons/gi";
import { FaBook } from "react-icons/fa";
import { MdContacts } from "react-icons/md";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import img1 from "../assets/img1.avif";
import img2 from "../assets/img2.avif";
import img3 from "../assets/img3.avif";
import img4 from "../assets/img4.avif";
import img5 from "../assets/img5.avif";

//   navbar section
export const navbar = [
  { menu: "Home", path: "/", icon: SiHomeassistantcommunitystore },
  { menu: "Products", path: "/product", icon: MdHomeRepairService },
  { menu: "Categories", icon: FaLayerGroup },
  { menu: "Search", path: "/search", icon: GiArchiveResearch },
  { menu: "About", path: "/about", icon: FaBook },
  { menu: "Contact", path: "/contact", icon: MdContacts },
];
// Categories
export const Categories = [
  "Men's Clothing",
  "Jewelery",
  "Electronics",
  "women's clothing",
];
// image
export const sliderimage = [img1, img2, img3, img4, img5];
