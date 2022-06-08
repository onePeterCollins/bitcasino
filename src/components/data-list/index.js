/**
 * @file     - Currecy input suggestion data list
 * @author   - Peter Collins <https://github.com/onePeterCollins>
 * @see      - src/components/currency-input-form
 *  */

// type checking
import PropTypes from 'prop-types';

// uuid
import { v4 as uuidv4 } from 'uuid';

// css
import styles from './index.module.css';



const DataList = (props) => {
  const { id, list, clickHandler } = props;

  return (
    <>
      {list?.length > 0 &&
        <datalist id={id} className={`${styles.data_list}`}>
          <>
            {list?.map((item) => {
              return (
                <option className={`${styles.data_list_item} b-background-tint-text font-bold px-6 py-2`}
                  onClick={() => clickHandler(item)}
                  key={uuidv4()}
                  value={item}
                >{item}</option>
              )
            })}
          </>
        </datalist>
      }
    </>
  )
}



DataList.propTypes = {
  id: PropTypes.string.isRequired,
  list: PropTypes.array.isRequired,
  clickHandler: PropTypes.func.isRequired
}

export default DataList;
