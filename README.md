# redux-server-side-rendering


My demo project of React and Redux server side rendering. I used the counter idea from the Redux Docs on [server side rendering](http://redux.js.org/docs/recipes/ServerRendering.html), as well as a very simple and easy to follow [universal-redux-template](https://github.com/mz026/universal-redux-template). The reason for the later was to include Route handling on the client and server. 

This involves using `match` from [react-router](https://github.com/reactjs/react-router) to get the Route Tree structure without rendering. Then using some helper function I call `renderToString` from react/server to make the `html` constant in server.js. This is passed along with the initialState from the redux Store to the `renderFullPage()` function to use `res.send()` to the client. 

This helps with SEO and should give me a good demo and reference to start using server side rendering for React in my apps.

**Extra**
The webpack.server.js file is not needed however going through the react-router tutorial on [server-rendering](https://github.com/reactjs/react-router-tutorial/tree/master/lessons/13-server-rendering) show the use and the why of it.