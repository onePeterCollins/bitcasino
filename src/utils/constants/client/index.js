/**
 * @file     -  Create and export the Apollo graphql client
 * @author   - Peter Collins <https://github.com/onePeterCollins>
 * @see      - src/utils/constants/index.js
 *  */

import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: 'https://api.blocktap.io/graphql',
    cache: new InMemoryCache()
});

export default client;
