/**
 * @file     -  Currency input form with input suggestion
 * @author   - Peter Collins <https://github.com/onePeterCollins>
 * @see      - src/components/currency-input-form
 *  */

// type checking
import PropTypes from 'prop-types';

// uuid
import { v4 as uuidv4 } from 'uuid';

// capitalize function
import { Capitalize } from '../../utils/functions';

// data list
import DataList from '../data-list';

// css
import styles from './index.module.css';



const CurrencyCodeField = (props) => {
  const { capitalize, hint, updateHandler, value, list } = props;
  const dataListId = uuidv4();

  const updateCurrencyCode = (value) => {
    const currencyCode = capitalize ? Capitalize(value) : value;

    updateHandler(currencyCode);
  }

  

  return (
    <div className={styles.container}>
      <span className={`${styles.hint} flex flex-row text-xs leading-none tracking-tight b-purple-tint-text b-white-bg px-3 py-1 ml-4`}>{hint}</span>
      <input type='text' id={uuidv4()} list={dataListId} className={`${styles.input} w-full bg-opacity-0 font-bold b-purple-text px-7 py-4`} placeholder='BTC' value={value} onInput={(e) => {updateCurrencyCode(e.target.value)}} />
      
      {/* 'id' on datalist component should have the same value as 'list' on input element */}
      {list?.length > 0 &&
        <>
          {list.indexOf(value) === -1 &&
            <DataList id={dataListId} list={list} clickHandler={(value) => updateCurrencyCode(value)} />
          }
        </>
      }
    </div>
  )
}



CurrencyCodeField.propTypes = {
  capitalize: PropTypes.bool,
  hint: PropTypes.string,
  updateHandler: PropTypes.func.isRequired,
  value: PropTypes.string,
  list: PropTypes.array,
}

export default CurrencyCodeField;
