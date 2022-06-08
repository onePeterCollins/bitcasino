/**
 * @file     - Lightweight global data store using context API
 * @author   - Peter Collins <https://github.com/onePeterCollins>
 * @see      - src/App.js
 *  */

import { createContext } from "react";

const NewState = {
  trackedCurrencies: [],
}

const PersistentState = JSON.parse(sessionStorage.getItem('sharedState'));

const AppState = PersistentState ? PersistentState : NewState;

const AppContext = createContext(AppState);

export default AppContext;
