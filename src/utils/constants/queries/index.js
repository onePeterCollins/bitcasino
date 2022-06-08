/**
 * @file     -  Globally accessible graphql queries
 * @author   - Peter Collins <https://github.com/onePeterCollins>
 * @see      - src/utils/constants/index.js
 *  */

import { gql } from "@apollo/client";



/**
 * @description - Create a wildcard query to get all cryptocurrency codes
 * @param {String} quoteSymbol 
 * @returns - A wildcard graphql query for cryptocurrency codes
 */
const CREATECURRENCYQUERY = (quoteSymbol) => {
  return (gql
    `query markets {
      markets (marketSymbol: "*/${quoteSymbol}") {
        baseSymbol
      }
    }`
  )
}



/**
 * @description - Creates a dynamic price query given the base symbol and quote symbol
 * @param {String} baseSymbol 
 * @param {String} quoteSymbol 
 * @returns - A graphql price query
 */
const CREATEPRICEQUERY = (baseSymbol, quoteSymbol) => {
  return (gql
    `query price {
      markets (filter:{ baseSymbol: {_eq:"${baseSymbol}"} quoteSymbol: {_eq:"${quoteSymbol}"}}) {
        marketSymbol
        ticker {
          lastPrice
        }
      }
    }`
  )
}



export {
  CREATECURRENCYQUERY,
  CREATEPRICEQUERY
}
