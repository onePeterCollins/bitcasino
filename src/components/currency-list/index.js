/**
 * @file     -  Currency input form with input suggestion
 * @author   - Peter Collins <https://github.com/onePeterCollins>
 * @see      - src/components/main-content
 *  */

// internal state
import { useContext } from 'react';

// shared state
import AppContext from '../../utils/store';

// uuid
import { v4 as uuidv4 } from 'uuid';

// currency price display
import CurrencyPrice from '../currency-price';

// constant value
import { QUOTECURRENCY } from '../../utils/constants';

// css
import styles from './index.module.css';



const CurrencyList = () => {
  const { state, dispatch } = useContext(AppContext);
  const { trackedCurrencies } = state;

  const handleDelete = (index) => {
    trackedCurrencies.splice(index, 1);
    dispatch({ type: "UPDATE_CURRENCY_LIST", value: trackedCurrencies });
  }



  return (
    <div className={`${styles.currency_list}`}>
      {trackedCurrencies?.length > 0 &&
        <ul>
          {trackedCurrencies.map((item, index) => {
            return (
              <li key={uuidv4()}>
                <div className={`${styles.price_tab}`}>
                  <div className='h-full grid grid-cols-10 gap-0'>
                    <span className='col-span-8'>
                      <div className='h-full grid grid-cols-8 gap-0'>
                        <div className={`${styles.icon} col-span-2`}></div>
                          <div className='flex flex-col justify-center col-span-6'>
                            <p className='text-xl b-white-text'>{item.baseSymbol}</p>
                            <CurrencyPrice
                              className='text-sm b-purple-tint-text mt-1'
                              baseCurrency={item.baseSymbol}
                              quoteCurrency={QUOTECURRENCY}
                              pollInterval={500}
                              currencySign={<span>&euro;</span>}
                              fetchedPrice={item.ticker.lastPrice}
                            />
                          </div>
                      </div>
                    </span>

                    <span className='flex flex-col justify-center items-center col-span-2'>
                      <span className={`${styles.close_button} text-center text-lg b-purple-tint-text`} onClick={() => handleDelete(index)}>x</span>
                    </span>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      }
    </div>
  )
}

export default CurrencyList;
