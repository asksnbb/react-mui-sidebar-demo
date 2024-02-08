// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//        <div>
//         adad
//        </div>
//     // <div className="App">
//     //   <header className="App-header">
//     //     <img src={logo} className="App-logo" alt="logo" />
//     //     <p>
//     //       Edit <code>src/App.js</code> and save to reload.
//     //     </p>
//     //     <a
//     //       className="App-link"
//     //       href="https://reactjs.org"
//     //       target="_blank"
//     //       rel="noopener noreferrer"
//     //     >
//     //       Learn React
//     //     </a>
//     //   </header>
//     // </div>
//   );
// }

// export default App;


// import "./styles.css";
import { Sidebar, Menu, MenuItem, Submenu } from "react-mui-sidebar";
import { HiHome } from "react-icons/hi";
import { GrServices } from "react-icons/gr";
import { FaUser, FaLaptop, FaTshirt } from "react-icons/fa";
import {
  MdWeb,
  MdDesignServices,
  MdSmartphone,
  MdArticle,
} from "react-icons/md";
import { SiGooglemarketingplatform } from "react-icons/si";
import { FcElectronics } from "react-icons/fc";
import { TiWatch } from "react-icons/ti";
import { GiClothes, GiDress } from "react-icons/gi";
import { BsSunglasses } from "react-icons/bs";
import { RiContactsFill } from "react-icons/ri";

export default function App() {
  return (
    <Sidebar width={"300px"}>
      <MenuItem link="/" icon={<HiHome />}>
        Home
      </MenuItem>
      {/* <MenuItem link="/about" icon={<FaUser />}>
        About Us
      </MenuItem> */}
      <Submenu
        icon={<GrServices />}
        title="Services"
        subBackgroundColor="#434E5F"
      >
        <MenuItem link="/services/web" icon={<MdWeb />}>
          Web Development
        </MenuItem>
        <MenuItem
          link="/services/digital-marketing"
          icon={<SiGooglemarketingplatform />}
        >
          Digital Marketing
        </MenuItem>
        <MenuItem link="/services/graphic-design" icon={<MdDesignServices />}>
          Graphic Design
        </MenuItem>
      </Submenu>

      <Menu subHeading="Products">
        <Submenu
          icon={<FcElectronics />}
          title="Electronics"
          subBackgroundColor="#434E5F"
        >
          <MenuItem
            link="/products/electronics/smartphones"
            icon={<MdSmartphone />}
          >
            Smartphones
          </MenuItem>
          <MenuItem link="/products/electronics/laptops" icon={<FaLaptop />}>
            Laptops
          </MenuItem>
          <MenuItem link="/products/electronics/wearables" icon={<TiWatch />}>
            Wearables
          </MenuItem>
        </Submenu>
        <Submenu
          icon={<GiClothes />}
          title="Apparel"
          subBackgroundColor="#434E5F"
        >
          <MenuItem link="/products/apparel/mens" icon={<FaTshirt />}>
            Men's Clothing
          </MenuItem>
          <MenuItem link="/products/apparel/women" icon={<GiDress />}>
            Women's Clothing
          </MenuItem>
          <MenuItem
            link="/products/apparel/accessories"
            icon={<BsSunglasses />}
          >
            Accessories
          </MenuItem>
        </Submenu>
      </Menu>

      <Menu subHeading="Other">
        <MenuItem link="/blog" icon={<MdArticle />}>
          Blog
        </MenuItem>
        <MenuItem link="/contact" icon={<RiContactsFill />}>
          Contact Us
        </MenuItem>
      </Menu>
    </Sidebar>
  );
}
