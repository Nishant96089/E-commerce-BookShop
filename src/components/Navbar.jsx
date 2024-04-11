import styles from "../styles/Navbar.module.css";
import { FaCartFlatbed } from "react-icons/fa6";
import { GiBookAura } from "react-icons/gi";

const Navbar = () => {
  return (
    <nav className={styles.navBar}>
      <h3 className={styles.appName}>
        <GiBookAura className={styles.appLogo}/>{"  "}BookShop
      </h3>
      <FaCartFlatbed className={styles.cartLogo} />
    </nav>
  );
};

export default Navbar;
