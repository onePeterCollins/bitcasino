/**
 * @file     - Main container with shared state for input form and currency list
 * @author   - Peter Collins <https://github.com/onePeterCollins>
 * @see      - src/App.js
 *  */

// hero text
import HeroText from '../hero-text';

// currency list
import CurrencyList from '../currency-list';

// currency input
import CurrencyInputForm from '../currency-input-form';

// hero image
import heroImage from '../../assets/images/figure.png';

// css
import styles from './index.module.css';




const MainContent = () => {
  return (
    <main className={`${styles.main_content} grid grid-cols-3 gap-0`}>
      <section className={`${styles.page_left} col-span-2`} style={{backgroundImage: `url(${heroImage})`}}>
        <div className={`h-full`}>
          <HeroText />

          <div className='h-1/2 mt-12'>
            {/* Currency List */}
            <CurrencyList />
          </div>
        </div>
      </section>
    
      <section className={`${styles.page_right} col-span-1`}>
        {/* Currency Input form */}
        <CurrencyInputForm />
      </section>
    </main>
  )
}

export default MainContent;
