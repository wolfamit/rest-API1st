const express = require('express');

const app = express();

/* Middlware:- fn in js 
*request object 
*response object
*next request
 valididating cliet
 */
app.use(express.json());
app.use(myMiddleWare);
function myMiddleWare(req, res, next) {
    console.log("Inside a middleware  ");
    next(); //It will pass on the control to the next step
}
/**
 * Stich the routes to the aerver
 */
require("./routes/idea.routes")(app);
/*
starting server
*/

app.listen((8080) , ()=>
{
    console.log("server started");
});

/*backend:-
    *Routes (receptionist)
    *controller (waiter)
    *Models ( DATABASE ) (Cook)
    logiaclly order is models=>Controller=>Routes 
*/ 