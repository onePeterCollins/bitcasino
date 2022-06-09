/**
 * @file     -  Currency input form with input suggestion
 * @author   - Peter Collins <https://github.com/onePeterCollins>
 * @see      - src/components/main-content
 *  */

// internal state
import { useContext, useEffect, useState } from 'react';

// shared state
import AppContext from '../../utils/store';

// currency code input field
import CurrencyCodeField from '../currency-code-field';

// submit button
import SubmitButton from '../submit-btn';

// graphql utils
import { useLazyQuery } from '@apollo/client';

// graphql query
import { CREATECURRENCYQUERY, QUOTECURRENCY } from '../../utils/constants';

// utility function
import { LookupCurrencyCodes, FilterCurrencyCodes, PreventIdenticalEntries } from '../../utils/functions';

// currency preview
import CurrencyPreview from '../currency-preview';

// css
import styles from './index.module.css';



const CurrencyInputForm = () => {
  const { state, dispatch } = useContext(AppContext);
  const { trackedCurrencies } = state;
  const [ currencyCode, setCurrencyCode ] = useState('');
  const [ validCurrencyCodes, setValidCurrencyCodes ] = useState([]);
  const [ currencyData, setCurrencyData ] = useState({});
  const [ getCurrencyCodes ] = useLazyQuery(CREATECURRENCYQUERY(QUOTECURRENCY));

  const updateCurrencyCode = (code) => {
    setCurrencyCode(code);

    if (currencyData) {
      setCurrencyData({});
    }
  }

  const updateCurrencyData = (data) => {
    setCurrencyData(data);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if (currencyData) {
      const filteredCurrencyData = PreventIdenticalEntries(currencyData, trackedCurrencies);

      dispatch({ type: "UPDATE_CURRENCY_LIST", value: filteredCurrencyData });
      setCurrencyCode('');
      setCurrencyData({});
    }
  }

  useEffect(() => {
    if (currencyCode.length > 0) {
      LookupCurrencyCodes(getCurrencyCodes)
      .then((result) => {
        if (result?.markets && JSON.stringify(validCurrencyCodes) !== JSON.stringify(FilterCurrencyCodes(currencyCode, result?.markets))) {
          // filter currency codes matching user input
          setValidCurrencyCodes(FilterCurrencyCodes(currencyCode, result?.markets));
        }
      });
    } else {
      if (validCurrencyCodes.length > 0) {
        setValidCurrencyCodes([]);
      }
    }
  }, [currencyCode, getCurrencyCodes, validCurrencyCodes])



  return (
    <form className={`${styles.form} px-12 py-10 mx-2 b-white-bg`} onSubmit={(e) => handleSubmit(e)}>
      <CurrencyCodeField
        id='currency-code'
        capitalize hint='CRYPTOCURRENCY CODE'
        value={currencyCode}
        updateHandler={updateCurrencyCode}
        list={validCurrencyCodes}
      />

      <div className={`${styles.preview_placeholder}`}>
        {validCurrencyCodes.indexOf(currencyCode) !== -1 &&
          <CurrencyPreview
            currencyCode={currencyCode}
            currencyData={currencyData}
            updateCurrencyData={updateCurrencyData}
            validCurrencyCodes={validCurrencyCodes}
          />
        }
      </div>

      <SubmitButton disabled={currencyData?.ticker ? false : true}>Add</SubmitButton>

      <p className='text-center leading-4 text-sm mt-12 b-purple-tint-text'>
        Use of this service is subject to terms and conditions.
      </p>
    </form>
  )
}

export default CurrencyInputForm;
