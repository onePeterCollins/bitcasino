/**
 * @file     - Page footer
 * @author   - Peter Collins <https://github.com/onePeterCollins>
 * @see      - src/App.js
 *  */

// css
import styles from './index.module.css';



const Footer = () => {
  return (
    <footer className={`${styles.app_footer} b-white-bg pt-10`}>
      <p className='text-xs leading-none tracking-tight b-purple-shade-text'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel nisi lacinia, dignissim elit vel, tempor justo. Praesent a blandit dui. Aliquam auctor at dui vestibulum vulputate. Proin vestibulum tristique magna,
        interdum cursus urna ornare eu. Nullam vestibulum in felis sit amet tincidunt. Fusce maximus efficitur convallis. Nam laoreet semper lacus, eu mattis magna dignissim eu. Nullam id ligula ac mi elementum ornare.
      </p>
    </footer>
  )
}

export default Footer;
