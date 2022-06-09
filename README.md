# YOLO Bitcasino Task

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
I used React, Apollo graphql client and Hooks API to build a page containing a form and a list.

The form adds the 'EUR' price data of a selected cryptocurrency to the list, and cryptocurrency data can be deleted from the list.


## Live Demo
[Click here](https://bitcasino-22.web.app) to view live demo.


## Getting Started

### `npm install`
Run this command in the project directory to install all dependencies.


## Functionality

## `live suggestion`
The form accepts text input and suggests cryptocurrency codes matching user input.<br/>
This is done by sending a wildcard query to the API that fetches a list of all cryptocurrency codes
available on the featured markets.<br/>
I used 'useLazyQuery' in the 'currency-input-form' component to fetch this data.

## `suggestion filtering`
I wrote a utility function 'FilterCurrencyCodes' which accepts 2 arguments - user input and a list of all
cryptocurrency codes.<br/>
It returns a list of filtered currency codes that begin with whatever the user has typed, or an empty array if there is no match found.<br/>
This data is used to populate the 'data-list' component which appears just below the cryptocurrency code input element.

## `price preview`
Once a valid cryptocurrency code is entered in the input field, another query is sent to the API to fetch the euro price of that cryptocurrency.<br/>
This is done within the 'currency-preview' component.<br/>
Initially I used 'useLazyQuery' hook for this but refactored the component to call 'useQuery' instead, making it easier to read and maintain.

## `shared state`
The project has a global data store containing 'trackedCurrencies' - an array of objects populated from the 'currency-input-form' component.<br/>
I implemented shared state using context API and the 'useReducer' hook in 'App.js' with no external libraries.

## `persistent state`
I implemented persistent state using session storage on line 35 in 'App.js' and in the context definition in 'src/utils/store/index.js'.<br/>
This feature persists the app state after page reload, however it is cleared when the page is closed.

## `graphql polling`
I implemented graphql polling with 0.5seconds interval in the 'currency-price' component which primarily displays the price of a cryptocurrency given the 'base symbol' and the 'quote symbol'.<br/>
I use this component within the 'currency-list' component to handle fetching multiple queries generated from the 'trackedCurrencies' array.

## `prevent identical entries`
If a user tries to add a cryptocurrency that is already on the list, it discards the previous entry and adds the new entry at the top of the list.<br/>
The 'PreventIdenticalEntries' function can be found in 'src/utils/functions' and it is used in the 'currency-input-form' component.


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
The build is minified and the filenames include the hashes.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time.

### `firebase serve`
Launches a local server on port 5000.

### `firebase deploy`
Deploys the 'build' folder to firebase hosting 
> :warning: Requires Authentication.



## Folder structure
The 'src' folder contains all the files and assets used in the project.<br/>

the folders are in the following order;

![Folder structure](/docs/bitcasino-folders.png "Bitcasino folder structure")




## Component structure
The components are structured in the following order;

![Component structure](/docs/bitcasino-components.png "Bitcasino component structure")

<!-- 
    index.js
        |-App.js
            |-Header
            |-MainContent---|
            |-Footer        |-HeroText
                            |-CurrencyList
                            |       |-CurrencyPrice
                            |
                            |-CurrencyInputForm
                            |       |-CurrencyCodeField
                            |               |-DataList
                            |
                            |-CurrencyPreview
                            |       |-CurrencyPrice
                            |
                            |-SubmitButton       

 -->



## Considerations

> :memo:
In this section, I documented the thought process behind the pattern and structure of my code in this project.


## `Modular`
I wrote simple components that serve as building blocks for more complex systems.<br/>
As a result of this modular approach, i created new components for each unique functionality.<br/>
The folder structure was also inspired by this consideration.

## `Maintainble`
I dropped comments at the top of each file containing a file description, a reference to where the file was used and the authors name and github link.<br/>
This makes it easy to report an issue or track existing issues in the code.<br/>
I used suggestive variable and function names to eliminate the need for excessive commenting.

## `Reliable`
To ensure that the code will not crash unexpectedly if someone else had to maintain it, I implemented type checking on components that accept props.<br/>
I also documented my functions properly so that at a glance, another developer working on the project will know what data types to pass and what to expect.<br/>
In cases where I worked with unpredictable object properties, I used optional chaining.

## `User Centric`
Form suggestions, price hint, persistent data and caching with graphql's 'inMemoryCache' all make for a great user experience.



## Thank You!
You have come to the end of this project documentation, if you have a question or comment you can reach out.
I'd be glad to hear from you!

onepetercollins@gmail.com<br/>
Peter Collins
