/**
 * @file     -  Cryptocurrency price tracking app using React, Apollo graphql and Hooks API
 * @author   - Peter Collins <https://github.com/onePeterCollins>
 * @see      - src/index.js
 *  */

// internal state
import { useContext, useState } from "react";

// shared state
import AppContext from './utils/store';

// header
import Header from "./components/header";

// Main Content
import MainContent from './components/main-content';

// footer
import Footer from './components/footer';



const App = () => {
  const APPSTORE = useContext(AppContext);

  const [ appState, setAppState ] = useState(APPSTORE);
  const [ bgImage, setBgImage ] = useState(null);

  // state action
  const setState = (action) => {
    switch (action.type) {
      case "UPDATE_VALUE":
        setAppState(action.value);
        sessionStorage.setItem('sharedState', JSON.stringify(action.value));
        break;

      default:
        return;
    }
  }

  // reduce chunk size by deferring image load
  (async () => {
    if (!bgImage) {
      const image = await import("./assets/images/bg.png");

      setBgImage(image.default);
    }
  })();


  
  return (
    <AppContext.Provider value={{appState, setState}}>
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
