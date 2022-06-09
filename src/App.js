/**
 * @file     -  Cryptocurrency price tracking app using React, Apollo graphql and Hooks API
 * @author   - Peter Collins <https://github.com/onePeterCollins>
 * @see      - src/index.js
 *  */

// internal state
import { useContext, useReducer } from "react";

// shared state
import AppContext from './utils/store';

// header
import Header from "./components/header";

// Main Content
import MainContent from './components/main-content';

// footer
import Footer from './components/footer';

// background image
import bgImage from './assets/images/bg.png';



const App = () => {
  const APPSTORE = useContext(AppContext);

  // reducer
  const reducer = (state, action) => {
    switch (action.type) {
      case "UPDATE_CURRENCY_LIST":
        // I use this to persist current state when user refreshes the page
        sessionStorage.setItem('sharedState', JSON.stringify({ ...state, trackedCurrencies: action?.value }));
        return { ...state, trackedCurrencies: action?.value };

      default:
        return;
    }
  }

  const [ state, dispatch ] = useReducer(reducer, APPSTORE);


  
  return (
    <AppContext.Provider value={{state, dispatch}}>
      <div className="App" style={{backgroundImage: `url(${bgImage})`}}>
        {/* Header */}
        <Header />

        {/* Main Content */}
        <MainContent />

        {/* Footer */}
        <Footer />
      </div>
    </AppContext.Provider>
  );
}

export default App;
