/**
 * @file     -  Currency input form with input suggestion
 * @author   - Peter Collins <https://github.com/onePeterCollins>
 * @see      - src/components/currency-preview
 *  */

// internal state
import { useState } from 'react';

// type checking
import PropTypes from 'prop-types';

// graphql utils
import { useQuery } from '@apollo/client';

// graphql query
import { CREATEPRICEQUERY } from '../../utils/constants';
import { useEffect } from 'react';



const CurrencyPrice = (props) => {
  const { baseCurrency, quoteCurrency, currencySign, pollInterval, fetchedPrice, style, className } = props;
  const { data } = useQuery(CREATEPRICEQUERY(baseCurrency, quoteCurrency), { pollInterval });
  const [ lastPrice, setLastPrice ] = useState(fetchedPrice || '');

  useEffect(() => {
    if (data) {
      setLastPrice(data?.markets[0]?.ticker?.lastPrice);
    }
  }, [data]);



  return (
    <>
      {data &&
        <p className={`${style} ${className}`}>
          {!lastPrice ?
            <span>Price Unavailable</span>
          :
            <span>{parseFloat(lastPrice).toFixed(2)} {currencySign}</span>
          }
        </p>
      }
    </>
  )
}

CurrencyPrice.propTypes = {
  baseCurrency: PropTypes.string.isRequired,
  quoteCurrency: PropTypes.string.isRequired,
  currencySign: PropTypes.element.isRequired,
  pollInterval: PropTypes.number.isRequired,
  fetchedPrice: PropTypes.string,
  style: PropTypes.object,
  className: PropTypes.string
}

export default CurrencyPrice;
