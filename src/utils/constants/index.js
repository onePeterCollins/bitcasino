/**
 * @file     -  Create and export global constants
 * @author   - Peter Collins <https://github.com/onePeterCollins>
 * @see      - src/index.js, src/components/currency-input-form, src/components/currency-preview
 *  */

import client from './client';
import { QUOTECURRENCY } from './globals';
import { CREATECURRENCYQUERY, CREATEPRICEQUERY } from './queries';



const CLIENT = client;



export {
    CLIENT,
    CREATECURRENCYQUERY,
    CREATEPRICEQUERY,
    QUOTECURRENCY
}
