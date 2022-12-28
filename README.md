# Fancy Calculator with React and Mobx

![Fancy Calculator](https://github.com/dpeeva/fcalc/blob/main/fcalc.jpg?raw=true)

Task Description:

## Provider (=> this is actually the Retriever!)
Simulate third party provider which calculates the operations:

* `add`
* `subtract`
* `divide`
* `multiply`

It would accept (`val1`, `val2`, "operation") and return the `result`


## DataFacade
* Communicates with the **Provider**
* sends (`val1`, `val2`, "operation") from **Parser**
* reacts on the `result` from the **Provider**


## Parser
* sends to the **DataFacade** (`val1`, `val2`, "operation")
* reacts on the `result` from the **DataFacade**

Accepts values from **StateStore**
It has controllers which take the raw values and format them to (`val1`, `val2`, "operation")


## StateStore
* `click` and `key` event Listeners
* Listeners will send values to the **Parser**

For example,

<pre>
2
5
=
+
</pre>

reacts on the `result`

## UI
* buttons and screen
* reacts on the `result` and renders in the screen


## Requirements
* Has to work with integer and decimal numbers in this format: `354`, `0.233`, `.233`, `(87 + .44)`
* Operation with only two numbers (`2+6=8`, `4*10=40`)
* Must be able to input negative numbers: `-2 + -5`
* Must have a **Clear button**: clears everything and resets to `0`



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
