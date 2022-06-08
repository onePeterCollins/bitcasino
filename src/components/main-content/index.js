/**
 * @file     - Main container with shared state for input form and currency list
 * @author   - Peter Collins <https://github.com/onePeterCollins>
 * @see      - src/App.js
 *  */

// internal state
import React, { Suspense, useState } from 'react';

// loader
import Loader from '../loader';

// hero text
import HeroText from '../hero-text';

// css
import styles from './index.module.css';

// currency list
const CurrencyList = React.lazy(() => import('../currency-list'));

// currency input
const CurrencyInputForm = React.lazy(() => import('../currency-input-form'));



const MainContent = () => {
  const [ heroImage, setHeroImage ] = useState(null);

  // reduce chunk size by deferring image load
  (async () => {
    if (!heroImage) {
      const image = await import("../../assets/images/figure.png");

      setHeroImage(image.default);
    }
  })();



  return (
    <main className={`${styles.main_content} grid grid-cols-3 gap-0`}>
      <section className={`${styles.page_left} col-span-2`} style={{backgroundImage: `url(${heroImage})`}}>
        <div className={`h-full`}>
          <HeroText />

          <div className='h-1/2 mt-12'>
            {/* Currency List */}
            <Suspense fallback={
              <div className={`${styles.list_placeholder} flex items-center justify-center`}>
                <Loader />
              </div>
            }>
              <CurrencyList />
            </Suspense>
          </div>
        </div>
      </section>
    
      <section className={`${styles.page_right} col-span-1`}>
        {/* Currency Input form */}
        <Suspense fallback={
          <div className={`${styles.form_placeholder} flex py-10 items-center justify-center mx-2 b-white-bg`}>
            <Loader />
          </div>
        }>
          <CurrencyInputForm />
        </Suspense>
      </section>
    </main>
  )
}

export default MainContent;
