/**
 * @file     - Export reusable global functions
 * @author   - Peter Collins <https://github.com/onePeterCollins>
 * @see      - src/components/currency-input-form
 *  */



/**
 * @description - Accepts a string value and returns its uppercase value
 * @param {String} stringVal
 * @returns {String} - Uppercase string value
 */
const Capitalize = function (stringVal) {
  return stringVal.toUpperCase();
}



/**
 * @description - Function to load a list of all currency codes from API
 * @param {Object} lazyQuery - A graphql lazy query for fetching currency codes
 * @returns {Array} - Array containing all currency codes
 */
const LookupCurrencyCodes = async (lazyQuery) => {
  // get a list of all currency codes from api
  const currencyCodesList = await lazyQuery();

  return currencyCodesList?.data;
}



/**
 * @description - Filters currency codes matching user input
 * @param {String} currencyCode - Currency code provided by the user
 * @param {Array} fetchedCurrencyCodes - List of currency codes fetched from API
 * @returns {Array} - Array of filtered currency codes
 */
const FilterCurrencyCodes = (currencyCode, fetchedCurrencyCodes) => {
  let filteredCurrencyCodes = [];

  fetchedCurrencyCodes = fetchedCurrencyCodes?.filter((item) => {
    return item?.baseSymbol?.startsWith(currencyCode, 0)
  });

  fetchedCurrencyCodes?.forEach((item) => {
    if (filteredCurrencyCodes?.indexOf(item?.baseSymbol) === -1) {
      filteredCurrencyCodes.push(item?.baseSymbol)
    }
  })

  return filteredCurrencyCodes;
}



/**
 * @description - This function prevents users from adding identical currency tracking data to the list
 * @param {Object} newEntry - new 'CurrencyTrackingData' object (see 'src/utils/classes')
 * @param {Array} trackedCurrencies - 'trackedCurrencies' array from shared state
 */
const PreventIdenticalEntries = (newEntry, trackedCurrencies) => {
  let filteredArray = [];

  filteredArray = trackedCurrencies.filter((data) => { return data.baseSymbol !== newEntry.baseSymbol });
  filteredArray.unshift(newEntry);

  return filteredArray;
}



export {
  Capitalize,
  FilterCurrencyCodes,
  LookupCurrencyCodes,
  PreventIdenticalEntries
}
