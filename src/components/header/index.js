/**
 * @file     -  App header
 * @author   - Peter Collins <https://github.com/onePeterCollins>
 * @see      - src/App.js
 *  */

// logo
import logo from "../../assets/images/logo.svg";

// css
import styles from './index.module.css';



const Header = () => {
  return (
    <header className={`${styles.app_header} flex flex-row py-3 items-center`}>
      <div className={`${styles.logo_container} flex flex-row items-center`}>
        <img src={logo} alt='Logo' loading='eager' style={{height: '5vh'}} />
      </div>
    </header>
  )
}

export default Header;
