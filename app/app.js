//  var React = require('react');
//  var router = require('react-router');

// // var ReactDOM = require('react-dom');
// // //component for individual routes

// //component for all of the routes
// var Route = router.Router;
// var hashHistory = router.hashHistory;
// //catch all route
// var IndexRoute = router.IndexRoute;

// // import { BrowserRouter, Route } from "react-router-dom"
// var Main = require('./components/Main');
// var LandingPage = require("./components/LandingPage");
// // var CoachesPage = require("./components/CoachesPage");
// // var CoachAdmin = require("./components/CoachAdmin");


// module.exports = (
//     <Router history={hashHistory}>
//         <Route path="/" component={Main}>
//             <Route path="LandingPage" component={LandingPage} />
//             <IndexRoute component={LandingPage} />
//         </Route>
//     </Router>
// );

// // ReactDOM.render(
// //     (
// //         <BrowserRouter history={hashHistory}>
// //             <Route path="/" component={Main}>
// //                 <IndexRoute component={LandingPage} />
// //             </Route>
// //         </BrowserRouter>
// //     ), document.getElementById('app'));

var React = require('react');
var ReactDOM = require('react-dom');

var routes = require('./config/routes');

ReactDOM.render(routes, document.getElementById('app'));