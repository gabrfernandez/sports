const {Athlete} = require('../models/athlete.model'); 

module.exports.list=(request, response)=>{
    Athlete.find({})
        .then(athletes=>{
            response.json(athletes);
        })
        .catch(err=>{
            response.status(400).json(err);
        })
}