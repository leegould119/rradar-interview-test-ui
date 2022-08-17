# Getting Started with  This App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Tech Test 
### `points`

* I Have added pagination to the cards
* Moved cards to seperate components components > Cards > `MovieCard` & `Cards`
* pagination in in components > `CardPagination`
* app data has been moved to the folder `data`
* there is a hook for the pagination in hooks > `Pagination`
* utils has a function  `renderCharacterLength`
* the cards are responsive and will show different grid layouts according to breakpoints 
* I have stripped out semantic-ui in favour of material-ui 
* have added a onclick event to the like button that toggles either green or red 