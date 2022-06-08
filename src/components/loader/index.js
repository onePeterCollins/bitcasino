/**
 * @file     -  Loading animation
 * @author   - Peter Collins <https://github.com/onePeterCollins>
 * @see      - src/components/currency-input-form.js
 *  */

// animation
import spinner from '../../assets/images/loading.svg';



const Loader = () => {
  return (
    <div>
      <img src={spinner} alt='loading indicator' />
    </div>
  )
}

export default Loader;
