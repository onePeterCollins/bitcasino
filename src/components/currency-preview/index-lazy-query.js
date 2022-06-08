/**
 * @file     -  Currency preview component - BETTER VERSION EXISTS
 *              (this component was refactored to call 'useQuery' instead of 'useLazyQuery')
 * @see      - src/components/currency-preview/index.js
 * 
 * @author   - Peter Collins <https://github.com/onePeterCollins> 
 * @see      - src/components/currency-input-form
 *  */

// internal state
import { useCallback, useEffect, useState } from 'react';

// type checking
import PropTypes from 'prop-types';

// graphql utils
import { useLazyQuery } from '@apollo/client';

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
  const [ loading, setLoadingState ] = useState(false);
  const [ error, setError ] = useState(null);
  const [ getLastPrice ] = useLazyQuery(CREATEPRICEQUERY(currencyCode, QUOTECURRENCY));

  const handleGetLastPrice = useCallback(async () => {
    getLastPrice()
    .then((result) => {
      const fetchedCurrencyData = new CurrencyTrackingData({ baseSymbol: currencyCode, ticker: result.data?.markets[0]?.ticker });

      setLoadingState(false);

      if (fetchedCurrencyData && JSON.stringify(currencyData) !== JSON.stringify(fetchedCurrencyData)) {
        updateCurrencyData(fetchedCurrencyData);
      }
    })
    .catch((error) => {
      setLoadingState(false);
      setError(error);
    });
  }, [currencyCode, currencyData, getLastPrice, updateCurrencyData]);

  useEffect(() => {
    if (validCurrencyCodes.length === 1 && currencyCode === validCurrencyCodes[0]) {
      if (loading) {
        handleGetLastPrice();
      } else {
        if (!currencyData?.ticker) {
          setLoadingState(true);
        }
      }
    }
  }, [currencyCode, currencyData, handleGetLastPrice, loading, updateCurrencyData, validCurrencyCodes]);



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
