# 5-a-side Team Picker

This is a 5-a-side team picker web app built with [React](https://github.com/facebook/react/) JavaScript library and [Redux](https://github.com/reduxjs/redux) state container for JavaScript apps. It was built to meet the requirements of the final technical exercise on [DevelopMe_'s Coding Fellowship](https://developme.training/fellowship/) Spring 2018.

## Installation

Ensure you have the following installed on your computer:

- [Node.js](https://nodejs.org/) JavaScript runtime
- [yarn](https://github.com/yarnpkg/yarn) package manager
- [Google Chrome](https://www.google.com/chrome/) or similar browser

Clone this repository with:

    git clone git@github.com:simonlewin/5-a-side.git

Change into the project directory and run `yarn` to install code dependencies.

    cd 5-a-side
    yarn

## Running the app

To run the app, in your terminal, type `yarn start` and view the app in a browser at `localhost:3000`.

Alternatively view the app running here: [http://simonl.developme.space/](http://simonl.developme.space/)

## Directory structure

The directory structure of the app is as follows:

- `public/`: contains index.html file
- `src/`: folder containing all JavaScript source files. Includes:
  - `App.jsx`: the main application file, imports the various components and containers to run the app
  - `components/`: presentation components, which are assembled by parent components, accepting props and managing actions via callback functions.
  - `containers/`: container components which connect components to the Redux store either to manage the passing of props or the dispatching of actions.
  - `css/`: custom css stylesheet 
  - `data/`: contains action and reducer logic used to manage changes to the Redux store
  - `index.js`: initial React JavaScript file, imports various React and Redux components and links the Redux store and reducer

`.gitignore`: a file used by git to determine which files and folders should be excluded from version control
`package.json`: a config file to store the project's dependencies and specify which yarn scripts to run
`yarn.lock`: a list of all dependencies used by the app, accessed by yarn when the development environment is initially set up

## The brief

The final [DevelopMe Coding Fellowship](https://developme.training/fellowship/) exercise was to create a tool which randomly picks 5-a-side football teams from a list of 10 names (10 players = 2 teams of 5). 

Additional advanced features might also include:

- support for _n_-a-side, where a list of any length can be split into two teams
- support for balancing of the teams, where some measure of each player's strength is used to allocate teams fairly

## App design

### Minimum Viable Product (MVP) 

The goal of this exercise was to create a tool that randomly pick a 5-a-side football team from a list of 10 names. Focussing on the most minimal functionality the app could have while still being useful led to the following requirements, the ability to: 

- Add a name to a list of names (up to 10) 
- Change a name on the list in case of mistyped or misspelled names
- Delete a name from the list
- Randomly pick two 5-a-side teams
- Clear the list of names and start again

### Wireframes

The following illustrates these functional requirements as wireframe diagrams:

<img src='./5-a-side-mockup.png'>

### Implementation

I wanted to keep the 5-a-side tool simple and initially considered creating it as a single webpage using HTML, Bootstrap CSS and JavaScript. A prototype of this is available in a separate repo [here](https://github.com/simonlewin/5-a-side-prototype).

I was, however, keen to build an app from scratch using React and Redux even though for something like as this tool React/Redux is not necessary. React is designed for building more complicated web-apps and using React in this case adds to the amount of extra data that needs to be downloaded and potentially causes the app to run slowly on older computers. Both approaches require that users have JavaScript enabled on for the site to do anything.

I also considered that despite the complexity of using React and Redux for this tool functionality such input validation and the edit and delete functions would be easier to implement than in JavaScript.

I also wanted to create a tool where the data was persistent using [Redux Persist](https://github.com/rt2zz/redux-persist)

These considerations led me to develop the app using React and Redux.

## Issues

### State 

Initially, I considered using a Redux store with a simple array of strings for player names. However, given that I later wanted to include support for balancing teams I decided to use an array of player objects instead. This also helped simplify the delete and reset functions as it allowed the use of a player `id` property. I consider and discounted building a separate an API and database to store the player data, this would perhaps have made manipulating players data easier but at the cost of more complexity which I didn't consider was warranted for this app.

### Input validation 

I have only implemented simple input validation based on the maximum and minimum length of the name and a regex check to test whether the names contain letters and spaces. As a consequence, the app doesn't handle names with accented characters, hyphens, apostrophes or commas. It also allows names with any number of spaces. Researching the issue further I concluded that to implement more sophisticated validation would have taken more time than I had available.

### Styling

I began this app using very simple styling, based on Bootstrap 4 CSS, with the intention of adding more custom CSS styling later. I ran out of time to create any custom CSS styling hence the app has the look and feel of a vanilla Bootstrap app.

### Edit functionality

It is possible to add and delete player names but not edit them. In the time I had available to complete the app I was unable to find an elegant solution to editing player names without adding more input forms. I wanted the ability to click on an edit button, or the player name, and for the Add input field to change to an Edit field. I was unable to get this working in the time so omitted edit player functionality from this version of the app.

## Further enhancements and improvements

Given more time to work on the app I would: 

- add the ability to edit names
- add some more interesting custom CSS styling
- add some 'getting started' instructions - although the app is reasonable intuitive it would be useful to have some instructions
- add more complete and sophisticated name validation to handle accented characters, hyphens, apostrophes, commas and a prevent users entering multiple consecutive spaces
- prevent duplicate names being entered
- add a limit to how many names can be entered. Currently the app supports _n_-a-side, where _n_ is unlimited. This creates UI problems as player names and buttons scroll off the top and bottom of the screen. To fix this I'd set a limit to the number of players that can be entered
- add support for inputing a measure of each player's strength and support the ability to create balanced teams
- add a footer to the app to giving 'about', 'contact' information, and a link to the code on GitHub 
- add support for data persistence using [Redux Persist](https://github.com/rt2zz/redux-persist)

## Functional testing

The app has been tested on:

- Safari - Version 11.1
- Google Chrome - Version 67
- Google Chrome Canary - Version 69
- Firefox - Version 59
- Firefox Developer Edition - Version 61.0b7
- Safari on iOS version 10.3.3

The main functionality works ok on these platforms. The 404 page not found error is working as expected in the development environment but not in production. This requires further investigation as it seems to be related to how the app is hosted.

Some limited browser compatibility testing was undertaken using [http://browsershots.org/](http://browsershots.org/). While this was largely inconclusive it illustrated potential compatibility problems with older browsers running on Windows machines. 

No HTML/CSS validation or accessibility testing was done on the app.

