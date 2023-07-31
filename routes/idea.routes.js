
const ideaController = require("../controllers/idea.controller")

/**
 * Define the routes for the
 * calls like 
 * GET 127.0.0.1:8080/ideaApp
 */
module.exports = (app) =>{
    app.get("/ideas" , ideaController.fetchAllIdeas)

    //Post call
    app.post("/ideas",ideaController.createIdea)

    //Put call
    app.put("/ideas/:id", ideaController.upadteindea)
    app.delete("/ideas/:id", ideaController.deleteIdea)
}