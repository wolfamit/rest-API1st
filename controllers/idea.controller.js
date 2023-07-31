const ideas = require("../models/idea.models")



/**
 * Seacrh all Idea
 */
exports.fetchAllIdeas = (req , res ) =>{
    res.status(200).send(ideas);


}

// C:\Users\91983\Desktop\REST API VISHWA MOHAN\controllers\idea.controller.js


/**
 * Create idea
 */
let idCount = 1;
exports.createIdea = (req , res ) =>{
    //Read the request body 
    const idea = req.body;
    //Need to generate the next id    
    idea.id = ++idCount;
    // Save it in the list of existing ideas
    ideas[idCount] = idea;
    //return the response
    res.status(201).send(ideas[idCount]);
}




/**
 * Update idea
 */
exports.upadteindea = (req, res) => {

    // I need to read the id passed in the path
    //121.0.0.1/8080/ideas/1
    const ideaId  =  req.params.id;

    //if the idea is present - modify else return error
    if (ideas[ideaId] ){
        ideas[ideaId] = req.body;
        res.status(200).send(ideas[ideaId]);
    }
    else{
        res.status(400).send({
            message: "Idea Id is passed was not coreect"
        })
    }
}
/**
 * Delete idea
 */
exports.deleteIdea = (req, res) =>{
    //check id present yes delete no return error messaeg

    if(ideas[req.params.id]){  
         delete ideas[req.params.id]
         res.status(200).send({message: "it is deleted successfully"})}
         else{res.status(404).send({message: "wrong id present"})}

}