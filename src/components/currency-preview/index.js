/**
 * @file     -  Currency input form with input suggestion
 * @author   - Peter Collins <https://github.com/onePeterCollins>
 * @see      - src/components/currency-input-form
 *  */

// internal state
import { useEffect } from 'react';

// type checking
import PropTypes from 'prop-types';

// graphql utils
import { useQuery } from '@apollo/client';

// graphql query
import { CREATEPRICEQUERY, QUOTECURRENCY } from '../../utils/constants';

// data model
import { CurrencyTrackingData } from '../../utils/classes';

// currency price display
import CurrencyPrice from '../currency-price';

// css
import styles from './index.module.css';



const CurrencyPreview = (props) => {
  const { currencyCode, currencyData, updateCurrencyData, validCurrencyCodes } = props;
  const { loading, error, data } = useQuery(CREATEPRICEQUERY(currencyCode, QUOTECURRENCY));

  useEffect(() => {
    if (data) {
      const fetchedCurrencyData = new CurrencyTrackingData({ baseSymbol: currencyCode, ticker: data?.markets[0]?.ticker });

      if (fetchedCurrencyData && JSON.stringify(currencyData) !== JSON.stringify(fetchedCurrencyData)) {
        updateCurrencyData(fetchedCurrencyData);
      }
    }
  }, [currencyCode, currencyData, data, updateCurrencyData]);



  return (
    <div className={`${styles.preview}`}>
      {validCurrencyCodes.indexOf(currencyCode) !== -1 && currencyData &&
        <CurrencyPrice
          className='text-xl b-purple-tint-text py-2'
          baseCurrency={`${currencyCode}`}
          quoteCurrency={`${QUOTECURRENCY}`}
          currencySign={<span>&euro;</span>}
          pollInterval={0}
          fetchedPrice={`${currencyData?.ticker?.lastPrice}`}
        />
      }

      {loading && 
        <p className='text-center b-purple-tint-text py-2'>Loading...</p>
      }

      {error &&
        <p className='text-center b-red-text py-2'>Network error please try again.</p>
      }
    </div>
  )
}



CurrencyPreview.propTypes = {
  currencyCode: PropTypes.string.isRequired,
  currencyData: PropTypes.object.isRequired,
  updateCurrencyData: PropTypes.func.isRequired,
  validCurrencyCodes: PropTypes.array.isRequired
}

export default CurrencyPreview;
