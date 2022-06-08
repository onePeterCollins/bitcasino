/**
 * @file     -  Reusable styled submit button
 * @author   - Peter Collins <https://github.com/onePeterCollins>
 * @see      - src/components/currency-input-form
 *  */

// css
import styles from './index.module.css';



const SubmitButton = (props) => {
  const { children, disabled } = props;

  return (
    <>
      {!disabled ?
        <div className={`${styles.submit} b-red-bg my-2`}>
          <button className={`${styles.submit} text-center font-bold b-white-text py-2`} type='submit'>{children}</button>
        </div>
      :
        <div className={`${styles.submit} ${styles.submit_disabled} b-red-bg my-2`}>
          <button className={`${styles.submit} ${styles.submit_disabled} text-center font-bold b-white-text py-2`} type='submit' disabled={disabled}>{children}</button>
        </div>
      }
    </>
    
  )
}

export default SubmitButton;
