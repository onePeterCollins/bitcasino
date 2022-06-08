/**
 * @file     - Export reusable object models
 * @author   - Peter Collins <https://github.com/onePeterCollins>
 * @see      - src/components/currency-input-form
 *  */




class CurrencyTrackingData {
/**
 * @description - This class provides a data model for cryptocurrencies added to the watch list
 * @param {String} baseSymbol - Currency code, example; 'BTC'
 * @param {Object} ticker - Currency price data fetched from API
 */
  constructor ({ baseSymbol, ticker }) {
    this.__typename = 'CurrencyTrackingData'
    this.baseSymbol = baseSymbol || ''
    this.ticker = ticker || {}
  }
}

export {
  CurrencyTrackingData
}
