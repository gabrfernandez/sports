const AthleteController = require("../controllers/athlete.controller");

module.exports= function(app){
    app.get("/api/athletes", AthleteController.list);
}