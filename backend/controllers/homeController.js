const Home = require("../models/HomeModel")



class HomeController{
    static async post(req, res){
        const home = new Home(req.body);
        try{
            const data = await home.register();
            res.status(200).json(data);
        } catch(error){
            res.status(400).json({error: error.message});
        }
    }

    static get(req, res){
        res.status(200).json({Hello: "World"})
    }
}
module.exports = HomeController;